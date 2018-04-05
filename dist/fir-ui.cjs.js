/*!
 * fir-ui v0.12.0
 * (c) 2018-present fjc0k <fjc0kb@gmail.com>
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _toString = _interopDefault(require('lodash/toString'));
var _isArray = _interopDefault(require('lodash/isArray'));
var _forOwn = _interopDefault(require('lodash/forOwn'));
var createElement = _interopDefault(require('vue-css-modules/lib/create-element'));
var _upperFirst = _interopDefault(require('lodash/upperFirst'));
var _reduce = _interopDefault(require('lodash/reduce'));
var _isObjectLike = _interopDefault(require('lodash/isObjectLike'));
var _isFunction = _interopDefault(require('lodash/isFunction'));
var betterSync = _interopDefault(require('vue-better-sync'));
var _isBoolean = _interopDefault(require('lodash/isBoolean'));
var CSSModules = _interopDefault(require('vue-css-modules'));
var _isString = _interopDefault(require('lodash/isString'));
var _toNumber = _interopDefault(require('lodash/toNumber'));
var _findIndex = _interopDefault(require('lodash/findIndex'));
var _mapValues = _interopDefault(require('lodash/mapValues'));
var _has = _interopDefault(require('lodash/has'));
var autoSize = _interopDefault(require('autosize'));
var _castArray = _interopDefault(require('lodash/castArray'));

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
var VNodeType = {
  type: null,
  vnode: true
};

var styles = {"svg":"f-3z2","icon":"f-23m"};

var Icon = {
  name: 'f-icon',
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
    h = createElement(h, styles, props);
    var name = props.name;
    var isSVG = name[0] === '$';
    name = isSVG ? name.substr(1) : name;
    return isSVG ? h('i', genFunctionalData(data, {
      styleName: '@svg'
    }), [h('svg', [h('use', {
      attrs: {
        'xlink:href': "#" + name
      }
    })])]) : h('i', genFunctionalData(data, {
      styleName: '@icon',
      staticClass: name
    }));
  }
};

var styles$1 = {"button":"f-1c- f-m9L","icon":"f-2v8","plain":"f-2Hh","mini":"f-fzM","inline":"f-2XV f-vFB","disabled":"f-GhS","white-space":"f-1CC","default":"f-21t","primary":"f-3E-","success":"f-3eo","warning":"f-20p","danger":"f-rlQ","info":"f-1N5"};

var BUTTON_TYPES = ['default', 'primary', 'success', 'warning', 'danger'];
var button = {
  name: 'f-button',
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
    h = createElement(h, styles$1, props);
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

var customRenderer = (function (renderFns) {
  return _reduce(renderFns, function (mixin, defaultRenderFn, propName) {
    var PropName = _upperFirst(propName);

    var renderFnPropName = "render" + PropName;
    mixin.props[renderFnPropName] = Function;

    mixin.methods["$" + renderFnPropName] = function () {
      return (this[renderFnPropName] || this.$scopedSlots[propName] || defaultRenderFn).apply(this, arguments);
    };

    return mixin;
  }, {
    props: {},
    methods: {}
  });
});

var VNodeType$1 = {
  type: null,
  vnode: true
};

var normalizePropVNode = function normalizePropVNode(propVNode) {
  return _isObjectLike(propVNode) ? propVNode : _toString(propVNode);
};

var extractVNodes = {
  VNodeType: VNodeType$1,
  computed: {
    VNodeProps: function VNodeProps() {
      return this.extractVNodeProps();
    }
  },
  methods: {
    extractVNodeProps: function extractVNodeProps(propDescriptors) {
      if (propDescriptors === void 0) {
        propDescriptors = this.$options.props;
      }

      return _reduce(propDescriptors, function (props, descriptor, propName) {
        if (descriptor.vnode) {
          props.push([propName, descriptor.slot || propName]);
        }

        return props;
      }, []);
    },
    extractVNodes: function extractVNodes(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          _ref$VNodeProps = _ref.VNodeProps,
          VNodeProps = _ref$VNodeProps === void 0 ? this.VNodeProps : _ref$VNodeProps,
          _ref$slots = _ref.slots,
          slots = _ref$slots === void 0 ? this.$slots : _ref$slots,
          _ref$props = _ref.props,
          props = _ref$props === void 0 ? this.$props : _ref$props;

      return VNodeProps.reduce(function (VNodes, _ref2) {
        var propName = _ref2[0],
            slot = _ref2[1];
        VNodes[propName] = slots[slot] || slots[propName] || normalizePropVNode(props[propName]);
        return VNodes;
      }, {
        children: slots.default
      });
    }
  }
};

var styles$2 = {"choice":"f-1sZ f-1wz","box":"f-2G7","selected":"f-28u","input":"f-oRD"};

var CHECKBOX = 1;
var RADIO = 2;
var AGREE = 3;
var choice = {
  name: 'f-choice',
  alias: ['f-checkbox', 'f-radio'],
  mixins: [CSSModules(styles$2), customRenderer({
    box: function box(_ref) {
      var selected = _ref.selected;
      return this.$createElement(Icon, {
        attrs: {
          name: selected ? this.localSelectedIcon : this.localIcon
        }
      });
    }
  }), betterSync({
    prop: 'selectedValue',
    event: 'change'
  })],
  props: {
    selectedValue: {
      type: null,
      sync: true
    },
    value: null,
    icon: String,
    selectedIcon: String
  },
  computed: {
    type: function type() {
      var localSelectedValue = this.localSelectedValue;
      return _isBoolean(localSelectedValue) ? AGREE : _isArray(localSelectedValue) ? CHECKBOX : RADIO;
    },
    nativeType: function nativeType() {
      return this.type === RADIO ? 'radio' : 'checkbox';
    },
    localIcon: function localIcon() {
      return this.icon || (this.type === RADIO ? 'f-icon-radiobox' : 'f-icon-checkbox');
    },
    localSelectedIcon: function localSelectedIcon() {
      return this.selectedIcon || (this.type === RADIO ? 'f-icon-radiobox-checked' : 'f-icon-checkbox-checked');
    },
    selected: function selected() {
      var type = this.type,
          localSelectedValue = this.localSelectedValue,
          value = this.value;
      return type === CHECKBOX ? localSelectedValue.indexOf(value) >= 0 : localSelectedValue === value;
    }
  },
  methods: {
    handleChange: function handleChange(_ref2) {
      var selected = _ref2.target.checked;
      var type = this.type,
          localSelectedValue = this.localSelectedValue,
          value = this.value;
      var newValue;

      if (type === CHECKBOX) {
        newValue = localSelectedValue.slice();

        if (selected) {
          newValue.push(value);
        } else {
          newValue.splice(newValue.indexOf(value), 1);
        }
      } else if (type === AGREE) {
        newValue = selected;
      } else {
        newValue = value;
      }

      this.syncSelectedValue(newValue);
    }
  },
  render: function render(h) {
    return h('label', {
      styleName: '@choice :selected'
    }, [h('input', {
      styleName: 'input',
      attrs: {
        type: this.nativeType
      },
      domProps: {
        checked: this.selected
      },
      on: {
        change: this.handleChange
      }
    }), h('div', {
      styleName: 'box'
    }, [this.$renderBox({
      selected: this.selected
    })]), this.$slots.default]);
  }
};

var styles$3 = {"divider":"f-xyS f-m9L","inner":"f-35o f-m9L","body":"f-3FL","line":"f-1_8"};

var divider = {
  name: 'f-divider',
  functional: true,
  props: {
    color: String,
    width: String
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    h = createElement(h, styles$3, props);
    var widthStyle = props.width && {
      width: props.width
    };
    var colorStyle = {
      color: props.color
    };
    return h('div', genFunctionalData(data, {
      styleName: '@divider'
    }), [h('div', {
      styleName: 'inner',
      staticStyle: widthStyle
    }, [h('div', {
      styleName: 'line',
      staticStyle: colorStyle
    }), h('div', {
      styleName: 'body'
    }, [children]), h('div', {
      styleName: 'line',
      staticStyle: colorStyle
    })])]);
  }
};

var styles$4 = {"top":"f-EBU","bottom":"f-2Ze","left":"f-WJM","right":"f-1Bk","hairline":"f-3L6"};

var PLACEMENT_PROPS = {
  top: Boolean,
  right: Boolean,
  bottom: Boolean,
  left: Boolean
};
var PLACEMENTS = Object.keys(PLACEMENT_PROPS);
var Hairline = {
  name: 'f-hairline',
  functional: true,
  props: Object.assign({
    tag: {
      type: String,
      default: 'div'
    },
    color: String,
    all: Boolean
  }, PLACEMENT_PROPS),
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    h = createElement(h, styles$4, props);
    var placements = props.all ? PLACEMENTS : PLACEMENTS.filter(function (placement) {
      return props[placement];
    });
    var hairlineStyle = {
      color: props.color
    };
    var hairlines = placements.map(function (placement) {
      return h('div', {
        styleName: "@line " + placement,
        style: hairlineStyle
      });
    });
    return h(props.tag, genFunctionalData(data, {
      styleName: '@hairline'
    }), [hairlines].concat(children || []));
  }
};

var styles$5 = {"item":"f-Kwb f-2Pe","gap":"f-2gh","body":"f-24g f-ZhX f-2gh","left":"f-3Wx f-ZhX","right":"f-3-c f-ZhX","middle":"f-BcZ f-ZhX f-2gh","info":"f-Fn2 f-ZhX f-2gh","outline":"f-3jZ f-2Pe","desc":"f-6W3","extra":"f-1-K","note":"f-2vR","arrow":"f-1Re"};

var ARROWS = ['right', 'down', 'left', 'up'];
var propDescriptors = {
  header: VNodeType,
  body: VNodeType,
  footer: VNodeType,
  left: VNodeType,
  right: VNodeType,
  icon: VNodeType,
  title: Object.assign({}, VNodeType, {
    slot: 'default'
  }),
  desc: VNodeType,
  extra: VNodeType,
  note: VNodeType,
  tag: {
    type: String,
    default: 'div'
  },
  infoWidth: String,
  arrow: {
    type: [Boolean, String],
    default: false,
    validator: function validator(value) {
      return _isBoolean(value) || ARROWS.indexOf(value) >= 0;
    }
  }
};
var VNodeProps = extractVNodes.methods.extractVNodeProps(propDescriptors);
var Item = {
  name: 'f-item',
  alias: ['f-list-item'],
  functional: true,
  props: propDescriptors,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;
    h = createElement(h, styles$5, props);

    var _extractVNodes$method = extractVNodes.methods.extractVNodes({
      slots: slots(),
      props: props,
      VNodeProps: VNodeProps
    }),
        header = _extractVNodes$method.header,
        body = _extractVNodes$method.body,
        footer = _extractVNodes$method.footer,
        left = _extractVNodes$method.left,
        right = _extractVNodes$method.right,
        icon = _extractVNodes$method.icon,
        title = _extractVNodes$method.title,
        desc = _extractVNodes$method.desc,
        extra = _extractVNodes$method.extra,
        note = _extractVNodes$method.note;

    var arrow = _isBoolean(props.arrow) ? props.arrow && 'right' : props.arrow;
    return h(Hairline, genFunctionalData(data, {
      styleName: '@item',
      attrs: {
        bottom: true
      }
    }), [// Header
    header && h('div', {
      styleName: '@header'
    }, [header]), // Body
    h('div', {
      styleName: '@body'
    }, [body || [// Left
    left && h('div', {
      styleName: '@left'
    }, [left]), // Icon, Title, Desc, Extra
    h('div', {
      styleName: '@middle'
    }, [title && h('div', {
      styleName: '@info',
      style: "width: " + props.infoWidth + ";"
    }, [icon && h('div', {
      styleName: '@icon'
    }, [_isString(icon) ? h(Icon, {
      attrs: {
        name: icon
      }
    }) : icon]), title && h('div', {
      styleName: '@outline'
    }, [h('div', {
      styleName: '@title'
    }, [title]), desc && h('div', {
      styleName: '@desc'
    }, [desc])])]), extra && h('div', {
      styleName: '@extra'
    }, [extra])]), // Note, Right
    Boolean(note || right) && h('div', {
      styleName: '@right'
    }, [note && h('div', {
      styleName: '@note'
    }, [note]), right]), // Arrow
    h(Icon, {
      styleName: '@arrow',
      style: "display: " + (arrow ? 'block' : 'none') + ";",
      attrs: {
        name: "f-icon-arrow-" + (arrow || 'right')
      }
    })]]), // Footer
    footer && h('div', {
      styleName: '@footer'
    }, [footer])]);
  }
};

var styles$6 = {"field":"f-39J"};

var field = {
  name: 'f-field',
  alias: ['f-form-item'],
  inheritAttrs: false,
  inject: {
    Form: {
      default: null
    }
  },
  provide: function provide() {
    return {
      Field: this
    };
  },
  mixins: [extractVNodes, CSSModules(styles$6)],
  props: {
    label: VNodeType,
    labelWidth: {
      type: String,
      default: function _default() {
        return this.Form ? this.Form.labelWidth : '4.5em';
      }
    }
  },
  render: function render(h) {
    var _extractVNodes = this.extractVNodes(),
        label = _extractVNodes.label;

    return h(Item, {
      styleName: '@field',
      attrs: Object.assign({}, this.$attrs, {
        infoWidth: this.labelWidth,
        title: label,
        extra: this.$slots.default
      })
    });
  }
};

var styles$7 = {"list":"f-1b6","offset":"f-E_M"};

var List = {
  name: 'f-list',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    border: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Boolean,
      default: true
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    h = createElement(h, styles$7, props);
    var border = Boolean(props.border);
    return h(Hairline, genFunctionalData(data, {
      styleName: '@list :offset',
      attrs: {
        tag: props.tag,
        top: border,
        bottom: border
      }
    }), children);
  }
};

var styles$8 = {};

var form = {
  name: 'f-form',
  inheritAttrs: false,
  provide: function provide() {
    return {
      Form: this
    };
  },
  mixins: [betterSync({
    prop: 'model',
    event: 'change'
  }), CSSModules(styles$8)],
  props: {
    labelWidth: {
      type: String,
      default: '4.5em'
    },
    model: {
      type: Object,
      sync: true
    },
    rules: Object
  },
  render: function render(h) {
    return h(List, {
      styleName: '@form',
      attrs: Object.assign({}, this.$attrs, {
        tag: 'form'
      })
    }, this.$slots.default);
  }
};

var styles$9 = {"input":"f-389 f-1Xw"};

var Input = {
  name: 'f-input',
  mixins: [betterSync({
    prop: 'value',
    event: 'input'
  }), CSSModules(styles$9)],
  props: {
    tag: {
      type: String,
      default: 'input'
    },
    value: {
      type: [String, Number],
      sync: true
    },
    type: {
      type: String,
      default: 'text'
    },
    validator: Function,
    lazy: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    transformValue: function transformValue(_, fromProp) {
      if (fromProp) return _;

      if (this.type === 'number') {
        var newValue = _.newValue.trim();

        if (newValue !== '') {
          _.newValue = _toNumber(newValue);
        }
      }

      return _;
    },
    handleInput: function handleInput(e) {
      var value = e.target.value;

      if (_isFunction(this.validator)) {
        if (this.validator(value, e)) {
          this.syncValue(value);
        } else {
          e.target.value = this.localValue;
        }
      } else {
        this.syncValue(value);
      }
    }
  },
  render: function render(h) {
    var _on;

    return h(this.tag, {
      styleName: '@input',
      attrs: {
        type: this.type
      },
      domProps: {
        value: this.localValue
      },
      on: (_on = {}, _on[this.lazy ? 'change' : 'input'] = this.handleInput, _on)
    });
  }
};

var styles$10 = {"input-number":"f-27h f-ZhX","block":"f-jcQ f-1Ac","input-box":"f-2HZ","disabled":"f-27r","input":"f-2ZX","button":"f-ZDK"};

var INPUT_NUMBER_TYPES = ['default', 'primary', 'success', 'warning', 'danger'];
var inputNumber = {
  name: 'f-input-number',
  mixins: [betterSync({
    prop: 'value',
    event: 'input'
  }), CSSModules(styles$10)],
  props: {
    type: {
      type: String,
      default: INPUT_NUMBER_TYPES[0],
      validtor: function validtor(value) {
        return INPUT_NUMBER_TYPES.indexOf(value) >= 0;
      }
    },
    value: {
      type: [String, Number],
      sync: true
    },
    min: {
      type: Number,
      default: Number.MIN_VALUE
    },
    max: {
      type: Number,
      default: Number.MAX_VALUE
    },
    step: {
      type: Number,
      default: 1
    },
    disableInput: Boolean,
    block: Boolean,
    disabled: Boolean
  },
  computed: {
    minusDisabled: function minusDisabled() {
      return this.disabled || this.localValue - this.step < this.min;
    },
    plusDisabled: function plusDisabled() {
      return this.disabled || this.localValue + this.step > this.max;
    },
    Minus: function Minus() {
      return this.$createElement('a', {
        styleName: '@minus button disabled=minusDisabled',
        attrs: {
          href: 'javascript:;'
        },
        // eslint-disable-line no-script-url
        on: {
          click: this.handleMinus
        }
      }, [this.$createElement(Icon, {
        attrs: {
          name: 'f-icon-minus-empty'
        }
      })]);
    },
    Plus: function Plus() {
      return this.$createElement('a', {
        styleName: '@plus button disabled=plusDisabled',
        attrs: {
          href: 'javascript:;'
        },
        // eslint-disable-line no-script-url
        on: {
          click: this.handlePlus
        }
      }, [this.$createElement(Icon, {
        attrs: {
          name: 'f-icon-plus-empty'
        }
      })]);
    },
    InputBox: function InputBox() {
      return this.$createElement('div', {
        styleName: '@input-box :disabled'
      }, [this.$createElement(Input, {
        styleName: '@input',
        attrs: {
          type: 'number',
          readonly: this.disableInput,
          validator: this.validateValue
        },
        model: {
          value: this.localValue,
          callback: this.syncValue
        },
        ref: 'input'
      })]);
    }
  },
  methods: {
    transformValue: function transformValue(_) {
      _.newValue = _toNumber(_.newValue);
      return _;
    },
    handleMinus: function handleMinus() {
      this.syncValue(this.localValue - this.step);
    },
    handlePlus: function handlePlus() {
      this.syncValue(this.localValue + this.step);
    },
    validateValue: function validateValue(value) {
      return value >= this.min && value <= this.max;
    }
  },
  render: function render(h) {
    return h('div', {
      styleName: '@input-number :block'
    }, [this.Minus, this.InputBox, this.Plus]);
  }
};

var styles$11 = {"select":"f-1rW f-1Xw"};

var select = {
  name: 'f-select',
  mixins: [betterSync({
    prop: 'value',
    event: 'change'
  }), CSSModules(styles$11)],
  props: {
    value: {
      type: null,
      sync: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      lastSelectedIndex: null
    };
  },
  computed: {
    selectedIndex: function selectedIndex() {
      // eslint-disable-next-line no-negated-condition
      return this.lastSelectedIndex !== null ? this.lastSelectedIndex : _findIndex(this.data, ['value', this.localValue]);
    },
    Options: function Options() {
      var _this = this;

      return this.data.map(function (item) {
        return _this.$createElement('option', {
          attrs: {
            disabled: item.disabled
          }
        }, [item.label]);
      });
    }
  },
  methods: {
    handleChange: function handleChange(_ref) {
      var selectedIndex = _ref.target.selectedIndex;

      if (selectedIndex !== -1 && this.data[selectedIndex]) {
        this.lastSelectedIndex = selectedIndex;
        this.syncValue(this.data[selectedIndex].value);
      }
    }
  },
  render: function render(h) {
    return h('select', {
      styleName: '@select',
      domProps: {
        selectedIndex: this.selectedIndex
      },
      on: {
        change: this.handleChange
      }
    }, this.Options);
  }
};

var styles$12 = {"switch":"f-fDD","on":"f-3bg","disabled":"f-TLD"};

var _switch = {
  name: 'f-switch',
  mixins: [betterSync({
    prop: 'value',
    event: 'change'
  }), CSSModules(styles$12)],
  props: {
    value: {
      type: null,
      sync: true
    },
    beforeChange: Function,
    valueMap: {
      type: Object,
      default: function _default() {
        return {
          on: true,
          off: false
        };
      },
      validator: function validator(value) {
        return _has(value, 'on') && _has(value, 'off');
      }
    },
    disabled: Boolean
  },
  methods: {
    transformValue: function transformValue(_, fromProp) {
      var _this = this;

      return _mapValues(_, function (value) {
        return fromProp ? _this.valueMap.on === value : _this.valueMap[value ? 'on' : 'off'];
      });
    },
    done: function done() {
      this.syncValue(!this.actualValue);
    },
    handleClick: function handleClick() {
      if (this.disabled) return;

      if (this.beforeChange) {
        this.beforeChange(this.done);
      } else {
        this.done();
      }
    }
  },
  render: function render(h) {
    return h('div', {
      styleName: '@switch on=actualValue :disabled',
      on: {
        click: this.handleClick
      }
    });
  }
};

var styles$13 = {};

var textarea = {
  name: 'f-textarea',
  inheritAttrs: false,
  mixins: [betterSync({
    prop: 'value',
    event: 'input'
  }), CSSModules(styles$13)],
  props: {
    value: {
      type: [String, Number],
      sync: true
    },
    rows: {
      type: [Number, String],
      default: 2
    },
    autoSize: Boolean
  },
  methods: {
    onValueChange: function onValueChange() {
      this.resize();
    },
    resize: function resize() {
      var _this = this;

      this.$nextTick(function () {
        var el = _this.$refs.textarea.$el;

        if (_this.autoSize) {
          if (_this.autoSizeInited) {
            autoSize.update(el);
          } else {
            _this.autoSizeInited = true;
            autoSize(el);
          }
        } else {
          _this.autoSizeInited = false;
          autoSize.destroy(el);
        }
      });
    }
  },
  watch: {
    autoSize: {
      immediate: true,
      handler: 'resize'
    }
  },
  render: function render(h) {
    return h(Input, {
      styleName: '@textarea',
      attrs: Object.assign({}, this.$attrs, {
        tag: 'textarea',
        rows: this.rows
      }),
      model: {
        value: this.localValue,
        callback: this.syncValue
      },
      ref: 'textarea'
    });
  }
};



var components = /*#__PURE__*/Object.freeze({
  button: button,
  choice: choice,
  divider: divider,
  field: field,
  form: form,
  hairline: Hairline,
  icon: Icon,
  input: Input,
  inputNumber: inputNumber,
  item: Item,
  list: List,
  select: select,
  switch: _switch,
  textarea: textarea
});

function install(Vue) {
  if (install.installed) return;
  Vue.prototype.$log = console.log;

  _forOwn(components, function (component) {
    if (component.alias) {
      _castArray(component.alias).forEach(function (name) {
        return Vue.component(name, component);
      });
    }

    Vue.component(component.name, component);
  });

  install.installed = true;
}

Object.defineProperty(components, 'install', {
  value: install
});

module.exports = components;
