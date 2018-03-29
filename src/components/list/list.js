import Hairline from '@/components/hairline/hairline'
import { list as CN } from '@/components.json'
import { genFunctionalData } from '@/utils/helper'

export default {
  name: CN,

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

  render(h, { props, data, children }) {
    const border = Boolean(props.border)

    return h(
      Hairline,
      genFunctionalData(
        data,
        {
          attrs: {
            tag: props.tag,
            top: border,
            bottom: border
          },
          staticClass: `${CN}${props.offset ? ' is-offset' : ''}`
        }
      ),
      children
    )
  }
}
