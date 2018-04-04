import createElement from 'vue-css-modules/lib/create-element'
import { genFunctionalData } from '@/utils/helper'
import styles from './divider.styl'

export default {
  name: 'f-divider',

  functional: true,

  props: {
    color: String,
    width: String
  },

  render(h, { props, data, children }) {
    h = createElement(h, styles, props)

    const widthStyle = props.width && {
      width: props.width
    }
    const colorStyle = { color: props.color }

    return h('div', genFunctionalData(data, {
      styleName: '@divider'
    }), [
      h('div', {
        styleName: 'inner',
        staticStyle: widthStyle
      }, [
        h('div', { styleName: 'line', staticStyle: colorStyle }),
        h('div', { styleName: 'body' }, [children]),
        h('div', { styleName: 'line', staticStyle: colorStyle })
      ])
    ])
  }
}
