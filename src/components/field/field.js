import CSSModules from 'vue-css-modules'
import { VNodeType } from '@/utils/helper'
import { extractVNodes } from '@/mixins'
import { field as COMPONENT_NAME } from '@/components.json'
import Item from '@/components/item/item'
import styles from './field.styl'

export default {
  name: COMPONENT_NAME,

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
    label: VNodeType,
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
