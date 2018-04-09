/*!
 * fir-ui v0.17.1
 * (c) 2018-present fjc0k <fjc0kb@gmail.com>
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _toString = _interopDefault(require('lodash/toString'));
var _isArray = _interopDefault(require('lodash/isArray'));
var _forOwn = _interopDefault(require('lodash/forOwn'));
var createElement = _interopDefault(require('vue-css-modules/lib/create-element'));
var _isNumber = _interopDefault(require('lodash/isNumber'));
var _upperFirst = _interopDefault(require('lodash/upperFirst'));
var _reduce = _interopDefault(require('lodash/reduce'));
var _isFunction = _interopDefault(require('lodash/isFunction'));
var betterSync = _interopDefault(require('vue-better-sync'));
var _isBoolean = _interopDefault(require('lodash/isBoolean'));
var CSSModules = _interopDefault(require('vue-css-modules'));
var _isString = _interopDefault(require('lodash/isString'));
var _toNumber = _interopDefault(require('lodash/toNumber'));
var _range = _interopDefault(require('lodash/range'));
var _fill = _interopDefault(require('lodash/fill'));
var _findLastIndex = _interopDefault(require('lodash/findLastIndex'));
var _findIndex = _interopDefault(require('lodash/findIndex'));
var _isNil = _interopDefault(require('lodash/isNil'));
var _clone = _interopDefault(require('lodash/clone'));
var BScroll = _interopDefault(require('better-scroll'));
var _isEmpty = _interopDefault(require('lodash/isEmpty'));
var _isNaN = _interopDefault(require('lodash/isNaN'));
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

var adjustZIndex = (function (startZIndex) {
  return {
    props: {
      zIndex: Number
    },
    data: function data() {
      return {
        useCustomZIndex: false,
        customZIndex: startZIndex++
      };
    },
    computed: {
      localZIndex: function localZIndex() {
        return this.useCustomZIndex || !_isNumber(this.zIndex) ? this.customZIndex : this.zIndex;
      }
    },
    methods: {
      getZIndex: function getZIndex() {
        return this.localZIndex;
      },
      setZIndex: function setZIndex(index) {
        this.customZIndex = index;
        this.useCustomZIndex = true;
      }
    }
  };
});

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
  return propVNode === 0 ? '0' : propVNode;
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

var toggleVisibility = (function (defaultVisible, isModel) {
  return {
    mixins: [betterSync(isModel && {
      prop: 'visible',
      event: 'change'
    })],
    props: {
      visible: {
        type: Boolean,
        default: defaultVisible,
        sync: true
      }
    },
    methods: {
      beforeSyncVisible: function beforeSyncVisible(_, visible, confirm) {
        var _this = this;

        var Api = visible ? 'Show' : 'Hide';
        var beforeMethod = "before" + Api;
        var afterMethod = "after" + Api;
        var beforeFn = _isFunction(this[beforeMethod]) ? this[beforeMethod] : function (next) {
          return next();
        };
        beforeFn(function () {
          confirm();

          if (_isFunction(_this[afterMethod])) {
            _this.$nextTick(_this[afterMethod]);
          }
        });
      },
      show: function show() {
        this.syncVisible(true);
      },
      hide: function hide() {
        this.syncVisible(false);
      },
      toggle: function toggle() {
        this.syncVisible(!this.localVisible);
      }
    }
  };
});

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
      directives: [{
        name: 'show',
        value: arrow
      }],
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
    transformLocalValue: function transformLocalValue(_) {
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
      default: Number.NEGATIVE_INFINITY
    },
    max: {
      type: Number,
      default: Number.POSITIVE_INFINITY
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

var styles$11 = {"panel":"f-1F3","header":"f-1cu f-ZhX","tip":"f--eC f-ZhX","title":"f-1mh","body":"f-D9Y"};

var propDescriptors$1 = {
  title: VNodeType,
  extra: VNodeType,
  tip: VNodeType
};
var VNodeProps$1 = extractVNodes.methods.extractVNodeProps(propDescriptors$1);
var panel = {
  name: 'f-panel',
  functional: true,
  props: propDescriptors$1,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children,
        slots = _ref.slots;
    h = createElement(h, styles$11, props);

    var _extractVNodes$method = extractVNodes.methods.extractVNodes({
      slots: slots(),
      props: props,
      VNodeProps: VNodeProps$1
    }),
        title = _extractVNodes$method.title,
        extra = _extractVNodes$method.extra,
        tip = _extractVNodes$method.tip;

    return h('div', Object.assign({}, data, {
      styleName: '@panel'
    }), [Boolean(title || extra) && h('div', {
      styleName: 'header'
    }, [h('div', {
      styleName: 'title'
    }, title), h('div', {
      styleName: 'extra'
    }, extra)]), h('div', {
      styleName: 'body'
    }, children), tip && h('div', {
      styleName: 'tip'
    }, tip)]);
  }
};

var styles$12 = {"picker-view":"f-qZH","mask":"f-2vK","indicator":"f-1oq","content":"f-3TD f-1Ac","scroll":"f--Yp","unit":"f-1cr f-m9L","divider":"f-dlO f-m9L","loading":"f-w9F f-m9L","item":"f-2hL","disabled":"f-6PX"};

var mixins = [CSSModules(styles$12), betterSync({
  prop: 'value',
  event: 'input'
})];

var props = {
  // 绑定值
  value: {
    type: Array,
    sync: true
  },
  // 选项数据
  data: {
    type: Array,
    required: true
  },
  // 分隔符
  divider: [String, Number, Array],
  // 单位
  unit: [String, Number, Array],
  // 可见的选项个数
  visibleItemCount: {
    type: Number,
    default: 5
  },
  // 单个选项的高度
  itemHeight: {
    type: String,
    default: '2em'
  },
  // 过滤选项的函数
  filterItem: Function,
  // 禁用选项的函数
  disableItem: Function,
  // 渲染选项的函数
  renderItem: Function,
  // 是否级联数据，即 item 含 children 节点
  cascaded: Boolean,
  // 是否异步加载数据中
  loading: Boolean
};

var data = (function () {
  return {
    scrolls: [],
    localData: [],
    selectedItems: []
  };
});

var styles$13 = {"spinner":"f-3kd"};

var N12 = _range(12);

var Spinner = {
  name: 'f-spinner',
  functional: true,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    h = createElement(h, styles$13, props);
    return h('div', Object.assign({}, data, {
      styleName: '@spinner'
    }), N12.map(function (key) {
      return h('div', {
        key: key
      });
    }));
  }
};

var DIRECTION_DOWN = 0;
var DIRECTION_UP = 1;
var GROUP_CLASS_NAME = styles$12.group;
var ITEM_CLASS_NAME = styles$12.item;
var BS_OPTIONS = function BS_OPTIONS(groupIndex) {
  return {
    wheel: {
      selectedIndex: this.findSelectedItemIndex(groupIndex),
      wheelWrapperClass: GROUP_CLASS_NAME,
      wheelItemClass: ITEM_CLASS_NAME,
      rotate: 100 / this.visibleItemCount,
      adjustTime: 200
    },
    observeDOM: false,
    bindToWrapper: this.visibleItemCount === 1
  };
};

var computedRenders = {
  Mask: function Mask() {
    return this.$createElement('div', {
      styleName: 'mask',
      style: this.styles.mask
    });
  },
  Indicator: function Indicator() {
    return this.$createElement('div', {
      styleName: 'indicator',
      style: this.styles.indicator
    });
  },
  Content: function Content() {
    return this.$createElement('div', {
      styleName: 'content',
      style: this.styles.content
    }, this.Groups);
  },
  Loading: function Loading() {
    return this.loading && this.$createElement('div', {
      styleName: 'loading'
    }, [this.$createElement(Spinner)]);
  },
  Groups: function Groups() {
    var _this = this;

    var h = this.$createElement;
    return this.localData.map(function (items, groupIndex) {
      var divider = _this.localDivider[groupIndex];
      var unit = _this.localUnit[groupIndex];
      var Items = items.map(function (item, index) {
        return h('li', {
          staticClass: ITEM_CLASS_NAME,
          styleName: ['item', item.disabled && 'disabled'],
          style: _this.styles.item,
          key: index
        }, [item.label]);
      });
      var Divider = divider && h('div', {
        styleName: 'divider'
      }, [divider]);
      var Unit = unit && h('div', {
        styleName: 'unit'
      }, [unit]);
      var Loading = groupIndex === _this.groupCount - 1 && _this.Loading;
      return [h('div', {
        styleName: 'scroll',
        style: _this.styles.scroll,
        ref: 'groups',
        refInFor: true
      }, [h('ul', {
        staticClass: GROUP_CLASS_NAME,
        styleName: 'group',
        style: _this.styles.group
      }, Items)]), Loading || Unit, Divider];
    });
  }
};

var computedProps = {
  groupCount: function groupCount() {
    return this.localData.length;
  },
  localDivider: function localDivider() {
    return _isArray(this.divider) ? this.divider : _fill(Array(this.groupCount), this.divider);
  },
  localUnit: function localUnit() {
    return _isArray(this.unit) ? this.unit : _fill(Array(this.groupCount), this.unit);
  },
  styles: function styles() {
    var visibleItemCount = this.visibleItemCount,
        itemHeight = this.itemHeight;

    var _itemHeight$split = itemHeight.split(/(?=([a-zA-Z]{2,}))/, 2),
        pureItemHeight = _itemHeight$split[0],
        _itemHeight$split$ = _itemHeight$split[1],
        unit = _itemHeight$split$ === void 0 ? 'px' : _itemHeight$split$;

    var actualItemHeight = "" + pureItemHeight + unit;
    var pickerHeight = "" + pureItemHeight * visibleItemCount + unit;
    var pickerHalfHeight = "" + pureItemHeight * ((visibleItemCount - 1) / 2) + unit;
    return {
      mask: {
        backgroundSize: "100% " + pickerHalfHeight
      },
      indicator: {
        height: actualItemHeight,
        top: pickerHalfHeight,
        display: visibleItemCount === 1 ? 'none' : 'block'
      },
      content: {
        height: pickerHeight
      },
      scroll: {
        maxWidth: 100 / this.groupCount + "%"
      },
      group: {
        marginTop: pickerHalfHeight
      },
      item: {
        height: actualItemHeight,
        lineHeight: actualItemHeight
      }
    };
  }
};

var computed = Object.assign({}, computedRenders, computedProps);

function findAvailableItemIndex (items, currentItemIndex, direction) {
  if (items[currentItemIndex] && !items[currentItemIndex].disabled) {
    return currentItemIndex;
  }

  var newIndex;

  var findDown = function findDown() {
    return _findIndex(items, function (item) {
      return !item.disabled;
    }, currentItemIndex);
  };

  var findUp = function findUp() {
    return _findLastIndex(items.slice(0, currentItemIndex), function (item) {
      return !item.disabled;
    });
  };

  if (direction === DIRECTION_DOWN) {
    newIndex = findDown();

    if (newIndex === -1) {
      newIndex = findUp();
    }
  } else if (direction === DIRECTION_UP) {
    newIndex = findUp();

    if (newIndex === -1) {
      newIndex = findDown();
    }
  }

  newIndex = newIndex === -1 ? currentItemIndex : newIndex;
  return newIndex;
}

function findSelectedItemIndex (groupIndex, ignoreCache) {
  var findAvailableItemIndex = this.findAvailableItemIndex,
      selectedItems = this.selectedItems,
      localData = this.localData,
      localValue = this.localValue;
  var itemCount = localData[groupIndex].length;
  var selectedItemIndex = -1; // 1. 从缓存的选值中找

  if (!ignoreCache && selectedItems[groupIndex]) {
    selectedItemIndex = selectedItems[groupIndex].index;
  } // 2. 从传入的绑定值中找


  if (selectedItemIndex === -1 && !_isNil(localValue[groupIndex])) {
    selectedItemIndex = _findIndex(localData[groupIndex], function (item) {
      return item.value === localValue[groupIndex];
    });
  } // 3. 若未找到，直接找一个可用值；若找到，确保其可用


  selectedItemIndex = findAvailableItemIndex(localData[groupIndex], selectedItemIndex <= 0 ? 0 : selectedItemIndex >= itemCount ? itemCount - 1 : selectedItemIndex, DIRECTION_DOWN);
  return selectedItemIndex;
}

function processData(items, groupIndex) {
  var filterItem = this.filterItem,
      disableItem = this.disableItem,
      renderItem = this.renderItem;
  var newItems = [];

  for (var itemIndex = 0, len = items.length; itemIndex < len; itemIndex++) {
    var item = _clone(items[itemIndex]);

    var payload = {
      groupIndex: groupIndex,
      itemIndex: itemIndex,
      item: item
    };

    if (filterItem) {
      if (!filterItem(payload)) continue;
    }

    if (disableItem && disableItem(payload)) {
      item.disabled = true;
    }

    if (renderItem) {
      var label = renderItem(payload);

      if (label) {
        item.label = label;
      }
    }

    if (_isArray(item.children) && item.children.length) {
      item.children = processData.call(this, item.children, groupIndex + 1);
    }

    newItems.push(item);
  }

  return newItems;
}

function onDataChange (data) {
  if (this.cascaded) {
    this.localData = [this.processData(data, 0)];
  } else {
    this.localData = data.map(this.processData);
  }
}

function onLocalDataChange () {
  var _this = this;

  this.$nextTick(function () {
    var scrolls = _this.scrolls;
    var groups = _this.$refs.groups;

    var _loop = function _loop(groupIndex, len) {
      var scroll = new BScroll(groups[groupIndex], BS_OPTIONS.call(_this, groupIndex));
      scroll.on('scrollEnd', function () {
        _this.onScrollEnd(scroll, groupIndex);
      }); // 级联选择器初始化

      if (_this.cascaded) {
        _this.onScrollEnd(scroll, groupIndex);
      }

      _this.scrolls[groupIndex] = scroll;
    };

    for (var groupIndex = scrolls.length, len = groups.length; groupIndex < len; groupIndex++) {
      _loop(groupIndex, len);
    } // 重置 data 后需刷新


    _this.scrolls.forEach(function (scroll, groupIndex) {
      scroll.once('refresh', function () {
        _this.$nextTick(function () {
          // 选项数据改变可能导致选中条目的索引改变，需同步
          scroll.wheelTo(_this.findSelectedItemIndex(groupIndex));
        });
      });
      scroll.refresh();
    });
  });
}

function onScrollEnd (scroll, groupIndex) {
  // 当前选中条目的索引
  var selectedIndex = scroll.getSelectedIndex(); // 如果索引有误，直接返回

  if (_isNaN(selectedIndex)) return; // 获取当前选中的条目，并将其索引植入

  var selectedItem = this.localData[groupIndex][selectedIndex];
  selectedItem.index = selectedIndex; // 跳过禁用的条目

  if (selectedItem.disabled) {
    var newIndex = this.findAvailableItemIndex(this.localData[groupIndex], selectedIndex, scroll.directionY >= 0 ? DIRECTION_DOWN : DIRECTION_UP); // 防止死循环

    if (newIndex !== selectedIndex) {
      // scroll.wheelTo(newIndex)
      scroll.scrollTo(0, -newIndex * scroll.itemHeight, 170 // 若是 0 则不会触发 scrollEnd 事件
      );
    }

    return;
  } // 确保是有效滑动


  if (!this.cascaded && this.selectedItems[groupIndex] && this.selectedItems[groupIndex].index === selectedIndex) {
    return;
  } // 设置当前组选中的条目为本条目


  this.selectedItems[groupIndex] = selectedItem; // 同步绑定值

  var newValue = this.localValue.slice();
  newValue[groupIndex] = selectedItem.value;
  this.syncValue(newValue); // change 事件

  if (!this.cascaded) {
    // 非级联时，滑动结束即触发
    this.$emit('change', this.selectedItems.slice());
  } else if (_isEmpty(selectedItem.children)) {
    // 级联时，最后一个 group 滑动结束触发
    this.$emit('change', this.selectedItems.slice(0, groupIndex + 1));
  } // 级联数据的联动处理


  if (this.cascaded) {
    var nextGroupIndex = groupIndex + 1;
    var nextGroupItems = selectedItem.children;

    if (_isArray(nextGroupItems) && nextGroupItems.length) {
      // set
      this.$set(this.localData, nextGroupIndex, nextGroupItems);
    } else if (this.localData.length > nextGroupIndex) {
      // delete
      this.localData.splice(nextGroupIndex);
      this.localValue.splice(nextGroupIndex);
      this.scrolls.splice(nextGroupIndex);
    }
  }
}

// onValueChange 是 vue-better-sync 的钩子函数：
// 其已实现仅当 value 由父组件本身改变，
// 而不是，localValue 改变触发 value 改变时，
// 调用此函数。
function onValueChange () {
  var _this = this;

  this.$nextTick(function () {
    _this.scrolls.forEach(function (scroll, groupIndex) {
      scroll.wheelTo(_this.findSelectedItemIndex(groupIndex, true));
    });
  });
}

var listeners = {
  onDataChange: onDataChange,
  onLocalDataChange: onLocalDataChange,
  onScrollEnd: onScrollEnd,
  onValueChange: onValueChange
};

var methods = Object.assign({
  findAvailableItemIndex: findAvailableItemIndex,
  findSelectedItemIndex: findSelectedItemIndex,
  processData: processData
}, listeners);

var watch = {
  data: {
    immediate: true,
    handler: 'onDataChange'
  },
  localData: {
    immediate: true,
    handler: 'onLocalDataChange'
  }
};

function render (h) {
  return h('div', {
    styleName: '@picker-view'
  }, [this.Mask, this.Indicator, this.Content]);
}

var pickerView = {
  name: 'f-picker-view',
  mixins: mixins,
  props: props,
  data: data,
  computed: computed,
  methods: methods,
  watch: watch,
  render: render
};

var styles$14 = {"fix":"f-3JZ","popup":"f-JE4 f-m9L","right":"f-1fi","left":"f-1bb","top":"f-2oL","bottom":"f-3_k"};

var PLACEMENTS$1 = ['center', 'top', 'right', 'bottom', 'left'];
var Popup = {
  name: 'f-popup',
  mixins: [CSSModules(styles$14), adjustZIndex(5000), toggleVisibility(false, true)],
  props: {
    placement: {
      type: String,
      default: PLACEMENTS$1[0],
      validator: function validator(value) {
        return PLACEMENTS$1.indexOf(value) >= 0;
      }
    },
    transition: String,
    mask: {
      type: [Boolean, String],
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    closeOnMaskClick: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    localTransition: function localTransition() {
      return this.transition || (this.placement === 'center' ? 'f--fade' : 'f--slide-from-' + this.placement);
    }
  },
  mounted: function mounted() {
    var el = this.$el;

    if (el.parentNode) {
      el.parentNode.replaceChild(document.createComment(''), el);
      document.body.appendChild(el);
    }
  },
  methods: {
    handleMaskClick: function handleMaskClick(e) {
      if (!this.closeOnMaskClick || e.target !== e.currentTarget) return;
      this.hide();
    },
    onVisibleChange: function onVisibleChange(visible) {
      if (!this.lockScroll) return;
      var bodyElement = document.body;
      var scrollingElement = document.scrollingElement || (document.documentElement.scrollTop ? document.documentElement : document.body);

      if (visible) {
        this.scrollTop = scrollingElement.scrollTop;
        bodyElement.classList.add(styles$14.fix);
        bodyElement.style.top = -this.scrollTop + 'px';
      } else {
        bodyElement.classList.remove(styles$14.fix);
        scrollingElement.scrollTop = this.scrollTop;
      }
    }
  },
  render: function render(h) {
    this.$slots.default[0].data.directives = [{
      name: 'show',
      value: this.localVisible
    }];
    return h('div', [h('transition', {
      attrs: {
        appear: true,
        name: 'f--fade'
      }
    }, [h('div', {
      styleName: '@popup $placement',
      style: {
        zIndex: this.localZIndex,
        backgroundColor: this.mask
      },
      directives: [{
        name: 'show',
        value: this.localVisible
      }],
      on: {
        click: this.handleMaskClick
      }
    }, [h('transition', {
      attrs: {
        appear: true,
        name: this.localTransition
      }
    }, this.$slots.default)])])]);
  }
};

var styles$15 = {"select":"f-1rW f-1Xw"};

var select = {
  name: 'f-select',
  mixins: [betterSync({
    prop: 'value',
    event: 'change'
  }), CSSModules(styles$15)],
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

var styles$16 = {"sheet":"f-2KP","header":"f-ym_","cancel":"f-3Wm","confirm":"f-13m"};

var sheet = {
  name: 'f-sheet',
  inheritAttrs: false,
  mixins: [extractVNodes, CSSModules(styles$16), toggleVisibility(false, true)],
  props: {
    title: extractVNodes.VNodeType,
    desc: extractVNodes.VNodeType,
    cancel: Object.assign({}, extractVNodes.VNodeType, {
      default: '取消'
    }),
    confirm: Object.assign({}, extractVNodes.VNodeType, {
      default: '确定'
    }),
    beforeCancel: Function,
    beforeConfirm: Function,
    noHeader: Boolean
  },
  methods: {
    handleCancel: function handleCancel() {
      var _this = this;

      var done = function done() {
        _this.hide();

        _this.$emit('cancel');
      };

      if (_isFunction(this.beforeCancel)) {
        this.beforeCancel(done);
      } else {
        done();
      }
    },
    handleConfirm: function handleConfirm() {
      var _this2 = this;

      var done = function done() {
        _this2.hide();

        _this2.$emit('confirm');
      };

      if (_isFunction(this.beforeConfirm)) {
        this.beforeConfirm(done);
      } else {
        done();
      }
    }
  },
  render: function render(h) {
    var _extractVNodes = this.extractVNodes(),
        title = _extractVNodes.title,
        desc = _extractVNodes.desc,
        cancel = _extractVNodes.cancel,
        confirm = _extractVNodes.confirm;

    return h(Popup, {
      model: {
        value: this.localVisible,
        callback: this.toggle
      },
      attrs: Object.assign({}, this.$attrs, {
        placement: 'bottom'
      })
    }, [h('div', {
      styleName: '@sheet'
    }, [h(Item, {
      styleName: 'header',
      attrs: {
        left: cancel && h('a', {
          styleName: 'cancel',
          attrs: {
            href: 'javascript:;' // eslint-disable-line no-script-url

          },
          on: {
            click: this.handleCancel
          }
        }, [cancel]),
        right: confirm && h('a', {
          styleName: 'confirm',
          attrs: {
            href: 'javascript:;' // eslint-disable-line no-script-url

          },
          on: {
            click: this.handleConfirm
          }
        }, [confirm]),
        title: title,
        desc: desc
      }
    }), this.$slots.default])]);
  }
};

var styles$17 = {"switch":"f-fDD","on":"f-3bg","disabled":"f-TLD"};

var _switch = {
  name: 'f-switch',
  mixins: [betterSync({
    prop: 'value',
    event: 'change'
  }), CSSModules(styles$17)],
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
    transformValue: function transformValue(_) {
      var _this = this;

      return _mapValues(_, function (value) {
        return _this.valueMap.on === value;
      });
    },
    transformLocalValue: function transformLocalValue(_) {
      var _this2 = this;

      return _mapValues(_, function (value) {
        return _this2.valueMap[value ? 'on' : 'off'];
      });
    },
    done: function done() {
      this.syncValue(!this.localValue);
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
      styleName: '@switch on=localValue :disabled',
      on: {
        click: this.handleClick
      }
    });
  }
};

var styles$18 = {};

var textarea = {
  name: 'f-textarea',
  inheritAttrs: false,
  mixins: [betterSync({
    prop: 'value',
    event: 'input'
  }), CSSModules(styles$18)],
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
  panel: panel,
  pickerView: pickerView,
  popup: Popup,
  select: select,
  sheet: sheet,
  spinner: Spinner,
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

var index = {
  components: components,
  install: install
};

module.exports = index;
