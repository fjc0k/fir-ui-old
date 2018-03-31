import betterSync from 'vue-better-sync'
import { inputNumber as CN } from '@/components.json'
import { toNumber } from 'lodash'
import Icon from '@/components/icon/icon'
import Input from '@/components/input/input'

const INPUT_NUMBER_TYPES = ['default', 'primary', 'success', 'warning', 'danger']

export default {
  name: CN,

  mixins: [
    betterSync({
      prop: 'value',
      event: 'input'
    })
  ],

  props: {
    type: {
      type: String,
      default: INPUT_NUMBER_TYPES[0],
      validtor: value => INPUT_NUMBER_TYPES.indexOf(value) >= 0
    },
    value: {
      type: [String, Number],
      sync: true
    },
    min: {
      type: Number,
      default: Number.MIN_VALUE
    },
    max: {
      type: Number,
      default: Number.MAX_VALUE
    },
    step: {
      type: Number,
      default: 1
    },
    disableInput: Boolean,
    block: Boolean,
    disabled: Boolean
  },

  computed: {
    minusDisabled() {
      return this.disabled || (this.actualValue - this.step < this.min)
    },
    plusDisabled() {
      return this.disabled || (this.actualValue + this.step > this.max)
    },
    classList() {
      return [CN, {
        'is-block': this.block,
        'is-disabled': this.disabled
      }]
    },
    Minus() {
      const staticClass = `${CN}_button ${CN}_minus${this.minusDisabled ? ' is-disabled' : ''}`
      return this.$createElement('a', {
        attrs: { href: 'javascript:;' }, // eslint-disable-line no-script-url
        on: { click: this.handleMinus },
        staticClass
      }, [
        this.$createElement(Icon, {
          attrs: { name: 'f-icon-minus-empty' }
        })
      ])
    },
    Plus() {
      const staticClass = `${CN}_button ${CN}_plus${this.plusDisabled ? ' is-disabled' : ''}`
      return this.$createElement('a', {
        attrs: { href: 'javascript:;' }, // eslint-disable-line no-script-url
        on: { click: this.handlePlus },
        staticClass
      }, [
        this.$createElement(Icon, {
          attrs: { name: 'f-icon-plus-empty' }
        })
      ])
    },
    InputBox() {
      const staticClass = `${CN}_input-box${this.disabled ? ' is-disabled' : ''}`
      return this.$createElement('div', { staticClass }, [
        this.$createElement(Input, {
          staticClass: `${CN}_input`,
          attrs: {
            type: 'number',
            readonly: this.disableInput,
            validator: this.validateValue
          },
          model: {
            value: this.actualValue,
            callback: this.syncValue
          },
          ref: 'input'
        })
      ])
    }
  },

  methods: {
    transformValue(_) {
      _.newValue = toNumber(_.newValue)
      return _
    },
    handleMinus() {
      this.syncValue(this.actualValue - this.step)
    },
    handlePlus() {
      this.syncValue(this.actualValue + this.step)
    },
    validateValue(value) {
      return value >= this.min && value <= this.max
    }
  },

  render(h) {
    return h('div', { class: this.classList }, [
      this.Minus,
      this.InputBox,
      this.Plus
    ])
  }
}
