import createElement from 'vue-css-modules/lib/create-element'
import { icon as COMPONENT_NAME } from '@/components.json'
import { genFunctionalData } from '@/utils/helper'
import styles from './icon.styl'

export default {
  name: COMPONENT_NAME,

  functional: true,

  props: {
    name: {
      type: String,
      required: true
    }
  },

  render(h, { props, data }) {
    h = createElement(h, styles, props)

    let { name } = props

    const isSVG = name[0] === '$'
    name = isSVG ? name.substr(1) : name

    return (
      isSVG ?
        h('i', genFunctionalData(data, {
          styleName: '@svg'
        }), [h('svg', [h('use', {
          attrs: {
            'xlink:href': `#${name}`
          }
        })])]) :
        h('i', genFunctionalData(data, {
          styleName: '@icon',
          staticClass: name
        }))
    )
  }
}
