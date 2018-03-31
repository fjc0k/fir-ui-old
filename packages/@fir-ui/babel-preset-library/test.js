/* eslint-disable */
const presetLibrary = require('.')
const babel = require('@babel/core')

const assertEquals = (a, b) => {
  if (a !== b) {
    console.log('\nA: ' + a)
    console.log('\nB: ' + b)
    console.error('\n✘ Tests failed!\n')
    process.exit(0)
  }
}

const transform = code => babel.transform(
  code,
  { presets: [presetLibrary] }
).code.replace(/^\s*(\r|\n)+/gm, '') // 去除空行便于测试

const transformAssert = (code, b) => assertEquals(transform(code), b)

/* 1. Object spread */
transformAssert(

`z = { ...x, y, [a]: 1 }`,

`var _Object$assign;
z = Object.assign({}, x, (_Object$assign = {
  y: y
}, _Object$assign[a] = 1, _Object$assign));`

)

/* 2. Lodash 按需导入 */
transformAssert(

`import { isNumber, toArray } from 'lodash'
x = isNumber(y) && toArray(z)`,

`import _toArray from "lodash/toArray";
import _isNumber from "lodash/isNumber";
x = _isNumber(y) && _toArray(z);`

)

/* 3. Optional chaining */
transformAssert(

`window?.lib`,

`var _window;
(_window = window) == null ? void 0 : _window.lib;`

)

/* 4. Async/Await */
transformAssert(

`async function fn() {
  return await window.load()
}`,

`function fn() {
  return new Promise(function ($return, $error) {
    return Promise.resolve(window.load()).then($return, $error);
  }.bind(this));
}`

)

/* 5. Class properties */
transformAssert(

`class Test {
  x = 1
  static x = 2
  fn() {
    return this.x
  }
  static fn() {
    return Test.x
  }
}`,

`var Test =
/*#__PURE__*/
function () {
  function Test() {
    this.x = 1;
  }
  var _proto = Test.prototype;
  _proto.fn = function fn() {
    return this.x;
  };
  Test.fn = function fn() {
    return Test.x;
  };
  return Test;
}();
Test.x = 2;`

)

console.log('\n✔ Tests passed!\n')
