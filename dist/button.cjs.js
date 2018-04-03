/*!
 * fir-ui v0.8.0
 * (c) 2018-present fjc0k <fjc0kb@gmail.com>
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _toString = _interopDefault(require('lodash/toString'));
var _isArray = _interopDefault(require('lodash/isArray'));
var _forOwn = _interopDefault(require('lodash/forOwn'));

function includes(arrayLike, element, fromIndex = 0) {
  for (let i = fromIndex, len = arrayLike.length; i < len; i++) {
    if (arrayLike[i] === element) {
      return true
    }
  }
  return false
}

function isObject(value) {
  return value !== null && typeof value === 'object'
}

function isFunction(value) {
  return typeof value === 'function'
}

const camelCaseCache = Object.create(null);
function camelCase(value) {
  if (camelCaseCache[value]) return camelCaseCache[value]
  let result = '';
  let shouldUpperCase = false;
  for (let i = 0, len = value.length; i < len; i++) {
    const char = value[i];
    if (char === '-') {
      shouldUpperCase = true;
    } else {
      result += (result && shouldUpperCase) ? char.toUpperCase() : char;
      shouldUpperCase = false;
    }
  }
  camelCaseCache[value] = result;
  return result
}

const cache = Object.create(null);

var parseClassExpression = expression => {
  if (cache[expression]) return cache[expression]

  let className;
  let binding;
  let bindingValue;
  let role;

  if (includes(expression, '=', 1)) { // eg: disabled=isDisabled
    [className, binding] = expression.split('=');
  } else {
    const modifier = expression[0];
    if (modifier === '$') { // eg: $type
      binding = expression.substr(1);
      bindingValue = true;
    } else if (modifier === '@') { // eg: @button
      className = expression.substr(1);
      role = className;
    } else if (modifier === ':') { // eg: :disabled
      className = expression.substr(1);
      binding = camelCase(className);
    } else {
      className = expression;
    }
  }

  cache[expression] = {
    className,
    binding,
    bindingValue,
    role
  };

  return cache[expression]
}

const INJECT_ATTR = 'styleName';

/* eslint max-depth: 0 guard-for-in: 0 */

function createElement(_) {
  const args = [].slice.call(arguments, 1);

  // for functional component
  if (isFunction(_)) {
    return createElement.bind(_, {
      createElement: _,
      styles: args[0],
      context: args[1]
    })
  }

  const {
    createElement: h,
    context = {},
    styles = context.$style || {}
  } = _;

  const data = args[1];

  if (isObject(data)) {
    if (!data.staticClass) {
      data.staticClass = '';
    }
    if (!data.attrs) {
      data.attrs = {};
    }

    const modules = data[INJECT_ATTR] || data.attrs[INJECT_ATTR] || '';

    if (modules.length) {
      const _modules = Array.isArray(modules) ? modules : [modules];
      for (let i in _modules) {
        const module = _modules[i];
        if (module && typeof module === 'string') {
          const classExpressions = module.split(/\s+/g);
          for (let i in classExpressions) {
            const classExpression = classExpressions[i];

            let {
              className,
              binding,
              bindingValue,
              role
            } = parseClassExpression(classExpression);

            if (bindingValue) {
              className = context[binding];
              binding = undefined;
            }

            if ((binding ? context[binding] : true) && styles[className]) {
              data.staticClass += ` ${styles[className]}`;
              data.staticClass = data.staticClass.trim();
            }

            if (role) {
              data.attrs['data-role'] = role;
            }
          }
        }
      }
    }

    // remove styleName attr
    delete data[INJECT_ATTR];
    delete data.attrs[INJECT_ATTR];
  }

  return h.apply(null, args)
}

