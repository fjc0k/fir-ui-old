/*!
 * fir-ui v0.13.0
 * (c) 2018-present fjc0k <fjc0kb@gmail.com>
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.fir = factory());
}(this, (function () { 'use strict';

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  var isArray_1 = isArray;

  /**
   * Casts `value` as an array if it's not one.
   *
   * @static
   * @memberOf _
   * @since 4.4.0
   * @category Lang
   * @param {*} value The value to inspect.
   * @returns {Array} Returns the cast array.
   * @example
   *
   * _.castArray(1);
   * // => [1]
   *
   * _.castArray({ 'a': 1 });
   * // => [{ 'a': 1 }]
   *
   * _.castArray('abc');
   * // => ['abc']
   *
   * _.castArray(null);
   * // => [null]
   *
   * _.castArray(undefined);
   * // => [undefined]
   *
   * _.castArray();
   * // => []
   *
   * var array = [1, 2, 3];
   * console.log(_.castArray(array) === array);
   * // => true
   */
  function castArray() {
    if (!arguments.length) {
      return [];
    }
    var value = arguments[0];
    return isArray_1(value) ? value : [value];
  }

  var castArray_1 = castArray;

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  var _createBaseFor = createBaseFor;

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor = _createBaseFor();

  var _baseFor = baseFor;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  var _baseTimes = baseTimes;

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = _freeGlobal || freeSelf || Function('return this')();

  var _root = root;

  /** Built-in value references. */
  var Symbol$1 = _root.Symbol;

  var _Symbol = Symbol$1;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  var _objectToString = objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag$1 && symToStringTag$1 in Object(value))
      ? _getRawTag(value)
      : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
  }

  var _baseIsArguments = baseIsArguments;

  /** Used for built-in method references. */
  var objectProto$2 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
    return isObjectLike_1(value) && hasOwnProperty$1.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };

  var isArguments_1 = isArguments;

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  var isBuffer_1 = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse_1;

  module.exports = isBuffer;
  });

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  var _isIndex = isIndex;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
  }

  var isLength_1 = isLength;

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike_1(value) &&
      isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary;

  var _nodeUtil = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && _freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  module.exports = nodeUtil;
  });

  /* Node.js helper references. */
  var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

  var isTypedArray_1 = isTypedArray;

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_1(value),
        isArg = !isArr && isArguments_1(value),
        isBuff = !isArr && !isArg && isBuffer_1(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? _baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$2.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             _isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

    return value === proto;
  }

  var _isPrototype = isPrototype;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys = _overArg(Object.keys, Object);

  var _nativeKeys = nativeKeys;

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!_isPrototype(object)) {
      return _nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeys = baseKeys;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject;

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag$1 = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject_1(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = _baseGetTag(value);
    return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength_1(value.length) && !isFunction_1(value);
  }

  var isArrayLike_1 = isArrayLike;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
  }

  var keys_1 = keys;

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn(object, iteratee) {
    return object && _baseFor(object, iteratee, keys_1);
  }

  var _baseForOwn = baseForOwn;

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  var identity_1 = identity;

  /**
   * Casts `value` to `identity` if it's not a function.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Function} Returns cast function.
   */
  function castFunction(value) {
    return typeof value == 'function' ? value : identity_1;
  }

  var _castFunction = castFunction;

  /**
   * Iterates over own enumerable string keyed properties of an object and
   * invokes `iteratee` for each property. The iteratee is invoked with three
   * arguments: (value, key, object). Iteratee functions may exit iteration
   * early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @since 0.3.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns `object`.
   * @see _.forOwnRight
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.forOwn(new Foo, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'a' then 'b' (iteration order is not guaranteed).
   */
  function forOwn(object, iteratee) {
    return object && _baseForOwn(object, _castFunction(iteratee));
  }

  var forOwn_1 = forOwn;

  var utils = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.includes = includes;
  exports.isObject = isObject;
  exports.isFunction = isFunction;
  exports.camelCase = camelCase;
  exports.dashCase = dashCase;

  function includes(arrayLike, element, fromIndex) {
    if (fromIndex === void 0) {
      fromIndex = 0;
    }

    for (var i = fromIndex, len = arrayLike.length; i < len; i++) {
      if (arrayLike[i] === element) {
        return true;
      }
    }

    return false;
  }

  function isObject(value) {
    return value !== null && typeof value === 'object';
  }

  function isFunction(value) {
    return typeof value === 'function';
  }

  var camelCaseCache = Object.create(null);

  function camelCase(value) {
    if (camelCaseCache[value]) return camelCaseCache[value];
    var result = '';
    var shouldUpperCase = false;

    for (var i = 0, len = value.length; i < len; i++) {
      var char = value[i];

      if (char === '-') {
        shouldUpperCase = true;
      } else {
        result += result && shouldUpperCase ? char.toUpperCase() : char;
        shouldUpperCase = false;
      }
    }

    camelCaseCache[value] = result;
    return result;
  }

  var dashCaseCache = Object.create(null);

  function dashCase(value) {
    if (dashCaseCache[value]) return dashCaseCache[value];
    var result = '';
    var shouldAddDash = false;

    for (var i = value.length - 1; i >= 0; i--) {
      var char = value[i];
      var charCode = char.charCodeAt(0);

      if (charCode >= 65 && charCode <= 90) {
        shouldAddDash = true;
        result = char.toLowerCase() + result;
      } else {
        result = char + (shouldAddDash ? '-' : '') + result;
        shouldAddDash = false;
      }
    }

    dashCaseCache[value] = result;
    return result;
  }
  });

  unwrapExports(utils);
  var utils_1 = utils.includes;
  var utils_2 = utils.isObject;
  var utils_3 = utils.isFunction;
  var utils_4 = utils.camelCase;
  var utils_5 = utils.dashCase;

  var parseClassExpression = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = void 0;



  var cache = Object.create(null);

  var _default = function _default(expression) {
    if (cache[expression]) return cache[expression];
    var className;
    var binding;
    var bindingValue;
    var role;

    if ((0, utils.includes)(expression, '=', 1)) {
      // eg: disabled=isDisabled
      var _expression$split = expression.split('=');

      className = _expression$split[0];
      binding = _expression$split[1];
    } else {
      var modifier = expression[0];

      if (modifier === '$') {
        // eg: $type
        binding = expression.substr(1);
        bindingValue = true;
      } else if (modifier === '@') {
        // eg: @button
        className = expression.substr(1);
        role = className;
      } else if (modifier === ':') {
        // eg: :disabled
        className = expression.substr(1);
        binding = (0, utils.camelCase)(className);
      } else {
        className = expression;
      }
    }

    cache[expression] = {
      className: className,
      binding: binding,
      bindingValue: bindingValue,
      role: role
    };
    return cache[expression];
  };

  exports.default = _default;
  });

  unwrapExports(parseClassExpression);

  var config = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.INJECT_ATTR = exports.INJECTED = void 0;
  var INJECTED = '__CSSModules__';
  exports.INJECTED = INJECTED;
  var INJECT_ATTR = 'styleName';
  exports.INJECT_ATTR = INJECT_ATTR;
  });

  unwrapExports(config);
  var config_1 = config.INJECT_ATTR;
  var config_2 = config.INJECTED;

  var createElement_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = createElement;



  var _parseClassExpression2 = _interopRequireDefault(parseClassExpression);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /* eslint max-depth: 0 guard-for-in: 0 */
  function createElement(_) {
    var args = [].slice.call(arguments, 1); // for functional component

    if ((0, utils.isFunction)(_)) {
      return createElement.bind(_, {
        createElement: _,
        styles: args[0],
        context: args[1]
      });
    }

    var h = _.createElement,
        _$context = _.context,
        context = _$context === void 0 ? {} : _$context,
        _$styles = _.styles,
        styles = _$styles === void 0 ? context.$style || {} : _$styles;
    var data = args[1];

    if ((0, utils.isObject)(data)) {
      if (!data.staticClass) {
        data.staticClass = '';
      }

      if (!data.attrs) {
        data.attrs = {};
      }

      var modules = data[config.INJECT_ATTR] || data.attrs[config.INJECT_ATTR] || '';

      if (modules.length) {
        var _modules = Array.isArray(modules) ? modules : [modules];

        for (var i in _modules) {
          var module = _modules[i];

          if (module && typeof module === 'string') {
            var classExpressions = module.split(/\s+/g);

            for (var _i in classExpressions) {
              var classExpression = classExpressions[_i];

              var _parseClassExpression = (0, _parseClassExpression2.default)(classExpression),
                  className = _parseClassExpression.className,
                  binding = _parseClassExpression.binding,
                  bindingValue = _parseClassExpression.bindingValue,
                  role = _parseClassExpression.role;

              if (bindingValue) {
                className = context[binding];
                binding = undefined;
              }

              if ((binding ? context[binding] : true) && styles[className]) {
                data.staticClass += " " + styles[className];
                data.staticClass = data.staticClass.trim();
              }

              if (role) {
                data.attrs["data-component-" + role] = '';
              }
            }
          }
        }
      } // remove styleName attr


      delete data[config.INJECT_ATTR];
      delete data.attrs[config.INJECT_ATTR];
    }

    return h.apply(null, args);
  }
  });

  var createElement = unwrapExports(createElement_1);

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  var _arrayMap = arrayMap;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
  }

  var isSymbol_1 = isSymbol;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = _Symbol ? _Symbol.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray_1(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return _arrayMap(value, baseToString) + '';
    }
    if (isSymbol_1(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

  var _baseToString = baseToString;

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : _baseToString(value);
  }

  var toString_1 = toString;

  function genFunctionalData() {
    var finalData = {};
    var i = arguments.length;
    var staticClass;

    while (i--) {
      forOwn_1(arguments[i], function (descriptor, prop, data) {
        if (!descriptor) return;

        switch (prop) {
          // Array merge strategy (array concatenation).
          case 'class':
          case 'style':
          case 'directives':
            if (!isArray_1(finalData[prop])) {
              finalData[prop] = [];
            }

            finalData[prop] = finalData[prop].concat(descriptor);
            break;
          // Space delimited string concatenation strategy.

          case 'staticClass':
            staticClass = toString_1(descriptor).trim();

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

            forOwn_1(descriptor, function (listener, event) {
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

  /** `Object#toString` result references. */
  var boolTag$1 = '[object Boolean]';

  /**
   * Checks if `value` is classified as a boolean primitive or object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
   * @example
   *
   * _.isBoolean(false);
   * // => true
   *
   * _.isBoolean(null);
   * // => false
   */
  function isBoolean(value) {
    return value === true || value === false ||
      (isObjectLike_1(value) && _baseGetTag(value) == boolTag$1);
  }

  var isBoolean_1 = isBoolean;

  var lib = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = void 0;

  var _createElement = _interopRequireDefault(createElement_1);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default(styles) {
    return {
      beforeCreate: function beforeCreate() {
        if (this[config.INJECTED]) return;
        this[config.INJECTED] = true;
        this.$createElement = _createElement.default.bind(this, {
          createElement: this.$createElement,
          context: this,
          styles: styles
        });
        this._c = _createElement.default.bind(this, {
          createElement: this._c,
          context: this,
          styles: styles
        });
      }
    };
  };

  exports.default = _default;
  });

  var CSSModules = unwrapExports(lib);

  /*!
   * vue-better-sync v3.0.0
   * (c) 2018-present fjc0k <fjc0kb@gmail.com>
   * Released under the MIT License.
   */
  var cache = Object.create(null);
  var camelCase = (function (word) {
    if (!cache[word]) {
      cache[word] = word.replace(/-([a-z])/g, function (_, char) { return char.toUpperCase(); });
    }

    return cache[word];
  });

  var isFunction$1 = (function (value) { return typeof value === 'function'; });

  var isObject$1 = (function (value) { return value !== null && typeof value === 'object'; });

  /* eslint no-eq-null: 0 eqeqeq: [2, "smart"] */
  var X_PROXY_PROPS = '_VBS_PP_';
  var X_DATA_PROCESSED = '_VBS_DP_';
  var X_BEFORE_CREATE_PROCESSED = '_VBS_BCP_';
  var X_LAST_VALUES_FROM_PARENT = '_VBS_LVFP_';
  var X_LAST_VALUES_FROM_CHILD = '_VBS_LVFC_';
  var X_PROXY_CHANGED_BY_PARENT = '_VBS_PCBP_';
  var X_PROP_CHANGED_BY_PARENT = 0;
  var X_PROP_CHANGED_BY_CHILD = 1;
  var X_WATCH_PROP = 0;
  var X_WATCH_PROXY = 1;
  var index = (function (ref) {
    if ( ref === void 0 ) ref = {};
    var prop = ref.prop; if ( prop === void 0 ) prop = 'value';
    var event = ref.event; if ( event === void 0 ) event = 'input';

    return ({
    model: {
      prop: prop,
      event: event
    },

    data: function data() {
      var ctx = this.$options;
      if (this[X_DATA_PROCESSED] || !ctx[X_PROXY_PROPS]) { return; }
      this[X_DATA_PROCESSED] = true;
      var proxyProps = ctx[X_PROXY_PROPS];
      return proxyProps.reduce(function (data, proxyPropName) {
        data[proxyPropName] = null;
        return data;
      }, {});
    },

    beforeCreate: function beforeCreate() {
      var ctx = this.$options;
      if (this[X_BEFORE_CREATE_PROCESSED] || !ctx.props) { return; }
      this[X_BEFORE_CREATE_PROCESSED] = true;
      ctx[X_PROXY_PROPS] = [];
      this[X_LAST_VALUES_FROM_PARENT] = {};
      this[X_LAST_VALUES_FROM_CHILD] = {};
      ctx.methods = ctx.methods || {};
      ctx.watch = ctx.watch || {};
      Object.keys(ctx.props).forEach(function (propName) {
        var ref = ctx.props[propName];
        var isSync = ref.sync;
        var isModel = prop === propName;
        if (!isModel && !isSync) { return; }
        var PropName = camelCase(("-" + propName));
        var proxy = "local" + PropName;
        var syncMethod = "sync" + PropName;
        var directSyncMethod = "sync" + PropName + "Directly";
        var transformMethod = "transform" + PropName;
        var watchMethod = "_VBS_W_" + propName + "_";
        var onPropChange = "on" + PropName + "Change";
        var onProxyChange = "onLocal" + PropName + "Change";
        ctx[X_PROXY_PROPS].push(proxy);

        ctx.methods[directSyncMethod] = function (newValue, oldValue, propChangedBy) {
          if (oldValue !== newValue) {
            if (propChangedBy === X_PROP_CHANGED_BY_PARENT && newValue !== this[X_LAST_VALUES_FROM_CHILD][propName] && newValue !== this[proxy]) {
              this[X_PROXY_CHANGED_BY_PARENT] = true;
              this[proxy] = newValue;
            }

            if (propChangedBy === X_PROP_CHANGED_BY_CHILD && newValue !== this[X_LAST_VALUES_FROM_PARENT][propName]) {
              if (isModel) {
                this.$emit(event, newValue, oldValue);
              }

              if (isSync) {
                this.$emit(("update:" + propName), newValue, oldValue);
              }
            }
          }
        };

        ctx.methods[syncMethod] = function (newValue) {
          // Compatible to Event value
          if (newValue instanceof Event && newValue.target && newValue.target.value) {
            newValue = newValue.target.value;
          }

          this[proxy] = newValue;
        };

        ctx.methods[watchMethod] = function (newValue, oldValue, from) {
          if (newValue !== oldValue) {
            var fromProp = from === X_WATCH_PROP;
            var LAST_VALUES_FROM = fromProp ? X_LAST_VALUES_FROM_PARENT : X_LAST_VALUES_FROM_CHILD;
            var CHANGED_BY = fromProp ? X_PROP_CHANGED_BY_PARENT : X_PROP_CHANGED_BY_CHILD;
            this[LAST_VALUES_FROM][propName] = newValue;

            if (isFunction$1(this[transformMethod])) {
              var transformedValue = this[transformMethod]({
                oldValue: oldValue,
                newValue: newValue
              }, fromProp);

              if (isObject$1(transformedValue)) {
                oldValue = transformedValue.oldValue;
                newValue = transformedValue.newValue;
              }
            }

            if (newValue !== oldValue) {
              if (fromProp) {
                if (isFunction$1(this[onPropChange])) {
                  this[onPropChange](newValue, oldValue);
                }
              } else {
                if (isFunction$1(this[onProxyChange])) {
                  this[onProxyChange](newValue, oldValue);
                }
              }

              this[directSyncMethod](newValue, oldValue, CHANGED_BY);
            }
          }
        };

        ctx.watch[propName] = {
          immediate: true,

          handler: function handler(newValue, oldValue) {
            this[watchMethod](newValue, oldValue, X_WATCH_PROP);
          }

        };
        ctx.watch[proxy] = {
          immediate: true,

          handler: function handler(newValue, oldValue) {
            if (this[X_PROXY_CHANGED_BY_PARENT]) {
              this[X_PROXY_CHANGED_BY_PARENT] = false;
              return;
            }

            this[watchMethod](newValue, oldValue, X_WATCH_PROXY);
          }

        };
      });
    }

  });
  });

  /** `Object#toString` result references. */
  var numberTag$1 = '[object Number]';

  /**
   * Checks if `value` is classified as a `Number` primitive or object.
   *
   * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
   * classified as numbers, use the `_.isFinite` method.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a number, else `false`.
   * @example
   *
   * _.isNumber(3);
   * // => true
   *
   * _.isNumber(Number.MIN_VALUE);
   * // => true
   *
   * _.isNumber(Infinity);
   * // => true
   *
   * _.isNumber('3');
   * // => false
   */
  function isNumber(value) {
    return typeof value == 'number' ||
      (isObjectLike_1(value) && _baseGetTag(value) == numberTag$1);
  }

  var isNumber_1 = isNumber;

  /**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */
  function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;

    if (start < 0) {
      start = -start > length ? 0 : (length + start);
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;

    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }

  var _baseSlice = baseSlice;

  /**
   * Casts `array` to a slice if it's needed.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {number} start The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the cast slice.
   */
  function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return (!start && end >= length) ? array : _baseSlice(array, start, end);
  }

  var _castSlice = castSlice;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsVarRange = '\\ufe0e\\ufe0f';

  /** Used to compose unicode capture groups. */
  var rsZWJ = '\\u200d';

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  var _hasUnicode = hasUnicode;

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  var _asciiToArray = asciiToArray;

  /** Used to compose unicode character classes. */
  var rsAstralRange$1 = '\\ud800-\\udfff',
      rsComboMarksRange$1 = '\\u0300-\\u036f',
      reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
      rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
      rsVarRange$1 = '\\ufe0e\\ufe0f';

  /** Used to compose unicode capture groups. */
  var rsAstral = '[' + rsAstralRange$1 + ']',
      rsCombo = '[' + rsComboRange$1 + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange$1 + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsZWJ$1 = '\\u200d';

  /** Used to compose unicode regexes. */
  var reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange$1 + ']?',
      rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  var _unicodeToArray = unicodeToArray;

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return _hasUnicode(string)
      ? _unicodeToArray(string)
      : _asciiToArray(string);
  }

  var _stringToArray = stringToArray;

  /**
   * Creates a function like `_.lowerFirst`.
   *
   * @private
   * @param {string} methodName The name of the `String` case method to use.
   * @returns {Function} Returns the new case function.
   */
  function createCaseFirst(methodName) {
    return function(string) {
      string = toString_1(string);

      var strSymbols = _hasUnicode(string)
        ? _stringToArray(string)
        : undefined;

      var chr = strSymbols
        ? strSymbols[0]
        : string.charAt(0);

      var trailing = strSymbols
        ? _castSlice(strSymbols, 1).join('')
        : string.slice(1);

      return chr[methodName]() + trailing;
    };
  }

  var _createCaseFirst = createCaseFirst;

  /**
   * Converts the first character of `string` to upper case.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.upperFirst('fred');
   * // => 'Fred'
   *
   * _.upperFirst('FRED');
   * // => 'FRED'
   */
  var upperFirst = _createCaseFirst('toUpperCase');

  var upperFirst_1 = upperFirst;

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  var _arrayReduce = arrayReduce;

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike_1(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length,
          index = fromRight ? length : -1,
          iterable = Object(collection);

      while ((fromRight ? index-- : ++index < length)) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }

  var _createBaseEach = createBaseEach;

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEach = _createBaseEach(_baseForOwn);

  var _baseEach = baseEach;

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  var _listCacheClear = listCacheClear;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  var eq_1 = eq;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq_1(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  var _assocIndexOf = assocIndexOf;

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  var _listCacheDelete = listCacheDelete;

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  var _listCacheGet = listCacheGet;

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return _assocIndexOf(this.__data__, key) > -1;
  }

  var _listCacheHas = listCacheHas;

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  var _listCacheSet = listCacheSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = _listCacheClear;
  ListCache.prototype['delete'] = _listCacheDelete;
  ListCache.prototype.get = _listCacheGet;
  ListCache.prototype.has = _listCacheHas;
  ListCache.prototype.set = _listCacheSet;

  var _ListCache = ListCache;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new _ListCache;
    this.size = 0;
  }

  var _stackClear = stackClear;

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  var _stackDelete = stackDelete;

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  var _stackGet = stackGet;

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  var _stackHas = stackHas;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = _root['__core-js_shared__'];

  var _coreJsData = coreJsData;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  var _isMasked = isMasked;

  /** Used for built-in method references. */
  var funcProto = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  var _toSource = toSource;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype,
      objectProto$6 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString$1.call(hasOwnProperty$4).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject_1(value) || _isMasked(value)) {
      return false;
    }
    var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(_toSource(value));
  }

  var _baseIsNative = baseIsNative;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = _getValue(object, key);
    return _baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative;

  /* Built-in method references that are verified to be native. */
  var Map$1 = _getNative(_root, 'Map');

  var _Map = Map$1;

  /* Built-in method references that are verified to be native. */
  var nativeCreate = _getNative(Object, 'create');

  var _nativeCreate = nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
    this.size = 0;
  }

  var _hashClear = hashClear;

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  var _hashDelete = hashDelete;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (_nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty$5.call(data, key) ? data[key] : undefined;
  }

  var _hashGet = hashGet;

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$6.call(data, key);
  }

  var _hashHas = hashHas;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
    return this;
  }

  var _hashSet = hashSet;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = _hashClear;
  Hash.prototype['delete'] = _hashDelete;
  Hash.prototype.get = _hashGet;
  Hash.prototype.has = _hashHas;
  Hash.prototype.set = _hashSet;

  var _Hash = Hash;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new _Hash,
      'map': new (_Map || _ListCache),
      'string': new _Hash
    };
  }

  var _mapCacheClear = mapCacheClear;

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  var _isKeyable = isKeyable;

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return _isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  var _getMapData = getMapData;

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = _getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  var _mapCacheDelete = mapCacheDelete;

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return _getMapData(this, key).get(key);
  }

  var _mapCacheGet = mapCacheGet;

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return _getMapData(this, key).has(key);
  }

  var _mapCacheHas = mapCacheHas;

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = _getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  var _mapCacheSet = mapCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = _mapCacheClear;
  MapCache.prototype['delete'] = _mapCacheDelete;
  MapCache.prototype.get = _mapCacheGet;
  MapCache.prototype.has = _mapCacheHas;
  MapCache.prototype.set = _mapCacheSet;

  var _MapCache = MapCache;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof _ListCache) {
      var pairs = data.__data__;
      if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new _MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  var _stackSet = stackSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new _ListCache(entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = _stackClear;
  Stack.prototype['delete'] = _stackDelete;
  Stack.prototype.get = _stackGet;
  Stack.prototype.has = _stackHas;
  Stack.prototype.set = _stackSet;

  var _Stack = Stack;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED$2);
    return this;
  }

  var _setCacheAdd = setCacheAdd;

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  var _setCacheHas = setCacheHas;

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new _MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }

  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
  SetCache.prototype.has = _setCacheHas;

  var _SetCache = SetCache;

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  var _arraySome = arraySome;

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  var _cacheHas = cacheHas;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        arrLength = array.length,
        othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1,
        result = true,
        seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

    stack.set(array, other);
    stack.set(other, array);

    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (!_arraySome(other, function(othValue, othIndex) {
              if (!_cacheHas(seen, othIndex) &&
                  (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
          result = false;
          break;
        }
      } else if (!(
            arrValue === othValue ||
              equalFunc(arrValue, othValue, bitmask, customizer, stack)
          )) {
        result = false;
        break;
      }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  var _equalArrays = equalArrays;

  /** Built-in value references. */
  var Uint8Array = _root.Uint8Array;

  var _Uint8Array = Uint8Array;

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  var _mapToArray = mapToArray;

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  var _setToArray = setToArray;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$1 = 1,
      COMPARE_UNORDERED_FLAG$1 = 2;

  /** `Object#toString` result references. */
  var boolTag$2 = '[object Boolean]',
      dateTag$1 = '[object Date]',
      errorTag$1 = '[object Error]',
      mapTag$1 = '[object Map]',
      numberTag$2 = '[object Number]',
      regexpTag$1 = '[object RegExp]',
      setTag$1 = '[object Set]',
      stringTag$1 = '[object String]',
      symbolTag$1 = '[object Symbol]';

  var arrayBufferTag$1 = '[object ArrayBuffer]',
      dataViewTag$1 = '[object DataView]';

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
      symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag$1:
        if ((object.byteLength != other.byteLength) ||
            (object.byteOffset != other.byteOffset)) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag$1:
        if ((object.byteLength != other.byteLength) ||
            !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
          return false;
        }
        return true;

      case boolTag$2:
      case dateTag$1:
      case numberTag$2:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq_1(+object, +other);

      case errorTag$1:
        return object.name == other.name && object.message == other.message;

      case regexpTag$1:
      case stringTag$1:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == (other + '');

      case mapTag$1:
        var convert = _mapToArray;

      case setTag$1:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
        convert || (convert = _setToArray);

        if (object.size != other.size && !isPartial) {
          return false;
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG$1;

        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other);
        var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;

      case symbolTag$1:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }

  var _equalByTag = equalByTag;

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  var _arrayPush = arrayPush;

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
  }

  var _baseGetAllKeys = baseGetAllKeys;

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  var _arrayFilter = arrayFilter;

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  var stubArray_1 = stubArray;

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /** Built-in value references. */
  var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return _arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable$1.call(object, symbol);
    });
  };

  var _getSymbols = getSymbols;

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return _baseGetAllKeys(object, keys_1, _getSymbols);
  }

  var _getAllKeys = getAllKeys;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$2 = 1;

  /** Used for built-in method references. */
  var objectProto$10 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$10.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
        objProps = _getAllKeys(object),
        objLength = objProps.length,
        othProps = _getAllKeys(other),
        othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty$7.call(other, key))) {
        return false;
      }
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);

    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack);
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (!(compared === undefined
            ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
            : compared
          )) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;

      // Non `Object` object instances with different constructors are not equal.
      if (objCtor != othCtor &&
          ('constructor' in object && 'constructor' in other) &&
          !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
            typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  var _equalObjects = equalObjects;

  /* Built-in method references that are verified to be native. */
  var DataView = _getNative(_root, 'DataView');

  var _DataView = DataView;

  /* Built-in method references that are verified to be native. */
  var Promise = _getNative(_root, 'Promise');

  var _Promise = Promise;

  /* Built-in method references that are verified to be native. */
  var Set = _getNative(_root, 'Set');

  var _Set = Set;

  /* Built-in method references that are verified to be native. */
  var WeakMap = _getNative(_root, 'WeakMap');

  var _WeakMap = WeakMap;

  /** `Object#toString` result references. */
  var mapTag$2 = '[object Map]',
      objectTag$1 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag$2 = '[object Set]',
      weakMapTag$1 = '[object WeakMap]';

  var dataViewTag$2 = '[object DataView]';

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = _toSource(_DataView),
      mapCtorString = _toSource(_Map),
      promiseCtorString = _toSource(_Promise),
      setCtorString = _toSource(_Set),
      weakMapCtorString = _toSource(_WeakMap);

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = _baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
      (_Map && getTag(new _Map) != mapTag$2) ||
      (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
      (_Set && getTag(new _Set) != setTag$2) ||
      (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
    getTag = function(value) {
      var result = _baseGetTag(value),
          Ctor = result == objectTag$1 ? value.constructor : undefined,
          ctorString = Ctor ? _toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag$2;
          case mapCtorString: return mapTag$2;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag$2;
          case weakMapCtorString: return weakMapTag$1;
        }
      }
      return result;
    };
  }

  var _getTag = getTag;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$3 = 1;

  /** `Object#toString` result references. */
  var argsTag$2 = '[object Arguments]',
      arrayTag$1 = '[object Array]',
      objectTag$2 = '[object Object]';

  /** Used for built-in method references. */
  var objectProto$11 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$11.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray_1(object),
        othIsArr = isArray_1(other),
        objTag = objIsArr ? arrayTag$1 : _getTag(object),
        othTag = othIsArr ? arrayTag$1 : _getTag(other);

    objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
    othTag = othTag == argsTag$2 ? objectTag$2 : othTag;

    var objIsObj = objTag == objectTag$2,
        othIsObj = othTag == objectTag$2,
        isSameTag = objTag == othTag;

    if (isSameTag && isBuffer_1(object)) {
      if (!isBuffer_1(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new _Stack);
      return (objIsArr || isTypedArray_1(object))
        ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
        : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
      var objIsWrapped = objIsObj && hasOwnProperty$8.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty$8.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;

        stack || (stack = new _Stack);
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new _Stack);
    return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  var _baseIsEqualDeep = baseIsEqualDeep;

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
      return value !== value && other !== other;
    }
    return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }

  var _baseIsEqual = baseIsEqual;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$4 = 1,
      COMPARE_UNORDERED_FLAG$2 = 2;

  /**
   * The base implementation of `_.isMatch` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Array} matchData The property names, values, and compare flags to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;

    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if ((noCustomizer && data[2])
            ? data[1] !== object[data[0]]
            : !(data[0] in object)
          ) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];

      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new _Stack;
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === undefined
              ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
              : result
            )) {
          return false;
        }
      }
    }
    return true;
  }

  var _baseIsMatch = baseIsMatch;

  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
  function isStrictComparable(value) {
    return value === value && !isObject_1(value);
  }

  var _isStrictComparable = isStrictComparable;

  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
  function getMatchData(object) {
    var result = keys_1(object),
        length = result.length;

    while (length--) {
      var key = result[length],
          value = object[key];

      result[length] = [key, value, _isStrictComparable(value)];
    }
    return result;
  }

  var _getMatchData = getMatchData;

  /**
   * A specialized version of `matchesProperty` for source values suitable
   * for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue &&
        (srcValue !== undefined || (key in Object(object)));
    };
  }

  var _matchesStrictComparable = matchesStrictComparable;

  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatches(source) {
    var matchData = _getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || _baseIsMatch(object, source, matchData);
    };
  }

  var _baseMatches = baseMatches;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray_1(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' ||
        value == null || isSymbol_1(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
      (object != null && value in Object(object));
  }

  var _isKey = isKey;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || _MapCache);
    return memoized;
  }

  // Expose `MapCache`.
  memoize.Cache = _MapCache;

  var memoize_1 = memoize;

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize_1(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });

    var cache = result.cache;
    return result;
  }

  var _memoizeCapped = memoizeCapped;

  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = _memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  });

  var _stringToPath = stringToPath;

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if (isArray_1(value)) {
      return value;
    }
    return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
  }

  var _castPath = castPath;

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol_1(value)) {
      return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
  }

  var _toKey = toKey;

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = _castPath(path, object);

    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[_toKey(path[index++])];
    }
    return (index && index == length) ? object : undefined;
  }

  var _baseGet = baseGet;

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : _baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  var get_1 = get;

  /**
   * The base implementation of `_.hasIn` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }

  var _baseHasIn = baseHasIn;

  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
  function hasPath(object, path, hasFunc) {
    path = _castPath(path, object);

    var index = -1,
        length = path.length,
        result = false;

    while (++index < length) {
      var key = _toKey(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength_1(length) && _isIndex(key, length) &&
      (isArray_1(object) || isArguments_1(object));
  }

  var _hasPath = hasPath;

  /**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.hasIn(object, 'a');
   * // => true
   *
   * _.hasIn(object, 'a.b');
   * // => true
   *
   * _.hasIn(object, ['a', 'b']);
   * // => true
   *
   * _.hasIn(object, 'b');
   * // => false
   */
  function hasIn(object, path) {
    return object != null && _hasPath(object, path, _baseHasIn);
  }

  var hasIn_1 = hasIn;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$5 = 1,
      COMPARE_UNORDERED_FLAG$3 = 2;

  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatchesProperty(path, srcValue) {
    if (_isKey(path) && _isStrictComparable(srcValue)) {
      return _matchesStrictComparable(_toKey(path), srcValue);
    }
    return function(object) {
      var objValue = get_1(object, path);
      return (objValue === undefined && objValue === srcValue)
        ? hasIn_1(object, path)
        : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
    };
  }

  var _baseMatchesProperty = baseMatchesProperty;

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  var _baseProperty = baseProperty;

  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyDeep(path) {
    return function(object) {
      return _baseGet(object, path);
    };
  }

  var _basePropertyDeep = basePropertyDeep;

  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */
  function property(path) {
    return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
  }

  var property_1 = property;

  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
  function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }
    if (value == null) {
      return identity_1;
    }
    if (typeof value == 'object') {
      return isArray_1(value)
        ? _baseMatchesProperty(value[0], value[1])
        : _baseMatches(value);
    }
    return property_1(value);
  }

  var _baseIteratee = baseIteratee;

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  var _baseReduce = baseReduce;

  /**
   * Reduces `collection` to a value which is the accumulated result of running
   * each element in `collection` thru `iteratee`, where each successive
   * invocation is supplied the return value of the previous. If `accumulator`
   * is not given, the first element of `collection` is used as the initial
   * value. The iteratee is invoked with four arguments:
   * (accumulator, value, index|key, collection).
   *
   * Many lodash methods are guarded to work as iteratees for methods like
   * `_.reduce`, `_.reduceRight`, and `_.transform`.
   *
   * The guarded methods are:
   * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
   * and `sortBy`
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @returns {*} Returns the accumulated value.
   * @see _.reduceRight
   * @example
   *
   * _.reduce([1, 2], function(sum, n) {
   *   return sum + n;
   * }, 0);
   * // => 3
   *
   * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
   *   (result[value] || (result[value] = [])).push(key);
   *   return result;
   * }, {});
   * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
   */
  function reduce(collection, iteratee, accumulator) {
    var func = isArray_1(collection) ? _arrayReduce : _baseReduce,
        initAccum = arguments.length < 3;

    return func(collection, _baseIteratee(iteratee, 4), accumulator, initAccum, _baseEach);
  }

  var reduce_1 = reduce;

  var customRenderer = (function (renderFns) {
    return reduce_1(renderFns, function (mixin, defaultRenderFn, propName) {
      var PropName = upperFirst_1(propName);

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
    return isObjectLike_1(propVNode) ? propVNode : toString_1(propVNode);
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

        return reduce_1(propDescriptors, function (props, descriptor, propName) {
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
    }), index({
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
        return isBoolean_1(localSelectedValue) ? AGREE : isArray_1(localSelectedValue) ? CHECKBOX : RADIO;
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

  /** `Object#toString` result references. */
  var stringTag$2 = '[object String]';

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString(value) {
    return typeof value == 'string' ||
      (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag$2);
  }

  var isString_1 = isString;

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
        return isBoolean_1(value) || ARROWS.indexOf(value) >= 0;
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

      var arrow = isBoolean_1(props.arrow) ? props.arrow && 'right' : props.arrow;
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
      }, [isString_1(icon) ? h(Icon, {
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
    mixins: [index({
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

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol_1(value)) {
      return NAN;
    }
    if (isObject_1(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject_1(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var toNumber_1 = toNumber;

  var styles$9 = {"input":"f-389 f-1Xw"};

  var Input = {
    name: 'f-input',
    mixins: [index({
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
            _.newValue = toNumber_1(newValue);
          }
        }

        return _;
      },
      handleInput: function handleInput(e) {
        var value = e.target.value;

        if (isFunction_1(this.validator)) {
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
    mixins: [index({
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
        _.newValue = toNumber_1(_.newValue);
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

  var styles$11 = {"picker-view":"f-qZH","mask":"f-2vK","indicator":"f-1oq","content":"f-3TD f-1Ac","scroll":"f--Yp","unit":"f-1cr f-m9L","divider":"f-dlO f-m9L","loading":"f-w9F f-m9L","item":"f-2hL","disabled":"f-6PX"};

  var mixins = [CSSModules(styles$11), index({
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

  var DIRECTION_DOWN = 0;
  var DIRECTION_UP = 1;
  var GROUP_CLASS_NAME = styles$11.group;
  var ITEM_CLASS_NAME = styles$11.item;
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
      // todo
      return this.loading && this.$createElement('div', {
        styleName: 'loading'
      }, 'LOADING');
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

  /** Used as references for various `Number` constants. */
  var INFINITY$2 = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308;

  /**
   * Converts `value` to a finite number.
   *
   * @static
   * @memberOf _
   * @since 4.12.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted number.
   * @example
   *
   * _.toFinite(3.2);
   * // => 3.2
   *
   * _.toFinite(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toFinite(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toFinite('3.2');
   * // => 3.2
   */
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber_1(value);
    if (value === INFINITY$2 || value === -INFINITY$2) {
      var sign = (value < 0 ? -1 : 1);
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }

  var toFinite_1 = toFinite;

  /**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */
  function toInteger(value) {
    var result = toFinite_1(value),
        remainder = result % 1;

    return result === result ? (remainder ? result - remainder : result) : 0;
  }

  var toInteger_1 = toInteger;

  /**
   * The base implementation of `_.clamp` which doesn't coerce arguments.
   *
   * @private
   * @param {number} number The number to clamp.
   * @param {number} [lower] The lower bound.
   * @param {number} upper The upper bound.
   * @returns {number} Returns the clamped number.
   */
  function baseClamp(number, lower, upper) {
    if (number === number) {
      if (upper !== undefined) {
        number = number <= upper ? number : upper;
      }
      if (lower !== undefined) {
        number = number >= lower ? number : lower;
      }
    }
    return number;
  }

  var _baseClamp = baseClamp;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295;

  /**
   * Converts `value` to an integer suitable for use as the length of an
   * array-like object.
   *
   * **Note:** This method is based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toLength(3.2);
   * // => 3
   *
   * _.toLength(Number.MIN_VALUE);
   * // => 0
   *
   * _.toLength(Infinity);
   * // => 4294967295
   *
   * _.toLength('3.2');
   * // => 3
   */
  function toLength(value) {
    return value ? _baseClamp(toInteger_1(value), 0, MAX_ARRAY_LENGTH) : 0;
  }

  var toLength_1 = toLength;

  /**
   * The base implementation of `_.fill` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to fill.
   * @param {*} value The value to fill `array` with.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns `array`.
   */
  function baseFill(array, value, start, end) {
    var length = array.length;

    start = toInteger_1(start);
    if (start < 0) {
      start = -start > length ? 0 : (length + start);
    }
    end = (end === undefined || end > length) ? length : toInteger_1(end);
    if (end < 0) {
      end += length;
    }
    end = start > end ? 0 : toLength_1(end);
    while (start < end) {
      array[start++] = value;
    }
    return array;
  }

  var _baseFill = baseFill;

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject_1(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
          ? (isArrayLike_1(object) && _isIndex(index, object.length))
          : (type == 'string' && index in object)
        ) {
      return eq_1(object[index], value);
    }
    return false;
  }

  var _isIterateeCall = isIterateeCall;

  /**
   * Fills elements of `array` with `value` from `start` up to, but not
   * including, `end`.
   *
   * **Note:** This method mutates `array`.
   *
   * @static
   * @memberOf _
   * @since 3.2.0
   * @category Array
   * @param {Array} array The array to fill.
   * @param {*} value The value to fill `array` with.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns `array`.
   * @example
   *
   * var array = [1, 2, 3];
   *
   * _.fill(array, 'a');
   * console.log(array);
   * // => ['a', 'a', 'a']
   *
   * _.fill(Array(3), 2);
   * // => [2, 2, 2]
   *
   * _.fill([4, 6, 8, 10], '*', 1, 3);
   * // => [4, '*', '*', 10]
   */
  function fill(array, value, start, end) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return [];
    }
    if (start && typeof start != 'number' && _isIterateeCall(array, value, start)) {
      start = 0;
      end = length;
    }
    return _baseFill(array, value, start, end);
  }

  var fill_1 = fill;

  var computedProps = {
    groupCount: function groupCount() {
      return this.localData.length;
    },
    localDivider: function localDivider() {
      return isArray_1(this.divider) ? this.divider : fill_1(Array(this.groupCount), this.divider);
    },
    localUnit: function localUnit() {
      return isArray_1(this.unit) ? this.unit : fill_1(Array(this.groupCount), this.unit);
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

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  var _baseFindIndex = baseFindIndex;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * This method is like `_.findIndex` except that it iterates over elements
   * of `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=array.length-1] The index to search from.
   * @returns {number} Returns the index of the found element, else `-1`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': true },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': false }
   * ];
   *
   * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
   * // => 2
   *
   * // The `_.matches` iteratee shorthand.
   * _.findLastIndex(users, { 'user': 'barney', 'active': true });
   * // => 0
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.findLastIndex(users, ['active', false]);
   * // => 2
   *
   * // The `_.property` iteratee shorthand.
   * _.findLastIndex(users, 'active');
   * // => 0
   */
  function findLastIndex(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return -1;
    }
    var index = length - 1;
    if (fromIndex !== undefined) {
      index = toInteger_1(fromIndex);
      index = fromIndex < 0
        ? nativeMax(length + index, 0)
        : nativeMin(index, length - 1);
    }
    return _baseFindIndex(array, _baseIteratee(predicate, 3), index, true);
  }

  var findLastIndex_1 = findLastIndex;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$1 = Math.max;

  /**
   * This method is like `_.find` except that it returns the index of the first
   * element `predicate` returns truthy for instead of the element itself.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {number} Returns the index of the found element, else `-1`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * _.findIndex(users, function(o) { return o.user == 'barney'; });
   * // => 0
   *
   * // The `_.matches` iteratee shorthand.
   * _.findIndex(users, { 'user': 'fred', 'active': false });
   * // => 1
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.findIndex(users, ['active', false]);
   * // => 0
   *
   * // The `_.property` iteratee shorthand.
   * _.findIndex(users, 'active');
   * // => 2
   */
  function findIndex(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return -1;
    }
    var index = fromIndex == null ? 0 : toInteger_1(fromIndex);
    if (index < 0) {
      index = nativeMax$1(length + index, 0);
    }
    return _baseFindIndex(array, _baseIteratee(predicate, 3), index);
  }

  var findIndex_1 = findIndex;

  function findAvailableItemIndex (items, currentItemIndex, direction) {
    if (items[currentItemIndex] && !items[currentItemIndex].disabled) {
      return currentItemIndex;
    }

    var newIndex;

    var findDown = function findDown() {
      return findIndex_1(items, function (item) {
        return !item.disabled;
      }, currentItemIndex);
    };

    var findUp = function findUp() {
      return findLastIndex_1(items.slice(0, currentItemIndex), function (item) {
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

  /**
   * Checks if `value` is `null` or `undefined`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
   * @example
   *
   * _.isNil(null);
   * // => true
   *
   * _.isNil(void 0);
   * // => true
   *
   * _.isNil(NaN);
   * // => false
   */
  function isNil(value) {
    return value == null;
  }

  var isNil_1 = isNil;

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


    if (selectedItemIndex === -1 && !isNil_1(localValue[groupIndex])) {
      selectedItemIndex = findIndex_1(localData[groupIndex], function (item) {
        return item.value === localValue[groupIndex];
      });
    } // 3. 若未找到，直接找一个可用值；若找到，确保其可用


    selectedItemIndex = findAvailableItemIndex(localData[groupIndex], selectedItemIndex <= 0 ? 0 : selectedItemIndex >= itemCount ? itemCount - 1 : selectedItemIndex, DIRECTION_DOWN);
    return selectedItemIndex;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  var _arrayEach = arrayEach;

  var defineProperty = (function() {
    try {
      var func = _getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());

  var _defineProperty = defineProperty;

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && _defineProperty) {
      _defineProperty(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  var _baseAssignValue = baseAssignValue;

  /** Used for built-in method references. */
  var objectProto$12 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$9 = objectProto$12.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$9.call(object, key) && eq_1(objValue, value)) ||
        (value === undefined && !(key in object))) {
      _baseAssignValue(object, key, value);
    }
  }

  var _assignValue = assignValue;

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        _baseAssignValue(object, key, newValue);
      } else {
        _assignValue(object, key, newValue);
      }
    }
    return object;
  }

  var _copyObject = copyObject;

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && _copyObject(source, keys_1(source), object);
  }

  var _baseAssign = baseAssign;

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  var _nativeKeysIn = nativeKeysIn;

  /** Used for built-in method references. */
  var objectProto$13 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$10 = objectProto$13.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject_1(object)) {
      return _nativeKeysIn(object);
    }
    var isProto = _isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$10.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeysIn = baseKeysIn;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn$1(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
  }

  var keysIn_1 = keysIn$1;

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn(object, source) {
    return object && _copyObject(source, keysIn_1(source), object);
  }

  var _baseAssignIn = baseAssignIn;

  var _cloneBuffer = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  module.exports = cloneBuffer;
  });

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  var _copyArray = copyArray;

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return _copyObject(source, _getSymbols(source), object);
  }

  var _copySymbols = copySymbols;

  /** Built-in value references. */
  var getPrototype = _overArg(Object.getPrototypeOf, Object);

  var _getPrototype = getPrototype;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
    var result = [];
    while (object) {
      _arrayPush(result, _getSymbols(object));
      object = _getPrototype(object);
    }
    return result;
  };

  var _getSymbolsIn = getSymbolsIn;

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn(source, object) {
    return _copyObject(source, _getSymbolsIn(source), object);
  }

  var _copySymbolsIn = copySymbolsIn;

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn(object) {
    return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
  }

  var _getAllKeysIn = getAllKeysIn;

  /** Used for built-in method references. */
  var objectProto$14 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$11 = objectProto$14.hasOwnProperty;

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray(array) {
    var length = array.length,
        result = new array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty$11.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  var _initCloneArray = initCloneArray;

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
    return result;
  }

  var _cloneArrayBuffer = cloneArrayBuffer;

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  var _cloneDataView = cloneDataView;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  var _cloneRegExp = cloneRegExp;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined,
      symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol(symbol) {
    return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
  }

  var _cloneSymbol = cloneSymbol;

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  var _cloneTypedArray = cloneTypedArray;

  /** `Object#toString` result references. */
  var boolTag$3 = '[object Boolean]',
      dateTag$2 = '[object Date]',
      mapTag$3 = '[object Map]',
      numberTag$3 = '[object Number]',
      regexpTag$2 = '[object RegExp]',
      setTag$3 = '[object Set]',
      stringTag$3 = '[object String]',
      symbolTag$2 = '[object Symbol]';

  var arrayBufferTag$2 = '[object ArrayBuffer]',
      dataViewTag$3 = '[object DataView]',
      float32Tag$1 = '[object Float32Array]',
      float64Tag$1 = '[object Float64Array]',
      int8Tag$1 = '[object Int8Array]',
      int16Tag$1 = '[object Int16Array]',
      int32Tag$1 = '[object Int32Array]',
      uint8Tag$1 = '[object Uint8Array]',
      uint8ClampedTag$1 = '[object Uint8ClampedArray]',
      uint16Tag$1 = '[object Uint16Array]',
      uint32Tag$1 = '[object Uint32Array]';

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$2:
        return _cloneArrayBuffer(object);

      case boolTag$3:
      case dateTag$2:
        return new Ctor(+object);

      case dataViewTag$3:
        return _cloneDataView(object, isDeep);

      case float32Tag$1: case float64Tag$1:
      case int8Tag$1: case int16Tag$1: case int32Tag$1:
      case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
        return _cloneTypedArray(object, isDeep);

      case mapTag$3:
        return new Ctor;

      case numberTag$3:
      case stringTag$3:
        return new Ctor(object);

      case regexpTag$2:
        return _cloneRegExp(object);

      case setTag$3:
        return new Ctor;

      case symbolTag$2:
        return _cloneSymbol(object);
    }
  }

  var _initCloneByTag = initCloneByTag;

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function() {
    function object() {}
    return function(proto) {
      if (!isObject_1(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }());

  var _baseCreate = baseCreate;

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !_isPrototype(object))
      ? _baseCreate(_getPrototype(object))
      : {};
  }

  var _initCloneObject = initCloneObject;

  /** `Object#toString` result references. */
  var mapTag$4 = '[object Map]';

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap(value) {
    return isObjectLike_1(value) && _getTag(value) == mapTag$4;
  }

  var _baseIsMap = baseIsMap;

  /* Node.js helper references. */
  var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

  var isMap_1 = isMap;

  /** `Object#toString` result references. */
  var setTag$4 = '[object Set]';

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet(value) {
    return isObjectLike_1(value) && _getTag(value) == setTag$4;
  }

  var _baseIsSet = baseIsSet;

  /* Node.js helper references. */
  var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

  var isSet_1 = isSet;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** `Object#toString` result references. */
  var argsTag$3 = '[object Arguments]',
      arrayTag$2 = '[object Array]',
      boolTag$4 = '[object Boolean]',
      dateTag$3 = '[object Date]',
      errorTag$2 = '[object Error]',
      funcTag$2 = '[object Function]',
      genTag$1 = '[object GeneratorFunction]',
      mapTag$5 = '[object Map]',
      numberTag$4 = '[object Number]',
      objectTag$3 = '[object Object]',
      regexpTag$3 = '[object RegExp]',
      setTag$5 = '[object Set]',
      stringTag$4 = '[object String]',
      symbolTag$3 = '[object Symbol]',
      weakMapTag$2 = '[object WeakMap]';

  var arrayBufferTag$3 = '[object ArrayBuffer]',
      dataViewTag$4 = '[object DataView]',
      float32Tag$2 = '[object Float32Array]',
      float64Tag$2 = '[object Float64Array]',
      int8Tag$2 = '[object Int8Array]',
      int16Tag$2 = '[object Int16Array]',
      int32Tag$2 = '[object Int32Array]',
      uint8Tag$2 = '[object Uint8Array]',
      uint8ClampedTag$2 = '[object Uint8ClampedArray]',
      uint16Tag$2 = '[object Uint16Array]',
      uint32Tag$2 = '[object Uint32Array]';

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] =
  cloneableTags[arrayBufferTag$3] = cloneableTags[dataViewTag$4] =
  cloneableTags[boolTag$4] = cloneableTags[dateTag$3] =
  cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
  cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
  cloneableTags[int32Tag$2] = cloneableTags[mapTag$5] =
  cloneableTags[numberTag$4] = cloneableTags[objectTag$3] =
  cloneableTags[regexpTag$3] = cloneableTags[setTag$5] =
  cloneableTags[stringTag$4] = cloneableTags[symbolTag$3] =
  cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
  cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
  cloneableTags[errorTag$2] = cloneableTags[funcTag$2] =
  cloneableTags[weakMapTag$2] = false;

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject_1(value)) {
      return value;
    }
    var isArr = isArray_1(value);
    if (isArr) {
      result = _initCloneArray(value);
      if (!isDeep) {
        return _copyArray(value, result);
      }
    } else {
      var tag = _getTag(value),
          isFunc = tag == funcTag$2 || tag == genTag$1;

      if (isBuffer_1(value)) {
        return _cloneBuffer(value, isDeep);
      }
      if (tag == objectTag$3 || tag == argsTag$3 || (isFunc && !object)) {
        result = (isFlat || isFunc) ? {} : _initCloneObject(value);
        if (!isDeep) {
          return isFlat
            ? _copySymbolsIn(value, _baseAssignIn(result, value))
            : _copySymbols(value, _baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = _initCloneByTag(value, tag, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new _Stack);
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    if (isSet_1(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });

      return result;
    }

    if (isMap_1(value)) {
      value.forEach(function(subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });

      return result;
    }

    var keysFunc = isFull
      ? (isFlat ? _getAllKeysIn : _getAllKeys)
      : (isFlat ? keysIn : keys_1);

    var props = isArr ? undefined : keysFunc(value);
    _arrayEach(props || value, function(subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  var _baseClone = baseClone;

  /** Used to compose bitmasks for cloning. */
  var CLONE_SYMBOLS_FLAG$1 = 4;

  /**
   * Creates a shallow clone of `value`.
   *
   * **Note:** This method is loosely based on the
   * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
   * and supports cloning arrays, array buffers, booleans, date objects, maps,
   * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
   * arrays. The own enumerable properties of `arguments` objects are cloned
   * as plain objects. An empty object is returned for uncloneable values such
   * as error objects, functions, DOM nodes, and WeakMaps.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to clone.
   * @returns {*} Returns the cloned value.
   * @see _.cloneDeep
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var shallow = _.clone(objects);
   * console.log(shallow[0] === objects[0]);
   * // => true
   */
  function clone(value) {
    return _baseClone(value, CLONE_SYMBOLS_FLAG$1);
  }

  var clone_1 = clone;

  function processData(items, groupIndex) {
    var filterItem = this.filterItem,
        disableItem = this.disableItem,
        renderItem = this.renderItem;
    var newItems = [];

    for (var itemIndex = 0, len = items.length; itemIndex < len; itemIndex++) {
      var item = clone_1(items[itemIndex]);

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

      if (isArray_1(item.children) && item.children.length) {
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

  /*!
   * better-normal-scroll v1.9.1
   * (c) 2016-2018 ustbhuangyi
   * Released under the MIT License.
   */
  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();













  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  function eventMixin(BScroll) {
    BScroll.prototype.on = function (type, fn) {
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

      if (!this._events[type]) {
        this._events[type] = [];
      }

      this._events[type].push([fn, context]);
    };

    BScroll.prototype.once = function (type, fn) {
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

      function magic() {
        this.off(type, magic);

        fn.apply(context, arguments);
      }
      // To expose the corresponding function method in order to execute the off method
      magic.fn = fn;

      this.on(type, magic);
    };

    BScroll.prototype.off = function (type, fn) {
      var _events = this._events[type];
      if (!_events) {
        return;
      }

      var count = _events.length;
      while (count--) {
        if (_events[count][0] === fn || _events[count][0] && _events[count][0].fn === fn) {
          _events[count][0] = undefined;
        }
      }
    };

    BScroll.prototype.trigger = function (type) {
      var events = this._events[type];
      if (!events) {
        return;
      }

      var len = events.length;
      var eventsCopy = [].concat(toConsumableArray(events));
      for (var i = 0; i < len; i++) {
        var event = eventsCopy[i];

        var _event = slicedToArray(event, 2),
            fn = _event[0],
            context = _event[1];

        if (fn) {
          fn.apply(context, [].slice.call(arguments, 1));
        }
      }
    };
  }

  // ssr support
  var inBrowser = typeof window !== 'undefined';
  var ua = inBrowser && navigator.userAgent.toLowerCase();
  var isWeChatDevTools = ua && /wechatdevtools/.test(ua);
  var isAndroid = ua && ua.indexOf('android') > 0;

  function getNow() {
    return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date();
  }

  function extend(target) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < rest.length; i++) {
      var source = rest[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target;
  }

  function isUndef(v) {
    return v === undefined || v === null;
  }

  var elementStyle = inBrowser && document.createElement('div').style;

  var vendor = function () {
    if (!inBrowser) {
      return false;
    }
    var transformNames = {
      webkit: 'webkitTransform',
      Moz: 'MozTransform',
      O: 'OTransform',
      ms: 'msTransform',
      standard: 'transform'
    };

    for (var key in transformNames) {
      if (elementStyle[transformNames[key]] !== undefined) {
        return key;
      }
    }

    return false;
  }();

  function prefixStyle(style) {
    if (vendor === false) {
      return false;
    }

    if (vendor === 'standard') {
      if (style === 'transitionEnd') {
        return 'transitionend';
      }
      return style;
    }

    return vendor + style.charAt(0).toUpperCase() + style.substr(1);
  }

  function addEvent(el, type, fn, capture) {
    el.addEventListener(type, fn, { passive: false, capture: !!capture });
  }

  function removeEvent(el, type, fn, capture) {
    el.removeEventListener(type, fn, { passive: false, capture: !!capture });
  }

  function offset(el) {
    var left = 0;
    var top = 0;

    while (el) {
      left -= el.offsetLeft;
      top -= el.offsetTop;
      el = el.offsetParent;
    }

    return {
      left: left,
      top: top
    };
  }

  var transform = prefixStyle('transform');

  var hasPerspective = inBrowser && prefixStyle('perspective') in elementStyle;
  // fix issue #361
  var hasTouch = inBrowser && ('ontouchstart' in window || isWeChatDevTools);
  var hasTransform = transform !== false;
  var hasTransition = inBrowser && prefixStyle('transition') in elementStyle;

  var style = {
    transform: transform,
    transitionTimingFunction: prefixStyle('transitionTimingFunction'),
    transitionDuration: prefixStyle('transitionDuration'),
    transitionProperty: prefixStyle('transitionProperty'),
    transitionDelay: prefixStyle('transitionDelay'),
    transformOrigin: prefixStyle('transformOrigin'),
    transitionEnd: prefixStyle('transitionEnd')
  };

  var TOUCH_EVENT = 1;
  var MOUSE_EVENT = 2;

  var eventType = {
    touchstart: TOUCH_EVENT,
    touchmove: TOUCH_EVENT,
    touchend: TOUCH_EVENT,

    mousedown: MOUSE_EVENT,
    mousemove: MOUSE_EVENT,
    mouseup: MOUSE_EVENT
  };

  function getRect(el) {
    if (el instanceof window.SVGElement) {
      var rect = el.getBoundingClientRect();
      return {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      };
    } else {
      return {
        top: el.offsetTop,
        left: el.offsetLeft,
        width: el.offsetWidth,
        height: el.offsetHeight
      };
    }
  }

  function preventDefaultException(el, exceptions) {
    for (var i in exceptions) {
      if (exceptions[i].test(el[i])) {
        return true;
      }
    }
    return false;
  }

  function tap(e, eventName) {
    var ev = document.createEvent('Event');
    ev.initEvent(eventName, true, true);
    ev.pageX = e.pageX;
    ev.pageY = e.pageY;
    e.target.dispatchEvent(ev);
  }

  function click(e) {
    var eventSource = void 0;
    if (e.type === 'mouseup' || e.type === 'mousecancel') {
      eventSource = e;
    } else if (e.type === 'touchend' || e.type === 'touchcancel') {
      eventSource = e.changedTouches[0];
    }
    var posSrc = {};
    if (eventSource) {
      posSrc.screenX = eventSource.screenX || 0;
      posSrc.screenY = eventSource.screenY || 0;
      posSrc.clientX = eventSource.clientX || 0;
      posSrc.clientY = eventSource.clientY || 0;
    }
    var ev = void 0;
    var event = 'click';
    var bubbles = true;
    var cancelable = true;
    if (typeof MouseEvent !== 'undefined') {
      try {
        ev = new MouseEvent(event, extend({
          bubbles: bubbles,
          cancelable: cancelable
        }, posSrc));
      } catch (e) {
        createEvent();
      }
    } else {
      createEvent();
    }

    function createEvent() {
      ev = document.createEvent('Event');
      ev.initEvent(event, bubbles, cancelable);
      extend(ev, posSrc);
    }

    // forwardedTouchEvent set to true in case of the conflict with fastclick
    ev.forwardedTouchEvent = true;
    ev._constructed = true;
    e.target.dispatchEvent(ev);
  }

  function prepend(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild);
    } else {
      target.appendChild(el);
    }
  }

  function before(el, target) {
    target.parentNode.insertBefore(el, target);
  }

  function removeChild(el, child) {
    el.removeChild(child);
  }

  var DEFAULT_OPTIONS = {
    startX: 0,
    startY: 0,
    scrollX: false,
    scrollY: true,
    freeScroll: false,
    directionLockThreshold: 5,
    eventPassthrough: '',
    click: false,
    tap: false,
    bounce: true,
    bounceTime: 800,
    momentum: true,
    momentumLimitTime: 300,
    momentumLimitDistance: 15,
    swipeTime: 2500,
    swipeBounceTime: 500,
    deceleration: 0.001,
    flickLimitTime: 200,
    flickLimitDistance: 100,
    resizePolling: 60,
    probeType: 0,
    preventDefault: true,
    preventDefaultException: {
      tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
    },
    HWCompositing: true,
    useTransition: true,
    useTransform: true,
    bindToWrapper: false,
    disableMouse: hasTouch,
    disableTouch: !hasTouch,
    observeDOM: true,
    autoBlur: true,
    /**
     * for picker
     * wheel: {
     *   selectedIndex: 0,
     *   rotate: 25,
     *   adjustTime: 400
     *   wheelWrapperClass: 'wheel-scroll',
     *   wheelItemClass: 'wheel-item'
     * }
     */
    wheel: false,
    /**
     * for slide
     * snap: {
     *   loop: false,
     *   el: domEl,
     *   threshold: 0.1,
     *   stepX: 100,
     *   stepY: 100,
     *   speed: 400,
     *   easing: {
     *     style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
     *     fn: function (t) {
     *       return t * (2 - t)
     *     }
     *   }
     *   listenFlick: true
     * }
     */
    snap: false,
    /**
     * for scrollbar
     * scrollbar: {
     *   fade: true,
     *   interactive: false
     * }
     */
    scrollbar: false,
    /**
     * for pull down and refresh
     * pullDownRefresh: {
     *   threshold: 50,
     *   stop: 20
     * }
     */
    pullDownRefresh: false,
    /**
     * for pull up and load
     * pullUpLoad: {
     *   threshold: 50
     * }
     */
    pullUpLoad: false,
    /**
     * for mouse wheel
     * mouseWheel:{
     *   speed: 20,
     *   invert: false
     * }
     */
    mouseWheel: false,
    stopPropagation: false
  };

  function initMixin(BScroll) {
    BScroll.prototype._init = function (el, options) {
      this._handleOptions(options);

      // init private custom events
      this._events = {};

      this.x = 0;
      this.y = 0;
      this.directionX = 0;
      this.directionY = 0;

      this._addDOMEvents();

      this._initExtFeatures();

      this._watchTransition();

      if (this.options.observeDOM) {
        this._initDOMObserver();
      }

      if (this.options.autoBlur) {
        this._handleAutoBlur();
      }

      this.refresh();

      if (!this.options.snap) {
        this.scrollTo(this.options.startX, this.options.startY);
      }

      this.enable();
    };

    BScroll.prototype._handleOptions = function (options) {
      this.options = extend({}, DEFAULT_OPTIONS, options);

      this.translateZ = this.options.HWCompositing && hasPerspective ? ' translateZ(0)' : '';

      this.options.useTransition = this.options.useTransition && hasTransition;
      this.options.useTransform = this.options.useTransform && hasTransform;

      this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

      // If you want eventPassthrough I have to lock one of the axes
      this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX;
      this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY;

      // With eventPassthrough we also need lockDirection mechanism
      this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
      this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

      if (this.options.tap === true) {
        this.options.tap = 'tap';
      }
    };

    BScroll.prototype._addDOMEvents = function () {
      var eventOperation = addEvent;
      this._handleDOMEvents(eventOperation);
    };

    BScroll.prototype._removeDOMEvents = function () {
      var eventOperation = removeEvent;
      this._handleDOMEvents(eventOperation);
    };

    BScroll.prototype._handleDOMEvents = function (eventOperation) {
      var target = this.options.bindToWrapper ? this.wrapper : window;
      eventOperation(window, 'orientationchange', this);
      eventOperation(window, 'resize', this);

      if (this.options.click) {
        eventOperation(this.wrapper, 'click', this, true);
      }

      if (!this.options.disableMouse) {
        eventOperation(this.wrapper, 'mousedown', this);
        eventOperation(target, 'mousemove', this);
        eventOperation(target, 'mousecancel', this);
        eventOperation(target, 'mouseup', this);
      }

      if (hasTouch && !this.options.disableTouch) {
        eventOperation(this.wrapper, 'touchstart', this);
        eventOperation(target, 'touchmove', this);
        eventOperation(target, 'touchcancel', this);
        eventOperation(target, 'touchend', this);
      }

      eventOperation(this.scroller, style.transitionEnd, this);
    };

    BScroll.prototype._initExtFeatures = function () {
      if (this.options.snap) {
        this._initSnap();
      }
      if (this.options.scrollbar) {
        this._initScrollbar();
      }
      if (this.options.pullUpLoad) {
        this._initPullUp();
      }
      if (this.options.pullDownRefresh) {
        this._initPullDown();
      }
      if (this.options.wheel) {
        this._initWheel();
      }
      if (this.options.mouseWheel) {
        this._initMouseWheel();
      }
    };

    BScroll.prototype._watchTransition = function () {
      if (typeof Object.defineProperty !== 'function') {
        return;
      }
      var me = this;
      var isInTransition = false;
      Object.defineProperty(this, 'isInTransition', {
        get: function get() {
          return isInTransition;
        },
        set: function set(newVal) {
          isInTransition = newVal;
          // fix issue #359
          var el = me.scroller.children.length ? me.scroller.children : [me.scroller];
          var pointerEvents = isInTransition && !me.pulling ? 'none' : 'auto';
          for (var i = 0; i < el.length; i++) {
            el[i].style.pointerEvents = pointerEvents;
          }
        }
      });
    };

    BScroll.prototype._handleAutoBlur = function () {
      this.on('beforeScrollStart', function () {
        var activeElement = document.activeElement;
        if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
          activeElement.blur();
        }
      });
    };

    BScroll.prototype._initDOMObserver = function () {
      var _this = this;

      if (typeof MutationObserver !== 'undefined') {
        var timer = void 0;
        var observer = new MutationObserver(function (mutations) {
          // don't do any refresh during the transition, or outside of the boundaries
          if (_this._shouldNotRefresh()) {
            return;
          }
          var immediateRefresh = false;
          var deferredRefresh = false;
          for (var i = 0; i < mutations.length; i++) {
            var mutation = mutations[i];
            if (mutation.type !== 'attributes') {
              immediateRefresh = true;
              break;
            } else {
              if (mutation.target !== _this.scroller) {
                deferredRefresh = true;
                break;
              }
            }
          }
          if (immediateRefresh) {
            _this.refresh();
          } else if (deferredRefresh) {
            // attributes changes too often
            clearTimeout(timer);
            timer = setTimeout(function () {
              if (!_this._shouldNotRefresh()) {
                _this.refresh();
              }
            }, 60);
          }
        });
        var config = {
          attributes: true,
          childList: true,
          subtree: true
        };
        observer.observe(this.scroller, config);

        this.on('destroy', function () {
          observer.disconnect();
        });
      } else {
        this._checkDOMUpdate();
      }
    };

    BScroll.prototype._shouldNotRefresh = function () {
      var outsideBoundaries = this.x > 0 || this.x < this.maxScrollX || this.y > 0 || this.y < this.maxScrollY;

      return this.isInTransition || this.stopFromTransition || outsideBoundaries;
    };

    BScroll.prototype._checkDOMUpdate = function () {
      var scrollerRect = getRect(this.scroller);
      var oldWidth = scrollerRect.width;
      var oldHeight = scrollerRect.height;

      function check() {
        if (this.destroyed) {
          return;
        }
        scrollerRect = getRect(this.scroller);
        var newWidth = scrollerRect.width;
        var newHeight = scrollerRect.height;

        if (oldWidth !== newWidth || oldHeight !== newHeight) {
          this.refresh();
        }
        oldWidth = newWidth;
        oldHeight = newHeight;

        next.call(this);
      }

      function next() {
        var _this2 = this;

        setTimeout(function () {
          check.call(_this2);
        }, 1000);
      }

      next.call(this);
    };

    BScroll.prototype.handleEvent = function (e) {
      switch (e.type) {
        case 'touchstart':
        case 'mousedown':
          this._start(e);
          break;
        case 'touchmove':
        case 'mousemove':
          this._move(e);
          break;
        case 'touchend':
        case 'mouseup':
        case 'touchcancel':
        case 'mousecancel':
          this._end(e);
          break;
        case 'orientationchange':
        case 'resize':
          this._resize();
          break;
        case 'transitionend':
        case 'webkitTransitionEnd':
        case 'oTransitionEnd':
        case 'MSTransitionEnd':
          this._transitionEnd(e);
          break;
        case 'click':
          if (this.enabled && !e._constructed) {
            if (!preventDefaultException(e.target, this.options.preventDefaultException)) {
              e.preventDefault();
              e.stopPropagation();
            }
          }
          break;
        case 'wheel':
        case 'DOMMouseScroll':
        case 'mousewheel':
          this._onMouseWheel(e);
          break;
      }
    };

    BScroll.prototype.refresh = function () {
      var wrapperRect = getRect(this.wrapper);
      this.wrapperWidth = wrapperRect.width;
      this.wrapperHeight = wrapperRect.height;

      var scrollerRect = getRect(this.scroller);
      this.scrollerWidth = scrollerRect.width;
      this.scrollerHeight = scrollerRect.height;

      var wheel = this.options.wheel;
      if (wheel) {
        this.items = this.scroller.children;
        this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0;
        if (this.selectedIndex === undefined) {
          this.selectedIndex = wheel.selectedIndex || 0;
        }
        this.options.startY = -this.selectedIndex * this.itemHeight;
        this.maxScrollX = 0;
        this.maxScrollY = -this.itemHeight * (this.items.length - 1);
      } else {
        this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
        this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
      }

      this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
      this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

      if (!this.hasHorizontalScroll) {
        this.maxScrollX = 0;
        this.scrollerWidth = this.wrapperWidth;
      }

      if (!this.hasVerticalScroll) {
        this.maxScrollY = 0;
        this.scrollerHeight = this.wrapperHeight;
      }

      this.endTime = 0;
      this.directionX = 0;
      this.directionY = 0;
      this.wrapperOffset = offset(this.wrapper);

      this.trigger('refresh');

      this.resetPosition();
    };

    BScroll.prototype.enable = function () {
      this.enabled = true;
    };

    BScroll.prototype.disable = function () {
      this.enabled = false;
    };
  }

  var ease = {
  	// easeOutQuint
  	swipe: {
  		style: 'cubic-bezier(0.23, 1, 0.32, 1)',
  		fn: function fn(t) {
  			return 1 + --t * t * t * t * t;
  		}
  	},
  	// easeOutQuard
  	swipeBounce: {
  		style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  		fn: function fn(t) {
  			return t * (2 - t);
  		}
  	},
  	// easeOutQuart
  	bounce: {
  		style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  		fn: function fn(t) {
  			return 1 - --t * t * t * t;
  		}
  	}
  };

  function momentum(current, start, time, lowerMargin, wrapperSize, options) {
    var distance = current - start;
    var speed = Math.abs(distance) / time;

    var deceleration = options.deceleration,
        itemHeight = options.itemHeight,
        swipeBounceTime = options.swipeBounceTime,
        wheel = options.wheel,
        swipeTime = options.swipeTime;

    var duration = swipeTime;
    var rate = wheel ? 4 : 15;

    var destination = current + speed / deceleration * (distance < 0 ? -1 : 1);

    if (wheel && itemHeight) {
      destination = Math.round(destination / itemHeight) * itemHeight;
    }

    if (destination < lowerMargin) {
      destination = wrapperSize ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - wrapperSize / rate * speed) : lowerMargin;
      duration = swipeBounceTime;
    } else if (destination > 0) {
      destination = wrapperSize ? Math.min(wrapperSize / 4, wrapperSize / rate * speed) : 0;
      duration = swipeBounceTime;
    }

    return {
      destination: Math.round(destination),
      duration: duration
    };
  }

  var DEFAULT_INTERVAL = 100 / 60;

  function noop() {}

  var requestAnimationFrame = function () {
    if (!inBrowser) {
      /* istanbul ignore if */
      return noop;
    }
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
    // if all else fails, use setTimeout
    function (callback) {
      return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
    };
  }();

  var cancelAnimationFrame = function () {
    if (!inBrowser) {
      /* istanbul ignore if */
      return noop;
    }
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
      window.clearTimeout(id);
    };
  }();

  var DIRECTION_UP$1 = 1;
  var DIRECTION_DOWN$1 = -1;
  var DIRECTION_LEFT = 1;
  var DIRECTION_RIGHT = -1;

  var PROBE_DEBOUNCE = 1;

  var PROBE_REALTIME = 3;

  function warn(msg) {
    console.error('[BScroll warn]: ' + msg);
  }

  function assert(condition, msg) {
    if (!condition) {
      throw new Error('[BScroll] ' + msg);
    }
  }

  function coreMixin(BScroll) {
    BScroll.prototype._start = function (e) {
      var _eventType = eventType[e.type];
      if (_eventType !== TOUCH_EVENT) {
        if (e.button !== 0) {
          return;
        }
      }
      if (!this.enabled || this.destroyed || this.initiated && this.initiated !== _eventType) {
        return;
      }
      this.initiated = _eventType;

      if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
        e.preventDefault();
      }
      if (this.options.stopPropagation) {
        e.stopPropagation();
      }

      this.moved = false;
      this.distX = 0;
      this.distY = 0;
      this.directionX = 0;
      this.directionY = 0;
      this.movingDirectionX = 0;
      this.movingDirectionY = 0;
      this.directionLocked = 0;

      this._transitionTime();
      this.startTime = getNow();

      if (this.options.wheel) {
        this.target = e.target;
      }

      this.stop();

      var point = e.touches ? e.touches[0] : e;

      this.startX = this.x;
      this.startY = this.y;
      this.absStartX = this.x;
      this.absStartY = this.y;
      this.pointX = point.pageX;
      this.pointY = point.pageY;

      this.trigger('beforeScrollStart');
    };

    BScroll.prototype._move = function (e) {
      if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
        return;
      }

      if (this.options.preventDefault) {
        e.preventDefault();
      }
      if (this.options.stopPropagation) {
        e.stopPropagation();
      }

      var point = e.touches ? e.touches[0] : e;
      var deltaX = point.pageX - this.pointX;
      var deltaY = point.pageY - this.pointY;

      this.pointX = point.pageX;
      this.pointY = point.pageY;

      this.distX += deltaX;
      this.distY += deltaY;

      var absDistX = Math.abs(this.distX);
      var absDistY = Math.abs(this.distY);

      var timestamp = getNow();

      // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
      if (timestamp - this.endTime > this.options.momentumLimitTime && absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance) {
        return;
      }

      // If you are scrolling in one direction lock the other
      if (!this.directionLocked && !this.options.freeScroll) {
        if (absDistX > absDistY + this.options.directionLockThreshold) {
          this.directionLocked = 'h'; // lock horizontally
        } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
          this.directionLocked = 'v'; // lock vertically
        } else {
          this.directionLocked = 'n'; // no lock
        }
      }

      if (this.directionLocked === 'h') {
        if (this.options.eventPassthrough === 'vertical') {
          e.preventDefault();
        } else if (this.options.eventPassthrough === 'horizontal') {
          this.initiated = false;
          return;
        }
        deltaY = 0;
      } else if (this.directionLocked === 'v') {
        if (this.options.eventPassthrough === 'horizontal') {
          e.preventDefault();
        } else if (this.options.eventPassthrough === 'vertical') {
          this.initiated = false;
          return;
        }
        deltaX = 0;
      }

      deltaX = this.hasHorizontalScroll ? deltaX : 0;
      deltaY = this.hasVerticalScroll ? deltaY : 0;
      this.movingDirectionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
      this.movingDirectionY = deltaY > 0 ? DIRECTION_DOWN$1 : deltaY < 0 ? DIRECTION_UP$1 : 0;

      var newX = this.x + deltaX;
      var newY = this.y + deltaY;

      // Slow down or stop if outside of the boundaries
      if (newX > 0 || newX < this.maxScrollX) {
        if (this.options.bounce) {
          newX = this.x + deltaX / 3;
        } else {
          newX = newX > 0 ? 0 : this.maxScrollX;
        }
      }
      if (newY > 0 || newY < this.maxScrollY) {
        if (this.options.bounce) {
          newY = this.y + deltaY / 3;
        } else {
          newY = newY > 0 ? 0 : this.maxScrollY;
        }
      }

      if (!this.moved) {
        this.moved = true;
        this.trigger('scrollStart');
      }

      this._translate(newX, newY);

      if (timestamp - this.startTime > this.options.momentumLimitTime) {
        this.startTime = timestamp;
        this.startX = this.x;
        this.startY = this.y;

        if (this.options.probeType === PROBE_DEBOUNCE) {
          this.trigger('scroll', {
            x: this.x,
            y: this.y
          });
        }
      }

      if (this.options.probeType > PROBE_DEBOUNCE) {
        this.trigger('scroll', {
          x: this.x,
          y: this.y
        });
      }

      var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

      var pX = this.pointX - scrollLeft;
      var pY = this.pointY - scrollTop;

      if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance) {
        this._end(e);
      }
    };

    BScroll.prototype._end = function (e) {
      if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
        return;
      }
      this.initiated = false;

      if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
        e.preventDefault();
      }
      if (this.options.stopPropagation) {
        e.stopPropagation();
      }

      this.trigger('touchEnd', {
        x: this.x,
        y: this.y
      });

      this.isInTransition = false;

      // ensures that the last position is rounded
      var newX = Math.round(this.x);
      var newY = Math.round(this.y);

      var deltaX = newX - this.absStartX;
      var deltaY = newY - this.absStartY;
      this.directionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
      this.directionY = deltaY > 0 ? DIRECTION_DOWN$1 : deltaY < 0 ? DIRECTION_UP$1 : 0;

      // if configure pull down refresh, check it first
      if (this.options.pullDownRefresh && this._checkPullDown()) {
        return;
      }

      // check if it is a click operation
      if (this._checkClick(e)) {
        this.trigger('scrollCancel');
        return;
      }

      // reset if we are outside of the boundaries
      if (this.resetPosition(this.options.bounceTime, ease.bounce)) {
        return;
      }

      this.scrollTo(newX, newY);

      this.endTime = getNow();
      var duration = this.endTime - this.startTime;
      var absDistX = Math.abs(newX - this.startX);
      var absDistY = Math.abs(newY - this.startY);

      // flick
      if (this._events.flick && duration < this.options.flickLimitTime && absDistX < this.options.flickLimitDistance && absDistY < this.options.flickLimitDistance) {
        this.trigger('flick');
        return;
      }

      var time = 0;
      // start momentum animation if needed
      if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
        var momentumX = this.hasHorizontalScroll ? momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options) : { destination: newX, duration: 0 };
        var momentumY = this.hasVerticalScroll ? momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options) : { destination: newY, duration: 0 };
        newX = momentumX.destination;
        newY = momentumY.destination;
        time = Math.max(momentumX.duration, momentumY.duration);
        this.isInTransition = true;
      } else {
        if (this.options.wheel) {
          newY = Math.round(newY / this.itemHeight) * this.itemHeight;
          time = this.options.wheel.adjustTime || 400;
        }
      }

      var easing = ease.swipe;
      if (this.options.snap) {
        var snap = this._nearestSnap(newX, newY);
        this.currentPage = snap;
        time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
        newX = snap.x;
        newY = snap.y;

        this.directionX = 0;
        this.directionY = 0;
        easing = this.options.snap.easing || ease.bounce;
      }

      if (newX !== this.x || newY !== this.y) {
        // change easing function when scroller goes out of the boundaries
        if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
          easing = ease.swipeBounce;
        }
        this.scrollTo(newX, newY, time, easing);
        return;
      }

      if (this.options.wheel) {
        this.selectedIndex = Math.round(Math.abs(this.y / this.itemHeight));
      }
      this.trigger('scrollEnd', {
        x: this.x,
        y: this.y
      });
    };

    BScroll.prototype._checkClick = function (e) {
      // when in the process of pulling down, it should not prevent click
      var preventClick = this.stopFromTransition && !this.pulling;
      this.stopFromTransition = false;

      // we scrolled less than 15 pixels
      if (!this.moved) {
        if (this.options.wheel) {
          if (this.target && this.target.className === this.options.wheel.wheelWrapperClass) {
            var index = Math.abs(Math.round(this.y / this.itemHeight));
            var _offset = Math.round((this.pointY + offset(this.target).top - this.itemHeight / 2) / this.itemHeight);
            this.target = this.items[index + _offset];
          }
          this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, true, true, ease.swipe);
          return true;
        } else {
          if (!preventClick) {
            if (this.options.tap) {
              tap(e, this.options.tap);
            }

            if (this.options.click && !preventDefaultException(e.target, this.options.preventDefaultException)) {
              click(e);
            }
            return true;
          }
          return false;
        }
      }
      return false;
    };

    BScroll.prototype._resize = function () {
      var _this = this;

      if (!this.enabled) {
        return;
      }
      // fix a scroll problem under Android condition
      if (isAndroid) {
        this.wrapper.scrollTop = 0;
      }
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(function () {
        _this.refresh();
      }, this.options.resizePolling);
    };

    BScroll.prototype._startProbe = function () {
      cancelAnimationFrame(this.probeTimer);
      this.probeTimer = requestAnimationFrame(probe);

      var me = this;

      function probe() {
        var pos = me.getComputedPosition();
        me.trigger('scroll', pos);
        if (!me.isInTransition) {
          me.trigger('scrollEnd', pos);
          return;
        }
        me.probeTimer = requestAnimationFrame(probe);
      }
    };

    BScroll.prototype._transitionProperty = function () {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

      this.scrollerStyle[style.transitionProperty] = property;
    };

    BScroll.prototype._transitionTime = function () {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.scrollerStyle[style.transitionDuration] = time + 'ms';

      if (this.options.wheel) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].style[style.transitionDuration] = time + 'ms';
        }
      }

      if (this.indicators) {
        for (var _i = 0; _i < this.indicators.length; _i++) {
          this.indicators[_i].transitionTime(time);
        }
      }
    };

    BScroll.prototype._transitionTimingFunction = function (easing) {
      this.scrollerStyle[style.transitionTimingFunction] = easing;

      if (this.options.wheel) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].style[style.transitionTimingFunction] = easing;
        }
      }

      if (this.indicators) {
        for (var _i2 = 0; _i2 < this.indicators.length; _i2++) {
          this.indicators[_i2].transitionTimingFunction(easing);
        }
      }
    };

    BScroll.prototype._transitionEnd = function (e) {
      if (e.target !== this.scroller || !this.isInTransition) {
        return;
      }

      this._transitionTime();
      if (!this.pulling && !this.resetPosition(this.options.bounceTime, ease.bounce)) {
        this.isInTransition = false;
        if (this.options.probeType !== PROBE_REALTIME) {
          this.trigger('scrollEnd', {
            x: this.x,
            y: this.y
          });
        }
      }
    };

    BScroll.prototype._translate = function (x, y) {
      assert(!isUndef(x) && !isUndef(y), 'Oops! translate x or y is null or undefined. please check your code.');
      if (this.options.useTransform) {
        this.scrollerStyle[style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
      } else {
        x = Math.round(x);
        y = Math.round(y);
        this.scrollerStyle.left = x + 'px';
        this.scrollerStyle.top = y + 'px';
      }

      if (this.options.wheel) {
        var _options$wheel$rotate = this.options.wheel.rotate,
            rotate = _options$wheel$rotate === undefined ? 25 : _options$wheel$rotate;

        for (var i = 0; i < this.items.length; i++) {
          var deg = rotate * (y / this.itemHeight + i);
          this.items[i].style[style.transform] = 'rotateX(' + deg + 'deg)';
        }
      }

      this.x = x;
      this.y = y;

      if (this.indicators) {
        for (var _i3 = 0; _i3 < this.indicators.length; _i3++) {
          this.indicators[_i3].updatePosition();
        }
      }
    };

    BScroll.prototype._animate = function (destX, destY, duration, easingFn) {
      var me = this;
      var startX = this.x;
      var startY = this.y;
      var startTime = getNow();
      var destTime = startTime + duration;

      function step() {
        var now = getNow();

        if (now >= destTime) {
          me.isAnimating = false;
          me._translate(destX, destY);

          if (!me.pulling && !me.resetPosition(me.options.bounceTime)) {
            me.trigger('scrollEnd', {
              x: me.x,
              y: me.y
            });
          }
          return;
        }
        now = (now - startTime) / duration;
        var easing = easingFn(now);
        var newX = (destX - startX) * easing + startX;
        var newY = (destY - startY) * easing + startY;

        me._translate(newX, newY);

        if (me.isAnimating) {
          me.animateTimer = requestAnimationFrame(step);
        }

        if (me.options.probeType === PROBE_REALTIME) {
          me.trigger('scroll', {
            x: me.x,
            y: me.y
          });
        }
      }

      this.isAnimating = true;
      cancelAnimationFrame(this.animateTimer);
      step();
    };

    BScroll.prototype.scrollBy = function (x, y) {
      var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

      x = this.x + x;
      y = this.y + y;

      this.scrollTo(x, y, time, easing);
    };

    BScroll.prototype.scrollTo = function (x, y) {
      var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

      this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y);

      if (!time || this.options.useTransition) {
        this._transitionProperty();
        this._transitionTimingFunction(easing.style);
        this._transitionTime(time);
        this._translate(x, y);

        if (time && this.options.probeType === PROBE_REALTIME) {
          this._startProbe();
        }

        if (this.options.wheel) {
          if (y > 0) {
            this.selectedIndex = 0;
          } else if (y < this.maxScrollY) {
            this.selectedIndex = this.items.length - 1;
          } else {
            this.selectedIndex = Math.round(Math.abs(y / this.itemHeight));
          }
        }
      } else {
        this._animate(x, y, time, easing.fn);
      }
    };

    BScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
      if (!el) {
        return;
      }
      el = el.nodeType ? el : this.scroller.querySelector(el);

      if (this.options.wheel && el.className !== this.options.wheel.wheelItemClass) {
        return;
      }

      var pos = offset(el);
      pos.left -= this.wrapperOffset.left;
      pos.top -= this.wrapperOffset.top;

      // if offsetX/Y are true we center the element to the screen
      if (offsetX === true) {
        offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
      }
      if (offsetY === true) {
        offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
      }

      pos.left -= offsetX || 0;
      pos.top -= offsetY || 0;
      pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
      pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

      if (this.options.wheel) {
        pos.top = Math.round(pos.top / this.itemHeight) * this.itemHeight;
      }

      this.scrollTo(pos.left, pos.top, time, easing);
    };

    BScroll.prototype.resetPosition = function () {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var easeing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ease.bounce;

      var x = this.x;
      var roundX = Math.round(x);
      if (!this.hasHorizontalScroll || roundX > 0) {
        x = 0;
      } else if (roundX < this.maxScrollX) {
        x = this.maxScrollX;
      }

      var y = this.y;
      var roundY = Math.round(y);
      if (!this.hasVerticalScroll || roundY > 0) {
        y = 0;
      } else if (roundY < this.maxScrollY) {
        y = this.maxScrollY;
      }

      if (x === this.x && y === this.y) {
        return false;
      }

      this.scrollTo(x, y, time, easeing);

      return true;
    };

    BScroll.prototype.getComputedPosition = function () {
      var matrix = window.getComputedStyle(this.scroller, null);
      var x = void 0;
      var y = void 0;

      if (this.options.useTransform) {
        matrix = matrix[style.transform].split(')')[0].split(', ');
        x = +(matrix[12] || matrix[4]);
        y = +(matrix[13] || matrix[5]);
      } else {
        x = +matrix.left.replace(/[^-\d.]/g, '');
        y = +matrix.top.replace(/[^-\d.]/g, '');
      }

      return {
        x: x,
        y: y
      };
    };

    BScroll.prototype.stop = function () {
      if (this.options.useTransition && this.isInTransition) {
        this.isInTransition = false;
        var pos = this.getComputedPosition();
        this._translate(pos.x, pos.y);
        if (this.options.wheel) {
          this.target = this.items[Math.round(-pos.y / this.itemHeight)];
        } else {
          this.trigger('scrollEnd', {
            x: this.x,
            y: this.y
          });
        }
        this.stopFromTransition = true;
      } else if (!this.options.useTransition && this.isAnimating) {
        this.isAnimating = false;
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
        this.stopFromTransition = true;
      }
    };

    BScroll.prototype.destroy = function () {
      this.destroyed = true;
      this.trigger('destroy');

      this._removeDOMEvents();
      // remove custom events
      this._events = {};
    };
  }

  function snapMixin(BScroll) {
    BScroll.prototype._initSnap = function () {
      var _this = this;

      this.currentPage = {};
      var snap = this.options.snap;

      if (snap.loop) {
        var children = this.scroller.children;
        if (children.length > 1) {
          prepend(children[children.length - 1].cloneNode(true), this.scroller);
          this.scroller.appendChild(children[1].cloneNode(true));
        } else {
          // Loop does not make any sense if there is only one child.
          snap.loop = false;
        }
      }

      var el = snap.el;
      if (typeof el === 'string') {
        el = this.scroller.querySelectorAll(el);
      }

      this.on('refresh', function () {
        _this.pages = [];

        if (!_this.wrapperWidth || !_this.wrapperHeight || !_this.scrollerWidth || !_this.scrollerHeight) {
          return;
        }

        var stepX = snap.stepX || _this.wrapperWidth;
        var stepY = snap.stepY || _this.wrapperHeight;

        var x = 0;
        var y = void 0;
        var cx = void 0;
        var cy = void 0;
        var i = 0;
        var l = void 0;
        var m = 0;
        var n = void 0;
        var rect = void 0;
        if (!el) {
          cx = Math.round(stepX / 2);
          cy = Math.round(stepY / 2);

          while (x > -_this.scrollerWidth) {
            _this.pages[i] = [];
            l = 0;
            y = 0;

            while (y > -_this.scrollerHeight) {
              _this.pages[i][l] = {
                x: Math.max(x, _this.maxScrollX),
                y: Math.max(y, _this.maxScrollY),
                width: stepX,
                height: stepY,
                cx: x - cx,
                cy: y - cy
              };

              y -= stepY;
              l++;
            }

            x -= stepX;
            i++;
          }
        } else {
          l = el.length;
          n = -1;

          for (; i < l; i++) {
            rect = getRect(el[i]);
            if (i === 0 || rect.left <= getRect(el[i - 1]).left) {
              m = 0;
              n++;
            }

            if (!_this.pages[m]) {
              _this.pages[m] = [];
            }

            x = Math.max(-rect.left, _this.maxScrollX);
            y = Math.max(-rect.top, _this.maxScrollY);
            cx = x - Math.round(rect.width / 2);
            cy = y - Math.round(rect.height / 2);

            _this.pages[m][n] = {
              x: x,
              y: y,
              width: rect.width,
              height: rect.height,
              cx: cx,
              cy: cy
            };

            if (x > _this.maxScrollX) {
              m++;
            }
          }
        }

        _this._checkSnapLoop();

        var initPageX = snap._loopX ? 1 : 0;
        var initPageY = snap._loopY ? 1 : 0;
        _this._goToPage(_this.currentPage.pageX || initPageX, _this.currentPage.pageY || initPageY, 0);

        // Update snap threshold if needed.
        var snapThreshold = snap.threshold;
        if (snapThreshold % 1 === 0) {
          _this.snapThresholdX = snapThreshold;
          _this.snapThresholdY = snapThreshold;
        } else {
          _this.snapThresholdX = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].width * snapThreshold);
          _this.snapThresholdY = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].height * snapThreshold);
        }
      });

      this.on('scrollEnd', function () {
        if (snap.loop) {
          if (snap._loopX) {
            if (_this.currentPage.pageX === 0) {
              _this._goToPage(_this.pages.length - 2, _this.currentPage.pageY, 0);
            }
            if (_this.currentPage.pageX === _this.pages.length - 1) {
              _this._goToPage(1, _this.currentPage.pageY, 0);
            }
          } else {
            if (_this.currentPage.pageY === 0) {
              _this._goToPage(_this.currentPage.pageX, _this.pages[0].length - 2, 0);
            }
            if (_this.currentPage.pageY === _this.pages[0].length - 1) {
              _this._goToPage(_this.currentPage.pageX, 1, 0);
            }
          }
        }
      });

      if (snap.listenFlick !== false) {
        this.on('flick', function () {
          var time = snap.speed || Math.max(Math.max(Math.min(Math.abs(_this.x - _this.startX), 1000), Math.min(Math.abs(_this.y - _this.startY), 1000)), 300);

          _this._goToPage(_this.currentPage.pageX + _this.directionX, _this.currentPage.pageY + _this.directionY, time);
        });
      }

      this.on('destroy', function () {
        if (snap.loop) {
          var _children = _this.scroller.children;
          if (_children.length > 2) {
            removeChild(_this.scroller, _children[_children.length - 1]);
            removeChild(_this.scroller, _children[0]);
          }
        }
      });
    };

    BScroll.prototype._checkSnapLoop = function () {
      var snap = this.options.snap;

      if (!snap.loop || !this.pages) {
        return;
      }

      if (this.pages.length > 1) {
        snap._loopX = true;
      }
      if (this.pages[0] && this.pages[0].length > 1) {
        snap._loopY = true;
      }
      if (snap._loopX && snap._loopY) {
        warn('Loop does not support two direction at the same time.');
      }
    };

    BScroll.prototype._nearestSnap = function (x, y) {
      if (!this.pages.length) {
        return { x: 0, y: 0, pageX: 0, pageY: 0 };
      }

      var i = 0;
      // Check if we exceeded the snap threshold
      if (Math.abs(x - this.absStartX) <= this.snapThresholdX && Math.abs(y - this.absStartY) <= this.snapThresholdY) {
        return this.currentPage;
      }

      if (x > 0) {
        x = 0;
      } else if (x < this.maxScrollX) {
        x = this.maxScrollX;
      }

      if (y > 0) {
        y = 0;
      } else if (y < this.maxScrollY) {
        y = this.maxScrollY;
      }

      var l = this.pages.length;
      for (; i < l; i++) {
        if (x >= this.pages[i][0].cx) {
          x = this.pages[i][0].x;
          break;
        }
      }

      l = this.pages[i].length;

      var m = 0;
      for (; m < l; m++) {
        if (y >= this.pages[0][m].cy) {
          y = this.pages[0][m].y;
          break;
        }
      }

      if (i === this.currentPage.pageX) {
        i += this.directionX;

        if (i < 0) {
          i = 0;
        } else if (i >= this.pages.length) {
          i = this.pages.length - 1;
        }

        x = this.pages[i][0].x;
      }

      if (m === this.currentPage.pageY) {
        m += this.directionY;

        if (m < 0) {
          m = 0;
        } else if (m >= this.pages[0].length) {
          m = this.pages[0].length - 1;
        }

        y = this.pages[0][m].y;
      }

      return {
        x: x,
        y: y,
        pageX: i,
        pageY: m
      };
    };

    BScroll.prototype._goToPage = function (x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var time = arguments[2];
      var easing = arguments[3];

      var snap = this.options.snap;

      if (!snap || !this.pages) {
        return;
      }

      easing = easing || snap.easing || ease.bounce;

      if (x >= this.pages.length) {
        x = this.pages.length - 1;
      } else if (x < 0) {
        x = 0;
      }

      if (!this.pages[x]) {
        return;
      }

      if (y >= this.pages[x].length) {
        y = this.pages[x].length - 1;
      } else if (y < 0) {
        y = 0;
      }

      var posX = this.pages[x][y].x;
      var posY = this.pages[x][y].y;

      time = time === undefined ? snap.speed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

      this.currentPage = {
        x: posX,
        y: posY,
        pageX: x,
        pageY: y
      };
      this.scrollTo(posX, posY, time, easing);
    };

    BScroll.prototype.goToPage = function (x, y, time, easing) {
      var snap = this.options.snap;
      if (!snap) {
        return;
      }

      if (snap.loop) {
        var len = void 0;
        if (snap._loopX) {
          len = this.pages.length - 2;
          if (x >= len) {
            x = len - 1;
          } else if (x < 0) {
            x = 0;
          }
          x += 1;
        } else {
          len = this.pages[0].length - 2;
          if (y >= len) {
            y = len - 1;
          } else if (y < 0) {
            y = 0;
          }
          y += 1;
        }
      }
      this._goToPage(x, y, time, easing);
    };

    BScroll.prototype.next = function (time, easing) {
      var snap = this.options.snap;
      if (!snap) {
        return;
      }

      var x = this.currentPage.pageX;
      var y = this.currentPage.pageY;

      x++;
      if (x >= this.pages.length && this.hasVerticalScroll) {
        x = 0;
        y++;
      }

      this._goToPage(x, y, time, easing);
    };

    BScroll.prototype.prev = function (time, easing) {
      var snap = this.options.snap;
      if (!snap) {
        return;
      }

      var x = this.currentPage.pageX;
      var y = this.currentPage.pageY;

      x--;
      if (x < 0 && this.hasVerticalScroll) {
        x = 0;
        y--;
      }

      this._goToPage(x, y, time, easing);
    };

    BScroll.prototype.getCurrentPage = function () {
      var snap = this.options.snap;
      if (!snap) {
        return null;
      }

      if (snap.loop) {
        var currentPage = void 0;
        if (snap._loopX) {
          currentPage = extend({}, this.currentPage, {
            pageX: this.currentPage.pageX - 1
          });
        } else {
          currentPage = extend({}, this.currentPage, {
            pageY: this.currentPage.pageY - 1
          });
        }
        return currentPage;
      }
      return this.currentPage;
    };
  }

  function wheelMixin(BScroll) {
    BScroll.prototype.wheelTo = function () {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.options.wheel) {
        this.y = -index * this.itemHeight;
        this.scrollTo(0, this.y);
      }
    };

    BScroll.prototype.getSelectedIndex = function () {
      return this.options.wheel && this.selectedIndex;
    };

    BScroll.prototype._initWheel = function () {
      var wheel = this.options.wheel;
      if (!wheel.wheelWrapperClass) {
        wheel.wheelWrapperClass = 'wheel-scroll';
      }
      if (!wheel.wheelItemClass) {
        wheel.wheelItemClass = 'wheel-item';
      }
      if (wheel.selectedIndex === undefined) {
        wheel.selectedIndex = 0;
        warn('wheel option selectedIndex is required!');
      }
    };
  }

  var INDICATOR_MIN_LEN = 8;

  function scrollbarMixin(BScroll) {
    BScroll.prototype._initScrollbar = function () {
      var _this = this;

      var _options$scrollbar = this.options.scrollbar,
          _options$scrollbar$fa = _options$scrollbar.fade,
          fade = _options$scrollbar$fa === undefined ? true : _options$scrollbar$fa,
          _options$scrollbar$in = _options$scrollbar.interactive,
          interactive = _options$scrollbar$in === undefined ? false : _options$scrollbar$in;

      this.indicators = [];
      var indicator = void 0;

      if (this.options.scrollX) {
        indicator = {
          el: createScrollbar('horizontal'),
          direction: 'horizontal',
          fade: fade,
          interactive: interactive
        };
        this._insertScrollBar(indicator.el);

        this.indicators.push(new Indicator(this, indicator));
      }

      if (this.options.scrollY) {
        indicator = {
          el: createScrollbar('vertical'),
          direction: 'vertical',
          fade: fade,
          interactive: interactive
        };
        this._insertScrollBar(indicator.el);
        this.indicators.push(new Indicator(this, indicator));
      }

      this.on('refresh', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].refresh();
        }
      });

      if (fade) {
        this.on('scrollEnd', function () {
          for (var i = 0; i < _this.indicators.length; i++) {
            _this.indicators[i].fade();
          }
        });

        this.on('scrollCancel', function () {
          for (var i = 0; i < _this.indicators.length; i++) {
            _this.indicators[i].fade();
          }
        });

        this.on('scrollStart', function () {
          for (var i = 0; i < _this.indicators.length; i++) {
            _this.indicators[i].fade(true);
          }
        });

        this.on('beforeScrollStart', function () {
          for (var i = 0; i < _this.indicators.length; i++) {
            _this.indicators[i].fade(true, true);
          }
        });
      }

      this.on('destroy', function () {
        _this._removeScrollBars();
      });
    };

    BScroll.prototype._insertScrollBar = function (scrollbar) {
      this.wrapper.appendChild(scrollbar);
    };

    BScroll.prototype._removeScrollBars = function () {
      for (var i = 0; i < this.indicators.length; i++) {
        this.indicators[i].destroy();
      }
    };
  }

  function createScrollbar(direction) {
    var scrollbar = document.createElement('div');
    var indicator = document.createElement('div');

    scrollbar.style.cssText = 'position:absolute;z-index:9999;pointerEvents:none';
    indicator.style.cssText = 'box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;';

    indicator.className = 'bscroll-indicator';

    if (direction === 'horizontal') {
      scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
      indicator.style.height = '100%';
      scrollbar.className = 'bscroll-horizontal-scrollbar';
    } else {
      scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
      indicator.style.width = '100%';
      scrollbar.className = 'bscroll-vertical-scrollbar';
    }

    scrollbar.style.cssText += ';overflow:hidden';
    scrollbar.appendChild(indicator);

    return scrollbar;
  }

  function Indicator(scroller, options) {
    this.wrapper = options.el;
    this.wrapperStyle = this.wrapper.style;
    this.indicator = this.wrapper.children[0];
    this.indicatorStyle = this.indicator.style;
    this.scroller = scroller;
    this.direction = options.direction;
    if (options.fade) {
      this.visible = 0;
      this.wrapperStyle.opacity = '0';
    } else {
      this.visible = 1;
    }

    this.sizeRatioX = 1;
    this.sizeRatioY = 1;
    this.maxPosX = 0;
    this.maxPosY = 0;
    this.x = 0;
    this.y = 0;

    if (options.interactive) {
      this._addDOMEvents();
    }
  }

  Indicator.prototype.handleEvent = function (e) {
    switch (e.type) {
      case 'touchstart':
      case 'mousedown':
        this._start(e);
        break;
      case 'touchmove':
      case 'mousemove':
        this._move(e);
        break;
      case 'touchend':
      case 'mouseup':
      case 'touchcancel':
      case 'mousecancel':
        this._end(e);
        break;
    }
  };

  Indicator.prototype.refresh = function () {
    this.transitionTime();
    this._calculate();
    this.updatePosition();
  };

  Indicator.prototype.fade = function (visible, hold) {
    var _this2 = this;

    if (hold && !this.visible) {
      return;
    }

    var time = visible ? 250 : 500;

    visible = visible ? '1' : '0';

    this.wrapperStyle[style.transitionDuration] = time + 'ms';

    clearTimeout(this.fadeTimeout);
    this.fadeTimeout = setTimeout(function () {
      _this2.wrapperStyle.opacity = visible;
      _this2.visible = +visible;
    }, 0);
  };

  Indicator.prototype.updatePosition = function () {
    if (this.direction === 'vertical') {
      var y = Math.round(this.sizeRatioY * this.scroller.y);

      if (y < 0) {
        this.transitionTime(500);
        var height = Math.max(this.indicatorHeight + y * 3, INDICATOR_MIN_LEN);
        this.indicatorStyle.height = height + 'px';
        y = 0;
      } else if (y > this.maxPosY) {
        this.transitionTime(500);
        var _height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, INDICATOR_MIN_LEN);
        this.indicatorStyle.height = _height + 'px';
        y = this.maxPosY + this.indicatorHeight - _height;
      } else {
        this.indicatorStyle.height = this.indicatorHeight + 'px';
      }
      this.y = y;

      if (this.scroller.options.useTransform) {
        this.indicatorStyle[style.transform] = 'translateY(' + y + 'px)' + this.scroller.translateZ;
      } else {
        this.indicatorStyle.top = y + 'px';
      }
    } else {
      var x = Math.round(this.sizeRatioX * this.scroller.x);

      if (x < 0) {
        this.transitionTime(500);
        var width = Math.max(this.indicatorWidth + x * 3, INDICATOR_MIN_LEN);
        this.indicatorStyle.width = width + 'px';
        x = 0;
      } else if (x > this.maxPosX) {
        this.transitionTime(500);
        var _width = Math.max(this.indicatorWidth - (x - this.maxPosX) * 3, INDICATOR_MIN_LEN);
        this.indicatorStyle.width = _width + 'px';
        x = this.maxPosX + this.indicatorWidth - _width;
      } else {
        this.indicatorStyle.width = this.indicatorWidth + 'px';
      }

      this.x = x;

      if (this.scroller.options.useTransform) {
        this.indicatorStyle[style.transform] = 'translateX(' + x + 'px)' + this.scroller.translateZ;
      } else {
        this.indicatorStyle.left = x + 'px';
      }
    }
  };

  Indicator.prototype.transitionTime = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    this.indicatorStyle[style.transitionDuration] = time + 'ms';
  };

  Indicator.prototype.transitionTimingFunction = function (easing) {
    this.indicatorStyle[style.transitionTimingFunction] = easing;
  };

  Indicator.prototype.destroy = function () {
    this._removeDOMEvents();
    this.wrapper.parentNode.removeChild(this.wrapper);
  };

  Indicator.prototype._start = function (e) {
    var point = e.touches ? e.touches[0] : e;

    e.preventDefault();
    e.stopPropagation();

    this.transitionTime();

    this.initiated = true;
    this.moved = false;
    this.lastPointX = point.pageX;
    this.lastPointY = point.pageY;

    this.startTime = getNow();

    this._handleMoveEvents(addEvent);
    this.scroller.trigger('beforeScrollStart');
  };

  Indicator.prototype._move = function (e) {
    var point = e.touches ? e.touches[0] : e;

    e.preventDefault();
    e.stopPropagation();

    if (!this.moved) {
      this.scroller.trigger('scrollStart');
    }

    this.moved = true;

    var deltaX = point.pageX - this.lastPointX;
    this.lastPointX = point.pageX;

    var deltaY = point.pageY - this.lastPointY;
    this.lastPointY = point.pageY;

    var newX = this.x + deltaX;
    var newY = this.y + deltaY;

    this._pos(newX, newY);
  };

  Indicator.prototype._end = function (e) {
    if (!this.initiated) {
      return;
    }
    this.initiated = false;

    e.preventDefault();
    e.stopPropagation();

    this._handleMoveEvents(removeEvent);

    var snapOption = this.scroller.options.snap;
    if (snapOption) {
      var speed = snapOption.speed,
          _snapOption$easing = snapOption.easing,
          easing = _snapOption$easing === undefined ? ease.bounce : _snapOption$easing;

      var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

      var time = speed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

      if (this.scroller.x !== snap.x || this.scroller.y !== snap.y) {
        this.scroller.directionX = 0;
        this.scroller.directionY = 0;
        this.scroller.currentPage = snap;
        this.scroller.scrollTo(snap.x, snap.y, time, easing);
      }
    }

    if (this.moved) {
      this.scroller.trigger('scrollEnd', {
        x: this.scroller.x,
        y: this.scroller.y
      });
    }
  };

  Indicator.prototype._pos = function (x, y) {
    if (x < 0) {
      x = 0;
    } else if (x > this.maxPosX) {
      x = this.maxPosX;
    }

    if (y < 0) {
      y = 0;
    } else if (y > this.maxPosY) {
      y = this.maxPosY;
    }

    x = Math.round(x / this.sizeRatioX);
    y = Math.round(y / this.sizeRatioY);

    this.scroller.scrollTo(x, y);
    this.scroller.trigger('scroll', {
      x: this.scroller.x,
      y: this.scroller.y
    });
  };

  Indicator.prototype._calculate = function () {
    if (this.direction === 'vertical') {
      var wrapperHeight = this.wrapper.clientHeight;
      this.indicatorHeight = Math.max(Math.round(wrapperHeight * wrapperHeight / (this.scroller.scrollerHeight || wrapperHeight || 1)), INDICATOR_MIN_LEN);
      this.indicatorStyle.height = this.indicatorHeight + 'px';

      this.maxPosY = wrapperHeight - this.indicatorHeight;

      this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
    } else {
      var wrapperWidth = this.wrapper.clientWidth;
      this.indicatorWidth = Math.max(Math.round(wrapperWidth * wrapperWidth / (this.scroller.scrollerWidth || wrapperWidth || 1)), INDICATOR_MIN_LEN);
      this.indicatorStyle.width = this.indicatorWidth + 'px';

      this.maxPosX = wrapperWidth - this.indicatorWidth;

      this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
    }
  };

  Indicator.prototype._addDOMEvents = function () {
    var eventOperation = addEvent;
    this._handleDOMEvents(eventOperation);
  };

  Indicator.prototype._removeDOMEvents = function () {
    var eventOperation = removeEvent;
    this._handleDOMEvents(eventOperation);
    this._handleMoveEvents(eventOperation);
  };

  Indicator.prototype._handleMoveEvents = function (eventOperation) {
    if (!this.scroller.options.disableTouch) {
      eventOperation(window, 'touchmove', this);
    }
    if (!this.scroller.options.disableMouse) {
      eventOperation(window, 'mousemove', this);
    }
  };

  Indicator.prototype._handleDOMEvents = function (eventOperation) {
    if (!this.scroller.options.disableTouch) {
      eventOperation(this.indicator, 'touchstart', this);
      eventOperation(window, 'touchend', this);
    }
    if (!this.scroller.options.disableMouse) {
      eventOperation(this.indicator, 'mousedown', this);
      eventOperation(window, 'mouseup', this);
    }
  };

  function pullDownMixin(BScroll) {
    BScroll.prototype._initPullDown = function () {
      // must watch scroll in real time
      this.options.probeType = PROBE_REALTIME;
    };

    BScroll.prototype._checkPullDown = function () {
      var _options$pullDownRefr = this.options.pullDownRefresh,
          _options$pullDownRefr2 = _options$pullDownRefr.threshold,
          threshold = _options$pullDownRefr2 === undefined ? 90 : _options$pullDownRefr2,
          _options$pullDownRefr3 = _options$pullDownRefr.stop,
          stop = _options$pullDownRefr3 === undefined ? 40 : _options$pullDownRefr3;

      // check if a real pull down action

      if (this.directionY !== DIRECTION_DOWN$1 || this.y < threshold) {
        return false;
      }

      if (!this.pulling) {
        this.pulling = true;
        this.trigger('pullingDown');
      }
      this.scrollTo(this.x, stop, this.options.bounceTime, ease.bounce);

      return this.pulling;
    };

    BScroll.prototype.finishPullDown = function () {
      this.pulling = false;
      this.resetPosition(this.options.bounceTime, ease.bounce);
    };

    BScroll.prototype.openPullDown = function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.options.pullDownRefresh = config;
      this._initPullDown();
    };

    BScroll.prototype.closePullDown = function () {
      this.options.pullDownRefresh = false;
    };
  }

  function pullUpMixin(BScroll) {
    BScroll.prototype._initPullUp = function () {
      // must watch scroll in real time
      this.options.probeType = PROBE_REALTIME;

      this.pullupWatching = false;
      this._watchPullUp();
    };

    BScroll.prototype._watchPullUp = function () {
      if (this.pullupWatching) {
        return;
      }
      this.pullupWatching = true;
      this.on('scroll', this._checkToEnd);
    };

    BScroll.prototype._checkToEnd = function (pos) {
      var _this = this;

      var _options$pullUpLoad$t = this.options.pullUpLoad.threshold,
          threshold = _options$pullUpLoad$t === undefined ? 0 : _options$pullUpLoad$t;

      if (this.movingDirectionY === DIRECTION_UP$1 && pos.y <= this.maxScrollY + threshold) {
        // reset pullupWatching status after scroll end.
        this.once('scrollEnd', function () {
          _this.pullupWatching = false;
        });
        this.trigger('pullingUp');
        this.off('scroll', this._checkToEnd);
      }
    };

    BScroll.prototype.finishPullUp = function () {
      var _this2 = this;

      if (this.pullupWatching) {
        this.once('scrollEnd', function () {
          _this2._watchPullUp();
        });
      } else {
        this._watchPullUp();
      }
    };

    BScroll.prototype.openPullUp = function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.options.pullUpLoad = config;
      this._initPullUp();
    };

    BScroll.prototype.closePullUp = function () {
      this.options.pullUpLoad = false;
      if (!this.pullupWatching) {
        return;
      }
      this.pullupWatching = false;
      this.off('scroll', this._checkToEnd);
    };
  }

  function mouseWheelMixin(BScroll) {
    BScroll.prototype._initMouseWheel = function () {
      var _this = this;

      this._handleMouseWheelEvent(addEvent);

      this.on('destroy', function () {
        clearTimeout(_this.mouseWheelTimer);
        _this._handleMouseWheelEvent(removeEvent);
      });

      this.firstWheelOpreation = true;
    };

    BScroll.prototype._handleMouseWheelEvent = function (eventOperation) {
      eventOperation(this.wrapper, 'wheel', this);
      eventOperation(this.wrapper, 'mousewheel', this);
      eventOperation(this.wrapper, 'DOMMouseScroll', this);
    };

    BScroll.prototype._onMouseWheel = function (e) {
      var _this2 = this;

      if (!this.enabled) {
        return;
      }
      e.preventDefault();

      if (this.firstWheelOpreation) {
        this.trigger('scrollStart');
      }
      this.firstWheelOpreation = false;

      clearTimeout(this.mouseWheelTimer);
      this.mouseWheelTimer = setTimeout(function () {
        if (!_this2.options.snap) {
          _this2.trigger('scrollEnd', {
            x: _this2.x,
            y: _this2.y
          });
        }
        _this2.firstWheelOpreation = true;
      }, 400);

      var _options$mouseWheel = this.options.mouseWheel,
          _options$mouseWheel$s = _options$mouseWheel.speed,
          speed = _options$mouseWheel$s === undefined ? 20 : _options$mouseWheel$s,
          _options$mouseWheel$i = _options$mouseWheel.invert,
          invert = _options$mouseWheel$i === undefined ? false : _options$mouseWheel$i;

      var wheelDeltaX = void 0;
      var wheelDeltaY = void 0;

      switch (true) {
        case 'deltaX' in e:
          if (e.deltaMode === 1) {
            wheelDeltaX = -e.deltaX * speed;
            wheelDeltaY = -e.deltaY * speed;
          } else {
            wheelDeltaX = -e.deltaX;
            wheelDeltaY = -e.deltaY;
          }
          break;
        case 'wheelDeltaX' in e:
          wheelDeltaX = e.wheelDeltaX / 120 * speed;
          wheelDeltaY = e.wheelDeltaY / 120 * speed;
          break;
        case 'wheelDelta' in e:
          wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * speed;
          break;
        case 'detail' in e:
          wheelDeltaX = wheelDeltaY = -e.detail / 3 * speed;
          break;
        default:
          return;
      }

      var direction = invert ? -1 : 1;
      wheelDeltaX *= direction;
      wheelDeltaY *= direction;

      if (!this.hasVerticalScroll) {
        wheelDeltaX = wheelDeltaY;
        wheelDeltaY = 0;
      }

      var newX = void 0;
      var newY = void 0;
      if (this.options.snap) {
        newX = this.currentPage.pageX;
        newY = this.currentPage.pageY;

        if (wheelDeltaX > 0) {
          newX--;
        } else if (wheelDeltaX < 0) {
          newX++;
        }

        if (wheelDeltaY > 0) {
          newY--;
        } else if (wheelDeltaY < 0) {
          newY++;
        }

        this._goToPage(newX, newY);
        return;
      }

      newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
      newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

      this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
      this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

      if (newX > 0) {
        newX = 0;
      } else if (newX < this.maxScrollX) {
        newX = this.maxScrollX;
      }

      if (newY > 0) {
        newY = 0;
      } else if (newY < this.maxScrollY) {
        newY = this.maxScrollY;
      }

      this.scrollTo(newX, newY);
      this.trigger('scroll', {
        x: this.x,
        y: this.y
      });
    };
  }

  function BScroll(el, options) {
    this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
    if (!this.wrapper) {
      warn('Can not resolve the wrapper DOM.');
    }
    this.scroller = this.wrapper.children[0];
    if (!this.scroller) {
      warn('The wrapper need at least one child element to be scroller.');
    }
    // cache style for better performance
    this.scrollerStyle = this.scroller.style;

    this._init(el, options);
  }

  initMixin(BScroll);
  coreMixin(BScroll);
  eventMixin(BScroll);
  snapMixin(BScroll);
  wheelMixin(BScroll);
  scrollbarMixin(BScroll);
  pullDownMixin(BScroll);
  pullUpMixin(BScroll);
  mouseWheelMixin(BScroll);

  BScroll.Version = '1.9.1';

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

  /** `Object#toString` result references. */
  var mapTag$6 = '[object Map]',
      setTag$6 = '[object Set]';

  /** Used for built-in method references. */
  var objectProto$15 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$12 = objectProto$15.hasOwnProperty;

  /**
   * Checks if `value` is an empty object, collection, map, or set.
   *
   * Objects are considered empty if they have no own enumerable string keyed
   * properties.
   *
   * Array-like values such as `arguments` objects, arrays, buffers, strings, or
   * jQuery-like collections are considered empty if they have a `length` of `0`.
   * Similarly, maps and sets are considered empty if they have a `size` of `0`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is empty, else `false`.
   * @example
   *
   * _.isEmpty(null);
   * // => true
   *
   * _.isEmpty(true);
   * // => true
   *
   * _.isEmpty(1);
   * // => true
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({ 'a': 1 });
   * // => false
   */
  function isEmpty(value) {
    if (value == null) {
      return true;
    }
    if (isArrayLike_1(value) &&
        (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' ||
          isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
      return !value.length;
    }
    var tag = _getTag(value);
    if (tag == mapTag$6 || tag == setTag$6) {
      return !value.size;
    }
    if (_isPrototype(value)) {
      return !_baseKeys(value).length;
    }
    for (var key in value) {
      if (hasOwnProperty$12.call(value, key)) {
        return false;
      }
    }
    return true;
  }

  var isEmpty_1 = isEmpty;

  /**
   * Checks if `value` is `NaN`.
   *
   * **Note:** This method is based on
   * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
   * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
   * `undefined` and other non-number values.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   * @example
   *
   * _.isNaN(NaN);
   * // => true
   *
   * _.isNaN(new Number(NaN));
   * // => true
   *
   * isNaN(undefined);
   * // => true
   *
   * _.isNaN(undefined);
   * // => false
   */
  function isNaN$1(value) {
    // An `NaN` primitive is the only value that is not equal to itself.
    // Perform the `toStringTag` check first to avoid errors with some
    // ActiveX objects in IE.
    return isNumber_1(value) && value != +value;
  }

  var _isNaN = isNaN$1;

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
    } else if (isEmpty_1(selectedItem.children)) {
      // 级联时，最后一个 group 滑动结束触发
      this.$emit('change', this.selectedItems.slice(0, groupIndex + 1));
    } // 级联数据的联动处理


    if (this.cascaded) {
      var nextGroupIndex = groupIndex + 1;
      var nextGroupItems = selectedItem.children;

      if (isArray_1(nextGroupItems) && nextGroupItems.length) {
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

  var styles$12 = {"select":"f-1rW f-1Xw"};

  var select = {
    name: 'f-select',
    mixins: [index({
      prop: 'value',
      event: 'change'
    }), CSSModules(styles$12)],
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
        return this.lastSelectedIndex !== null ? this.lastSelectedIndex : findIndex_1(this.data, ['value', this.localValue]);
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

  /**
   * Creates an object with the same keys as `object` and values generated
   * by running each own enumerable string keyed property of `object` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, key, object).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns the new mapped object.
   * @see _.mapKeys
   * @example
   *
   * var users = {
   *   'fred':    { 'user': 'fred',    'age': 40 },
   *   'pebbles': { 'user': 'pebbles', 'age': 1 }
   * };
   *
   * _.mapValues(users, function(o) { return o.age; });
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   *
   * // The `_.property` iteratee shorthand.
   * _.mapValues(users, 'age');
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   */
  function mapValues(object, iteratee) {
    var result = {};
    iteratee = _baseIteratee(iteratee, 3);

    _baseForOwn(object, function(value, key, object) {
      _baseAssignValue(result, key, iteratee(value, key, object));
    });
    return result;
  }

  var mapValues_1 = mapValues;

  /** Used for built-in method references. */
  var objectProto$16 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$13 = objectProto$16.hasOwnProperty;

  /**
   * The base implementation of `_.has` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHas(object, key) {
    return object != null && hasOwnProperty$13.call(object, key);
  }

  var _baseHas = baseHas;

  /**
   * Checks if `path` is a direct property of `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = { 'a': { 'b': 2 } };
   * var other = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.has(object, 'a');
   * // => true
   *
   * _.has(object, 'a.b');
   * // => true
   *
   * _.has(object, ['a', 'b']);
   * // => true
   *
   * _.has(other, 'a');
   * // => false
   */
  function has(object, path) {
    return object != null && _hasPath(object, path, _baseHas);
  }

  var has_1 = has;

  var styles$13 = {"switch":"f-fDD","on":"f-3bg","disabled":"f-TLD"};

  var _switch = {
    name: 'f-switch',
    mixins: [index({
      prop: 'value',
      event: 'change'
    }), CSSModules(styles$13)],
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
          return has_1(value, 'on') && has_1(value, 'off');
        }
      },
      disabled: Boolean
    },
    methods: {
      transformValue: function transformValue(_, fromProp) {
        var _this = this;

        return mapValues_1(_, function (value) {
          return fromProp ? _this.valueMap.on === value : _this.valueMap[value ? 'on' : 'off'];
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

  var autosize = createCommonjsModule(function (module, exports) {
  /*!
  	autosize 4.0.1
  	license: MIT
  	http://www.jacklmoore.com/autosize
  */
  (function (global, factory) {
  	if (typeof undefined === "function" && undefined.amd) {
  		undefined(['module', 'exports'], factory);
  	} else {
  		factory(module, exports);
  	}
  })(commonjsGlobal, function (module, exports) {

  	var map = typeof Map === "function" ? new Map() : function () {
  		var keys = [];
  		var values = [];

  		return {
  			has: function has(key) {
  				return keys.indexOf(key) > -1;
  			},
  			get: function get(key) {
  				return values[keys.indexOf(key)];
  			},
  			set: function set(key, value) {
  				if (keys.indexOf(key) === -1) {
  					keys.push(key);
  					values.push(value);
  				}
  			},
  			delete: function _delete(key) {
  				var index = keys.indexOf(key);
  				if (index > -1) {
  					keys.splice(index, 1);
  					values.splice(index, 1);
  				}
  			}
  		};
  	}();

  	var createEvent = function createEvent(name) {
  		return new Event(name, { bubbles: true });
  	};
  	try {
  		new Event('test');
  	} catch (e) {
  		// IE does not support `new Event()`
  		createEvent = function createEvent(name) {
  			var evt = document.createEvent('Event');
  			evt.initEvent(name, true, false);
  			return evt;
  		};
  	}

  	function assign(ta) {
  		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

  		var heightOffset = null;
  		var clientWidth = null;
  		var cachedHeight = null;

  		function init() {
  			var style = window.getComputedStyle(ta, null);

  			if (style.resize === 'vertical') {
  				ta.style.resize = 'none';
  			} else if (style.resize === 'both') {
  				ta.style.resize = 'horizontal';
  			}

  			if (style.boxSizing === 'content-box') {
  				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
  			} else {
  				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
  			}
  			// Fix when a textarea is not on document body and heightOffset is Not a Number
  			if (isNaN(heightOffset)) {
  				heightOffset = 0;
  			}

  			update();
  		}

  		function changeOverflow(value) {
  			{
  				// Chrome/Safari-specific fix:
  				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
  				// made available by removing the scrollbar. The following forces the necessary text reflow.
  				var width = ta.style.width;
  				ta.style.width = '0px';
  				// Force reflow:
  				/* jshint ignore:start */
  				ta.offsetWidth;
  				/* jshint ignore:end */
  				ta.style.width = width;
  			}

  			ta.style.overflowY = value;
  		}

  		function getParentOverflows(el) {
  			var arr = [];

  			while (el && el.parentNode && el.parentNode instanceof Element) {
  				if (el.parentNode.scrollTop) {
  					arr.push({
  						node: el.parentNode,
  						scrollTop: el.parentNode.scrollTop
  					});
  				}
  				el = el.parentNode;
  			}

  			return arr;
  		}

  		function resize() {
  			if (ta.scrollHeight === 0) {
  				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
  				return;
  			}

  			var overflows = getParentOverflows(ta);
  			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

  			ta.style.height = '';
  			ta.style.height = ta.scrollHeight + heightOffset + 'px';

  			// used to check if an update is actually necessary on window.resize
  			clientWidth = ta.clientWidth;

  			// prevents scroll-position jumping
  			overflows.forEach(function (el) {
  				el.node.scrollTop = el.scrollTop;
  			});

  			if (docTop) {
  				document.documentElement.scrollTop = docTop;
  			}
  		}

  		function update() {
  			resize();

  			var styleHeight = Math.round(parseFloat(ta.style.height));
  			var computed = window.getComputedStyle(ta, null);

  			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
  			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

  			// The actual height not matching the style height (set via the resize method) indicates that 
  			// the max-height has been exceeded, in which case the overflow should be allowed.
  			if (actualHeight !== styleHeight) {
  				if (computed.overflowY === 'hidden') {
  					changeOverflow('scroll');
  					resize();
  					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
  				}
  			} else {
  				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
  				if (computed.overflowY !== 'hidden') {
  					changeOverflow('hidden');
  					resize();
  					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
  				}
  			}

  			if (cachedHeight !== actualHeight) {
  				cachedHeight = actualHeight;
  				var evt = createEvent('autosize:resized');
  				try {
  					ta.dispatchEvent(evt);
  				} catch (err) {
  					// Firefox will throw an error on dispatchEvent for a detached element
  					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
  				}
  			}
  		}

  		var pageResize = function pageResize() {
  			if (ta.clientWidth !== clientWidth) {
  				update();
  			}
  		};

  		var destroy = function (style) {
  			window.removeEventListener('resize', pageResize, false);
  			ta.removeEventListener('input', update, false);
  			ta.removeEventListener('keyup', update, false);
  			ta.removeEventListener('autosize:destroy', destroy, false);
  			ta.removeEventListener('autosize:update', update, false);

  			Object.keys(style).forEach(function (key) {
  				ta.style[key] = style[key];
  			});

  			map.delete(ta);
  		}.bind(ta, {
  			height: ta.style.height,
  			resize: ta.style.resize,
  			overflowY: ta.style.overflowY,
  			overflowX: ta.style.overflowX,
  			wordWrap: ta.style.wordWrap
  		});

  		ta.addEventListener('autosize:destroy', destroy, false);

  		// IE9 does not fire onpropertychange or oninput for deletions,
  		// so binding to onkeyup to catch most of those events.
  		// There is no way that I know of to detect something like 'cut' in IE9.
  		if ('onpropertychange' in ta && 'oninput' in ta) {
  			ta.addEventListener('keyup', update, false);
  		}

  		window.addEventListener('resize', pageResize, false);
  		ta.addEventListener('input', update, false);
  		ta.addEventListener('autosize:update', update, false);
  		ta.style.overflowX = 'hidden';
  		ta.style.wordWrap = 'break-word';

  		map.set(ta, {
  			destroy: destroy,
  			update: update
  		});

  		init();
  	}

  	function destroy(ta) {
  		var methods = map.get(ta);
  		if (methods) {
  			methods.destroy();
  		}
  	}

  	function update(ta) {
  		var methods = map.get(ta);
  		if (methods) {
  			methods.update();
  		}
  	}

  	var autosize = null;

  	// Do nothing in Node.js environment and IE8 (or lower)
  	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
  		autosize = function autosize(el) {
  			return el;
  		};
  		autosize.destroy = function (el) {
  			return el;
  		};
  		autosize.update = function (el) {
  			return el;
  		};
  	} else {
  		autosize = function autosize(el, options) {
  			if (el) {
  				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
  					return assign(x, options);
  				});
  			}
  			return el;
  		};
  		autosize.destroy = function (el) {
  			if (el) {
  				Array.prototype.forEach.call(el.length ? el : [el], destroy);
  			}
  			return el;
  		};
  		autosize.update = function (el) {
  			if (el) {
  				Array.prototype.forEach.call(el.length ? el : [el], update);
  			}
  			return el;
  		};
  	}

  	exports.default = autosize;
  	module.exports = exports['default'];
  });
  });

  var styles$14 = {};

  var textarea = {
    name: 'f-textarea',
    inheritAttrs: false,
    mixins: [index({
      prop: 'value',
      event: 'input'
    }), CSSModules(styles$14)],
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
              autosize.update(el);
            } else {
              _this.autoSizeInited = true;
              autosize(el);
            }
          } else {
            _this.autoSizeInited = false;
            autosize.destroy(el);
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
    pickerView: pickerView,
    select: select,
    switch: _switch,
    textarea: textarea
  });

  function install(Vue) {
    if (install.installed) return;
    Vue.prototype.$log = console.log;

    forOwn_1(components, function (component) {
      if (component.alias) {
        castArray_1(component.alias).forEach(function (name) {
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

  return components;

})));
