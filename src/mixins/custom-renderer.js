// 统一 render prop 和 scopeSlot

import { reduce, upperFirst } from 'lodash'

export default renderFns => reduce(renderFns, (mixin, defaultRenderFn, propName) => {
  const PropName = upperFirst(propName)
  const renderFnPropName = `render${PropName}`
  mixin.props[renderFnPropName] = Function
  mixin.methods[`$${renderFnPropName}`] = function () {
    return (
      this[renderFnPropName] ||
      this.$scopedSlots[propName] ||
      defaultRenderFn
    ).apply(this, arguments)
  }
  return mixin
}, {
  props: {},
  methods: {}
})
