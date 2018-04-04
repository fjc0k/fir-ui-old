import createElement from 'vue-css-modules/lib/create-element'
import { genFunctionalData } from '@/utils/helper'
import styles from './hairline.styl'

const PLACEMENT_PROPS = {
  top: Boolean,
  right: Boolean,
  bottom: Boolean,
  left: Boolean
}
const PLACEMENTS = Object.keys(PLACEMENT_PROPS)

export default {
  name: 'f-hairline',

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
    h = createElement(h, styles, props)

    const placements = props.all ? PLACEMENTS : PLACEMENTS.filter(
      placement => props[placement]
    )

    const hairlineStyle = { color: props.color }

    const hairlines = placements.map(
      placement => h('div', {
        styleName: `@line ${placement}`,
        style: hairlineStyle
      })
    )

    return h(props.tag, genFunctionalData(data, { styleName: '@hairline' }), [
      hairlines,
      ...(children || [])
    ])
  }
}
