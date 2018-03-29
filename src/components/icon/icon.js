import { icon as CN } from '@/components.json'
import { genFunctionalData } from '@/utils/helper'

export default {
  name: CN,

  functional: true,

  props: {
    name: {
      type: String,
      required: true
    }
  },

  render(h, { props, data }) {
    let { name } = props

    const isSVG = name[0] === '$'
    name = isSVG ? name.substr(1) : name

    return (
      isSVG ?
        h('i', genFunctionalData(data, {
          staticClass: `${CN} ${CN}_svg`
        }), [h('svg', [h('use', {
          attrs: {
            'xlink:href': `#${name}`
          }
        })])]) :
        h('i', genFunctionalData(data, {
          staticClass: `${CN} ${name}`
        }))
    )
  }
}
