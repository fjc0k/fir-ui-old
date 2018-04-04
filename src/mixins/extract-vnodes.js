// 统一 prop VNode 和 slot

import { reduce, isObjectLike, toString } from 'lodash'

const VNodeType = {
  type: null,
  vnode: true
}

const normalizePropVNode = propVNode => {
  return (
    isObjectLike(propVNode) ?
      propVNode :
      toString(propVNode)
  )
}

export default {
  VNodeType,

  computed: {
    VNodeProps() {
      return this.extractVNodeProps()
    }
  },

  methods: {
    extractVNodeProps(propDescriptors = this.$options.props) {
      return reduce(
        propDescriptors,
        (props, descriptor, propName) => {
          if (descriptor.vnode) {
            props.push([
              propName,
              descriptor.slot || propName
            ])
          }
          return props
        },
        []
      )
    },
    extractVNodes({
      VNodeProps = this.VNodeProps,
      slots = this.$slots,
      props = this.$props
    } = {}) {
      return VNodeProps.reduce((VNodes, [propName, slot]) => {
        VNodes[propName] = slots[slot] || slots[propName] || normalizePropVNode(props[propName])
        return VNodes
      }, {
        children: slots.default
      })
    }
  }
}
