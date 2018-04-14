import CSSModules from 'vue-css-modules'
import { extractVNodes } from '@/mixins'
import Item from '@/components/item/item'
import styles from './field.styl'

export default {
  name: 'f-field',

  alias: [
    'f-form-item'
  ],

  inheritAttrs: false,

  inject: {
    Form: { default: null }
  },

  provide() {
    return { Field: this }
  },

  mixins: [
    extractVNodes,
    CSSModules(styles)
  ],

  props: {
    label: extractVNodes.VNodeType,
    labelWidth: {
      type: String,
      default() {
        return this.Form ? this.Form.labelWidth : '4.5em'
      }
    }
  },

  render(h) {
    const { label } = this.extractVNodes()
    return h(Item, {
      styleName: '@field',
      attrs: {
        ...this.$attrs,
        infoWidth: this.labelWidth,
        title: label,
        extra: this.$slots.default
      }
    })
  }
}
