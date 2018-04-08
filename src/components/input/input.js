import CSSModules from 'vue-css-modules'
import betterSync from 'vue-better-sync'
import { isFunction, toNumber } from 'lodash'
import styles from './input.styl'

export default {
  name: 'f-input',

  mixins: [
    betterSync({
      prop: 'value',
      event: 'input'
    }),
    CSSModules(styles)
  ],

  props: {
    tag: {
      type: String,
      default: 'input'
    },
    value: {
      type: [String, Number],
      sync: true
    },
    type: {
      type: String,
      default: 'text'
    },
    validator: Function,
    lazy: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    transformLocalValue(_) {
      if (this.type === 'number') {
        const newValue = _.newValue.trim()
        if (newValue !== '') {
          _.newValue = toNumber(newValue)
        }
      }
      return _
    },
    handleInput(e) {
      const { value } = e.target
      if (isFunction(this.validator)) {
        if (this.validator(value, e)) {
          this.syncValue(value)
        } else {
          e.target.value = this.localValue
        }
      } else {
        this.syncValue(value)
      }
    }
  },

  render(h) {
    return h(this.tag, {
      styleName: '@input',
      attrs: {
        type: this.type
      },
      domProps: {
        value: this.localValue
      },
      on: {
        [this.lazy ? 'change' : 'input']: this.handleInput
      }
    })
  }
}
