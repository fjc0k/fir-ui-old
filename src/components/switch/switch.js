import CSSModules from 'vue-css-modules'
import betterSync from 'vue-better-sync'
import { has, mapValues } from 'lodash'
import components from '@/components.json'
import styles from './switch.styl'

export default {
  // 为何不用 COMPONENT_NAME ?
  // 因为打包工具有缺陷: rollup-plugin-json
  name: components.switch,

  mixins: [
    betterSync({
      prop: 'value',
      event: 'change'
    }),
    CSSModules(styles)
  ],

  props: {
    value: {
      type: null,
      sync: true
    },
    beforeChange: Function,
    valueMap: {
      type: Object,
      default: () => ({
        on: true,
        off: false
      }),
      validator: value => has(value, 'on') && has(value, 'off')
    },
    disabled: Boolean
  },

  methods: {
    transformValue(_, fromProp) {
      return mapValues(_, value => (
        fromProp ?
          this.valueMap.on === value :
          this.valueMap[value ? 'on' : 'off']
      ))
    },
    done() {
      this.syncValue(!this.actualValue)
    },
    handleClick() {
      if (this.disabled) return
      if (this.beforeChange) {
        this.beforeChange(this.done)
      } else {
        this.done()
      }
    }
  },

  render(h) {
    return h('div', {
      styleName: '@switch on=actualValue :disabled',
      on: {
        click: this.handleClick
      }
    })
  }
}
