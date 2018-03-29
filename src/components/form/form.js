import betterSync from 'vue-better-sync'
import { form as CN } from '@/components.json'
import List from '@/components/list/list'

export default {
  name: CN,

  inheritAttrs: false,

  provide() {
    return { Form: this }
  },

  mixins: [
    betterSync({
      prop: 'model',
      event: 'change'
    })
  ],

  props: {
    labelWidth: {
      type: String,
      default: '4.5em'
    },
    model: {
      type: Object,
      sync: true
    },
    rules: Object
  },

  render(h) {
    return h(List, {
      staticClass: CN,
      attrs: {
        ...this.$attrs,
        tag: 'form'
      }
    }, this.$slots.default)
  }
}
