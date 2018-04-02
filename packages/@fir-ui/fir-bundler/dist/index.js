/*!
 * @fir-ui/bundler v0.0.0
 * (c) 2018-present fjc0k
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.index = factory());
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

  var dd = 'dd';

  var h = 1;

  /*!
   * stringify-author <https://github.com/jonschlinkert/stringify-author>
   *
   * Copyright (c) 2014-2015 Jon Schlinkert.
   * Licensed under the MIT license.
   */

  var stringifyAuthor = function (author) {
    if (typeof author !== 'object') {
      throw new Error('expected an author to be an object');
    }

    var tmpl = {name: ['', ''], email: ['<', '>'], url: ['(', ')']};
    var str = '';

    if (author.url) author.url = stripSlash(author.url);

    for (var key in tmpl) {
      if (author[key]) {
        str += tmpl[key][0] + author[key] + tmpl[key][1] + ' ';
      }
    }
    return str.trim();
  };

  function stripSlash(str) {
    return str.replace(/\/$/, '');
  }

  var x$1 = Object.assign({
    a: a,
    y: 0
  }, window);
  var index = [dd, x$1, stringifyAuthor, h, undefined];

  return index;

})));
