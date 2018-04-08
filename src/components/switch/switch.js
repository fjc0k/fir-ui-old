import CSSModules from 'vue-css-modules'
import betterSync from 'vue-better-sync'
import { has, mapValues } from 'lodash'
import styles from './switch.styl'

export default {
  name: 'f-switch',

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
    transformValue(_) {
      return mapValues(
        _,
        value => this.valueMap.on === value
      )
    },
    transformLocalValue(_) {
      return mapValues(
        _,
        value => this.valueMap[value ? 'on' : 'off']
      )
    },
    done() {
      this.syncValue(!this.localValue)
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
      styleName: '@switch on=localValue :disabled',
      on: {
        click: this.handleClick
      }
    })
  }
}
