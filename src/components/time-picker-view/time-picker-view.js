import CSSModules from 'vue-css-modules'
import styles from './time-picker-view.styl'

export default {
  name: 'f-time-picker-view',

  mixins: [
    CSSModules(styles),
  ],

  props: {},

  render(h) {
    return h('div', {
      styleName: '@time-picker-view'
    })
  }
}
