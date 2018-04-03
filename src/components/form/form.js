import CSSModules from 'vue-css-modules'
import betterSync from 'vue-better-sync'
import { form as COMPONENT_NAME } from '@/components.json'
import List from '@/components/list/list'
import styles from './form.styl'

export default {
  name: COMPONENT_NAME,

  inheritAttrs: false,

  provide() {
    return { Form: this }
  },

  mixins: [
    betterSync({
      prop: 'model',
      event: 'change'
    }),
    CSSModules(styles)
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
      styleName: '@form',
      attrs: {
        ...this.$attrs,
        tag: 'form'
      }
    }, this.$slots.default)
  }
}