function genFunctionalData() {
  var finalData = {};
  var i = arguments.length;
  var staticClass;

  while (i--) {
    _forOwn(arguments[i], function (descriptor, prop, data) {
      if (!descriptor) return;

      switch (prop) {
        // Array merge strategy (array concatenation).
        case 'class':
        case 'style':
        case 'directives':
          if (!_isArray(finalData[prop])) {
            finalData[prop] = [];
          }

          finalData[prop] = finalData[prop].concat(descriptor);
          break;
        // Space delimited string concatenation strategy.

        case 'staticClass':
          staticClass = _toString(descriptor).trim();

          if (!finalData[prop]) {
            // eslint-disable-line
            finalData[prop] = staticClass;
          } else {
            finalData[prop] += " " + staticClass;
          }

          break;
        // Object merge strategy.

        case 'attrs':
        case 'props':
        case 'domProps':
        case 'scopedSlots':
        case 'staticStyle':
        case 'hook':
        case 'transition':
          if (!finalData[prop]) {
            finalData[prop] = {};
          }

          finalData[prop] = Object.assign({}, descriptor, finalData[prop]);
          break;
        // Object, the properties of which to merge via array merge strategy (array concatenation).
        // Callback merge strategy merges callbacks to the beginning of the array,
        // so that the last defined callback will be invoked first.
        // This is done since to mimic how Object.assign merging
        // uses the last given value to assign.

        case 'on':
        case 'nativeOn':
          if (!finalData[prop]) {
            finalData[prop] = {};
          }

          _forOwn(descriptor, function (listener, event) {
            // Concat function to array of functions if callback present.
            if (finalData[prop][event]) {
              // Insert current iteration data in beginning of merged array.
              finalData[prop][event] = [].concat(finalData[prop][event], listener);
            } else {
              // Straight assign.
              finalData[prop][event] = listener;
            }
          });

          break;
        // Reassignment strategy.

        default:
          if (!finalData[prop]) {
            finalData[prop] = data[prop];
          }

          break;
      }
    });
  }

  return finalData;
}

var icon = "f-icon";
var field = "f-field";

var Icon = {
  name: icon,
  functional: true,
  props: {
    name: {
      type: String,
      required: true
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    var name = props.name;
    var isSVG = name[0] === '$';
    name = isSVG ? name.substr(1) : name;
    return isSVG ? h('i', genFunctionalData(data, {
      staticClass: icon + " " + icon + "_svg"
    }), [h('svg', [h('use', {
      attrs: {
        'xlink:href': "#" + name
      }
    })])]) : h('i', genFunctionalData(data, {
      staticClass: icon + " " + name
    }));
  }
};

var styles = {"button":"button_button__1c-Ef","icon-x":"button_icon-x__3PFzn","plain":"button_plain__2HhHi","mini":"button_mini__fzML-","inline":"button_inline__2XV1f","disabled":"button_disabled__GhSot","white-space":"button_white-space__1CCYV","default":"button_default__21tkH","primary":"button_primary__3E-84","success":"button_success__3eosB","warning":"button_warning__20pVk","danger":"button_danger__rlQJ6","info":"button_info__1N5dE"};

var BUTTON_TYPES = ['default', 'primary', 'success', 'warning', 'danger'];
var button$1 = {
  name: field,
  functional: true,
  props: {
    type: {
      type: String,
      default: BUTTON_TYPES[0],
      validtor: function validtor(value) {
        return BUTTON_TYPES.indexOf(value) >= 0;
      }
    },
    icon: String,
    mini: Boolean,
    plain: Boolean,
    inline: Boolean,
    disabled: Boolean,
    whiteSpace: Boolean
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    h = createElement(h, styles, props);
    var ButtonIcon = props.icon && h(Icon, {
      styleName: '@icon',
      attrs: {
        name: props.icon
      }
    });
    return h('a', genFunctionalData(data, {
      styleName: '@button $type :mini :plain :inline :disabled :white-space',
      attrs: {
        href: 'javascript:;' // eslint-disable-line no-script-url

      }
    }), [ButtonIcon].concat(children || []));
  }
};

module.exports = button$1;
