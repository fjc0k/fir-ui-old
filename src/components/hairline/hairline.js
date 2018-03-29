import { hairline as CN } from '@/components.json'
import { genFunctionalData } from '@/utils/helper'

const PLACEMENT_PROPS = {
  top: Boolean,
  right: Boolean,
  bottom: Boolean,
  left: Boolean
}
const PLACEMENTS = Object.keys(PLACEMENT_PROPS)

export default {
  name: CN,

  functional: true,

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    color: String,
    all: Boolean,
    ...PLACEMENT_PROPS
  },

  render(h, { props, data, children }) {
    const placements = props.all ? PLACEMENTS : PLACEMENTS.filter(
      placement => props[placement]
    )
    const hairlineStyle = { color: props.color }
    const hairlines = placements.map(
      placement => h('div', {
        staticClass: `${CN}_line ${CN}_${placement}`,
        style: hairlineStyle
      })
    )
    return h(props.tag, genFunctionalData(data, { staticClass: CN }), [
      hairlines,
      ...(children || [])
    ])
  }
}
