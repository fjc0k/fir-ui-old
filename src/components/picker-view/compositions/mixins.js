import CSSModules from 'vue-css-modules'
import betterSync from 'vue-better-sync'
import styles from '../picker-view.styl'

export default [
  CSSModules(styles),
  betterSync({
    prop: 'value',
    event: 'input'
  })
]
