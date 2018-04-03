/*!
 * fir-ui v0.9.0
 * (c) 2018-present fjc0k <fjc0kb@gmail.com>
 * Released under the MIT License.
 */
import _toString from 'lodash/toString';
import _isArray from 'lodash/isArray';
import _forOwn from 'lodash/forOwn';
import createElement from 'vue-css-modules/lib/create-element';
import CSSModules from 'vue-css-modules';
import betterSync from 'vue-better-sync';
import _reduce from 'lodash/reduce';
import _isObjectLike from 'lodash/isObjectLike';
import _isFunction from 'lodash/isFunction';
import _isBoolean from 'lodash/isBoolean';
import _isString from 'lodash/isString';
import _toNumber from 'lodash/toNumber';
import _findIndex from 'lodash/findIndex';
import _mapValues from 'lodash/mapValues';
import _has from 'lodash/has';

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

var hairline = "f-hairline";
var list = "f-list";
var item = "f-item";
var icon = "f-icon";
var button = "f-button";
var input = "f-input";
var form = "f-form";
var field = "f-field";
var inputNumber = "f-input-number";
var textarea = "f-textarea";
var select = "f-select";
var checkbox = "f-checkbox";
var components = {
	hairline: hairline,
	list: list,
	item: item,
	icon: icon,
	button: button,
	input: input,
	form: form,
	field: field,
	inputNumber: inputNumber,
	textarea: textarea,
	select: select,
	checkbox: checkbox,
	"switch": "f-switch"
};

var styles = {};

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

var styles$1 = {};

var BUTTON_TYPES = ['default', 'primary', 'success', 'warning', 'danger'];
var button$1 = {
  name: button,
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

var styles$2 = {};

var checkbox$1 = {
  name: checkbox,
  mixins: [CSSModules(styles$2), betterSync({
    prop: 'value',
    event: 'input'
  })],
  props: {
    value: {
      type: String,
      sync: true
    }
  },
  render: function render(h) {
    return h('div', {
      styleName: '@checkbox'
    });
  }
};

var normalizePropVNode = function normalizePropVNode(propVNode) {
  return _isObjectLike(propVNode) ? propVNode : _toString(propVNode);
};

var extractVNodes = {
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

var styles$3 = {};

var PLACEMENT_PROPS = {
  top: Boolean,
  right: Boolean,
  bottom: Boolean,
  left: Boolean
};
var PLACEMENTS = Object.keys(PLACEMENT_PROPS);
var Hairline = {
  name: hairline,
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
    h = createElement(h, styles$3, props);
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

var styles$4 = {};

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
  name: item,
  functional: true,
  props: propDescriptors,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;
    h = createElement(h, styles$4, props);

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
        icon$$1 = _extractVNodes$method.icon,
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
    }, [icon$$1 && h('div', {
      styleName: '@icon'
    }, [_isString(icon$$1) ? h(Icon, {
      attrs: {
        name: icon$$1
      }
    }) : icon$$1]), title && h('div', {
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

var styles$5 = {};

var field$1 = {
  name: field,
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
  mixins: [extractVNodes, CSSModules(styles$5)],
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

var styles$6 = {};

var List = {
  name: list,
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
    h = createElement(h, styles$6, props);
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

var styles$7 = {};

var form$1 = {
  name: form,
  inheritAttrs: false,
  provide: function provide() {
    return {
      Form: this
    };
  },
  mixins: [betterSync({
    prop: 'model',
    event: 'change'
  }), CSSModules(styles$7)],
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

var styles$8 = {};

var Input = {
  name: input,
  mixins: [betterSync({
    prop: 'value',
    event: 'input'
  }), CSSModules(styles$8)],
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
          e.target.value = this.actualValue;
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
        value: this.actualValue
      },
      on: (_on = {}, _on[this.lazy ? 'change' : 'input'] = this.handleInput, _on)
    });
  }
};

var styles$9 = {};

var INPUT_NUMBER_TYPES = ['default', 'primary', 'success', 'warning', 'danger'];
var inputNumber$1 = {
  name: inputNumber,
  mixins: [betterSync({
    prop: 'value',
    event: 'input'
  }), CSSModules(styles$9)],
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
      return this.disabled || this.actualValue - this.step < this.min;
    },
    plusDisabled: function plusDisabled() {
      return this.disabled || this.actualValue + this.step > this.max;
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
          value: this.actualValue,
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
      this.syncValue(this.actualValue - this.step);
    },
    handlePlus: function handlePlus() {
      this.syncValue(this.actualValue + this.step);
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

var styles$10 = {};

var select$1 = {
  name: select,
  mixins: [betterSync({
    prop: 'value',
    event: 'change'
  }), CSSModules(styles$10)],
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
      return this.lastSelectedIndex !== null ? this.lastSelectedIndex : _findIndex(this.data, ['value', this.actualValue]);
    },
    Options: function Options() {
      var _this = this;

      return this.data.map(function (item$$1) {
        return _this.$createElement('option', {
          attrs: {
            disabled: item$$1.disabled
          }
        }, [item$$1.label]);
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

var styles$11 = {};

var _switch = {
  // 为何不用 COMPONENT_NAME ?
  // 因为打包工具有缺陷: rollup-plugin-json
  name: components.switch,
  mixins: [betterSync({
    prop: 'value',
    event: 'change'
  }), CSSModules(styles$11)],
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

var styles$12 = {};

var textarea$1 = {
  name: textarea,
  inheritAttrs: false,
  mixins: [betterSync({
    prop: 'value',
    event: 'input'
  }), CSSModules(styles$12)],
  props: {
    value: {
      type: [String, Number],
      sync: true
    },
    rows: {
      type: [Number, String],
      default: 2
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
        value: this.actualValue,
        callback: this.syncValue
      }
    });
  }
};



var components$1 = /*#__PURE__*/Object.freeze({
  button: button$1,
  checkbox: checkbox$1,
  field: field$1,
  form: form$1,
  hairline: Hairline,
  icon: Icon,
  input: Input,
  inputNumber: inputNumber$1,
  item: Item,
  list: List,
  select: select$1,
  switch: _switch,
  textarea: textarea$1
});

function install(Vue) {
  if (install.installed) return;
  Vue.prototype.$log = console.log;

  _forOwn(components$1, function (component) {
    return Vue.component(component.name, component);
  });

  install.installed = true;
}

Object.defineProperty(components$1, 'install', {
  value: install
});

export default components$1;
