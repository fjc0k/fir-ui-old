import createElement from 'vue-css-modules/lib/create-element'
import { genFunctionalData } from '@/utils/helper'
import styles from './date-picker.styl'

export default {
  name: 'f-date-picker',

  functional: true,

  props: {},

  render(h, { props, data, children }) {
    h = createElement(h, styles, props)

    return h('div', genFunctionalData(data, {
      styleName: '@date-picker'
    }))
  }
}
