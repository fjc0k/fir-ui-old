import betterSync from 'vue-better-sync'
import { textarea as CN } from '@/components.json'
import Input from '@/components/input/input'

export default {
  name: CN,

  inheritAttrs: false,

  mixins: [
    betterSync({
      prop: 'value',
      event: 'input'
    })
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
      staticClass: CN,
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
