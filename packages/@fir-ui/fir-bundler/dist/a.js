/*!
 * @fir-ui/bundler v0.0.0
 * (c) 2018-present fjc0k
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.a = factory());
}(this, (function () { 'use strict';

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

  return a;

})));
