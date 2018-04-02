/*!
 * @fir-ui/bundler v0.0.0
 * (c) 2018-present fjc0k
 * Released under the MIT License.
 */
import glob from 'stringify-author';

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

var dd = 'dd';

var h = 1;

var x$1 = Object.assign({
  a: a,
  y: 0
}, window);
var index = [dd, x$1, glob, h, undefined];

export default index;
