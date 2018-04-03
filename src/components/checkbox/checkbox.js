import CSSModules from 'vue-css-modules'
import betterSync from 'vue-better-sync'
import { checkbox as COMPONENT_NAME } from '@/components.json'
import styles from './checkbox.styl'

export default {
  name: COMPONENT_NAME,

  mixins: [
    CSSModules(styles),
    betterSync({
      prop: 'value',
      event: 'input'
    })
  ],

  props: {
    value: {
      type: String,
      sync: true
    }
  },

  render(h) {
    return h('div', {
      styleName: '@checkbox'
    })
  }
}
