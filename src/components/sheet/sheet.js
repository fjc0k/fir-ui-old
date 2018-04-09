import CSSModules from 'vue-css-modules'
import { isFunction } from 'lodash'
import { toggleVisibility, extractVNodes } from '@/mixins'
import Popup from '@/components/popup/popup'
import Item from '@/components/item/item'
import styles from './sheet.styl'

export default {
  name: 'f-sheet',

  inheritAttrs: false,

  mixins: [
    extractVNodes,
    CSSModules(styles),
    toggleVisibility(false, true)
  ],

  props: {
    title: extractVNodes.VNodeType,
    desc: extractVNodes.VNodeType,
    cancel: {
      ...extractVNodes.VNodeType,
      default: '取消'
    },
    confirm: {
      ...extractVNodes.VNodeType,
      default: '确定'
    },
    beforeCancel: Function,
    beforeConfirm: Function,
    noHeader: Boolean
  },

  methods: {
    handleCancel() {
      const done = () => {
        this.hide()
        this.$emit('cancel')
      }
      if (isFunction(this.beforeCancel)) {
        this.beforeCancel(done)
      } else {
        done()
      }
    },
    handleConfirm() {
      const done = () => {
        this.hide()
        this.$emit('confirm')
      }
      if (isFunction(this.beforeConfirm)) {
        this.beforeConfirm(done)
      } else {
        done()
      }
    }
  },

  render(h) {
    const { title, desc, cancel, confirm } = this.extractVNodes()

    return h(Popup, {
      model: {
        value: this.localVisible,
        callback: this.toggle
      },
      attrs: {
        ...this.$attrs,
        placement: 'bottom'
      }
    }, [
      h('div', { styleName: '@sheet' }, [
        h(Item, {
          styleName: 'header',
          attrs: {
            left: cancel && h('a', {
              styleName: 'cancel',
              attrs: {
                href: 'javascript:;' // eslint-disable-line no-script-url
              },
              on: {
                click: this.handleCancel
              }
            }, [cancel]),
            right: confirm && h('a', {
              styleName: 'confirm',
              attrs: {
                href: 'javascript:;' // eslint-disable-line no-script-url
              },
              on: {
                click: this.handleConfirm
              }
            }, [confirm]),
            title,
            desc
          }
        }),
        this.$slots.default
      ])
    ])
  }
}
