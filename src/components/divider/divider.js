import createElement from 'vue-css-modules/lib/create-element'
import styles from './divider.styl'

const ALIGN = ['center', 'left', 'right']

export default {
  name: 'f-divider',

  functional: true,

  props: {
    color: String,
    width: String,
    padding: String,
    align: {
      type: String,
      default: ALIGN[0],
      validator: value => ALIGN.indexOf(value) >= 0
    }
  },

  render(h, { props, data, children }) {
    h = createElement(h, styles, props)

    const innerStyle = {
      width: props.width,
      padding: props.padding
    }
    const colorStyle = { color: props.color }

    return h('div', Object.assign(data, { styleName: '@divider' }), [
      h('div', {
        styleName: 'inner $align',
        staticStyle: innerStyle
      }, [
        h('div', { styleName: 'line lline', staticStyle: colorStyle }),
        h('div', { styleName: 'body' }, children),
        h('div', { styleName: 'line rline', staticStyle: colorStyle })
      ])
    ])
  }
}
