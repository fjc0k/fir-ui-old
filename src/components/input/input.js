import betterSync from 'vue-better-sync'
import { input as CN, field as fieldClassName } from '@/components.json'
import { isFunction, toNumber } from 'lodash'

export default {
  name: CN,

  mixins: [
    betterSync({
      prop: 'value',
      event: 'input'
    })
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
    beforeSyncValue(_, value, confirm) {
      if (this.type === 'number') {
        const _value = value.trim()
        if (_value !== '') {
          value = toNumber(_value)
        }
      }
      confirm(value)
    },
    handleInput(e) {
      const { value } = e.target
      if (isFunction(this.validator)) {
        if (this.validator(value, e)) {
          this.syncValue(value)
        } else {
          e.target.value = this.actualValue
        }
      } else {
        this.syncValue(value)
      }
    }
  },

  render(h) {
    return h(this.tag, {
      staticClass: `${CN} ${fieldClassName}--reset`,
      attrs: {
        type: this.type
      },
      domProps: {
        value: this.actualValue
      },
      on: {
        [this.lazy ? 'change' : 'input']: this.handleInput
      }
    })
  }
}
