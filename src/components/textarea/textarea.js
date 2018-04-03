import CSSModules from 'vue-css-modules'
import betterSync from 'vue-better-sync'
import { textarea as COMPONENT_NAME } from '@/components.json'
import Input from '@/components/input/input'
import styles from './textarea.styl'

export default {
  name: COMPONENT_NAME,

  inheritAttrs: false,

  mixins: [
    betterSync({
      prop: 'value',
      event: 'input'
    }),
    CSSModules(styles)
  ],

  props: {
    value: {
      type: [String, Number],
      sync: true
    },
    rows: {
      type: [Number, String],
      default: 2
    }
  },

  render(h) {
    return h(Input, {
      styleName: '@textarea',
      attrs: {
        ...this.$attrs,
        tag: 'textarea',
        rows: this.rows
      },
      model: {
        value: this.actualValue,
        callback: this.syncValue
      }
    })
  }
}
