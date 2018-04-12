// 统一 render prop 和 scopeSlot

import { reduce, upperFirst, isFunction, isString } from 'lodash'

export default renderFns => reduce(renderFns, (mixin, defaultRenderFn, propName) => {
  const PropName = upperFirst(propName)
  const renderFnPropName = `render${PropName}`

  const isFn = isFunction(defaultRenderFn)

  mixin.props[renderFnPropName] = isFn ? Function : [String, Function]
  mixin.methods[`$${renderFnPropName}`] = function () {
    return (
      (
        isString(this[renderFnPropName]) ?
          defaultRenderFn.literal.bind(this, this[renderFnPropName]) :
          this[renderFnPropName]
      ) ||
        this.$scopedSlots[propName] ||
        (isFn ? defaultRenderFn : defaultRenderFn.default)
    ).apply(this, arguments)
  }

  return mixin
}, {
  props: {},
  methods: {}
})
