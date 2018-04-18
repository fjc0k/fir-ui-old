import CSSModules from 'vue-css-modules'
import betterSync from 'vue-better-sync'
import mergeData from 'vue-merge-data'
import { toggleVisibility } from '@/mixins'
import Choice from '@/components/choice/choice'
import Icon from '@/components/icon/icon'
import styles from './tag.styl'

const renderBox = () => null

export default {
  name: 'f-tag',

  inheritAttrs: false,

  mixins: [
    CSSModules(styles),
    toggleVisibility(true),
    betterSync({
      prop: 'selectedValues',
      type: 'change'
    })
  ],

  props: {
    mini: Boolean,
    disabled: Boolean,
    closable: Boolean
  },

  render(h) {
    return this.localVisible ? h(Choice, mergeData(this.$vnode.data, {
      styleName: '@tag :mini :disabled',
      attrs: { renderBox }
    }), [
      this.$slots.default,
      this.closable && h(Icon, {
        styleName: 'icon',
        attrs: {
          name: 'f-icon-close'
        },
        on: {
          click: this.toggle
        }
      })
    ]) : null
  }
}
