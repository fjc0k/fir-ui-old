import { range } from 'lodash'
import createElement from 'vue-css-modules/lib/create-element'
import styles from './spinner.styl'

const N12 = range(12)

export default {
  name: 'f-spinner',

  functional: true,

  render(h, { props, data }) {
    h = createElement(h, styles, props)

    return h(
      'div',
      {
        ...data,
        styleName: '@spinner'
      },
      N12.map(
        key => h('div', { key })
      )
    )
  }
}
