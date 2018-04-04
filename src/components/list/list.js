import createElement from 'vue-css-modules/lib/create-element'
import Hairline from '@/components/hairline/hairline'
import { genFunctionalData } from '@/utils/helper'
import styles from './list.styl'

export default {
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

  render(h, { props, data, children }) {
    h = createElement(h, styles, props)

    const border = Boolean(props.border)

    return h(
      Hairline,
      genFunctionalData(
        data,
        {
          styleName: '@list :offset',
          attrs: {
            tag: props.tag,
            top: border,
            bottom: border
          }
        }
      ),
      children
    )
  }
}
