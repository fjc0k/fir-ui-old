import { VNodeType } from '@/utils/helper'
import { extractVNodes } from '@/mixins'
import { field as CN } from '@/components.json'
import Item from '@/components/list/item'

export default {
  name: CN,

  inheritAttrs: false,

  inject: {
    Form: { default: null }
  },

  provide() {
    return { Field: this }
  },

  mixins: [
    extractVNodes
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

  computed: {
    classList() {
      return [
        CN
      ]
    }
  },

  render(h) {
    const { label } = this.extractVNodes()
    return h(Item, {
      class: this.classList,
      attrs: {
        ...this.$attrs,
        infoWidth: this.labelWidth,
        title: label,
        extra: this.$slots.default
      }
    })
  }
}
