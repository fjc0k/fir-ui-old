/*!
 * @fir-ui/bundler v0.0.0
 * (c) 2018-present fjc0k
 * Released under the MIT License.
 */
var a = {
  beforeCreate: function beforeCreate() {
    var h = this.$createElement;

    this.$createElement = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (typeof args[1] === 'object') {
        args[1].style = 'color:red';
      }

      return h.apply(this, args);
    };
  },
  render: function render(h) {
    h('div', {
      styleName: ['button', this.disabled && 'disabled'],
      attrs: {
        'data-role': 'f-button'
      }
    });
  }
};

export default a;
