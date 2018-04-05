import CSSModules from 'vue-css-modules'
import betterSync from 'vue-better-sync'
import { toNumber } from 'lodash'
import Icon from '@/components/icon/icon'
import Input from '@/components/input/input'
import styles from './input-number.styl'

const INPUT_NUMBER_TYPES = ['default', 'primary', 'success', 'warning', 'danger']

export default {
  name: 'f-input-number',

  mixins: [
    betterSync({
      prop: 'value',
      event: 'input'
    }),
    CSSModules(styles)
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
      return this.disabled || (this.localValue - this.step < this.min)
    },
    plusDisabled() {
      return this.disabled || (this.localValue + this.step > this.max)
    },
    Minus() {
      return this.$createElement('a', {
        styleName: '@minus button disabled=minusDisabled',
        attrs: { href: 'javascript:;' }, // eslint-disable-line no-script-url
        on: { click: this.handleMinus }
      }, [
        this.$createElement(Icon, {
          attrs: {
            name: 'f-icon-minus-empty'
          }
        })
      ])
    },
    Plus() {
      return this.$createElement('a', {
        styleName: '@plus button disabled=plusDisabled',
        attrs: { href: 'javascript:;' }, // eslint-disable-line no-script-url
        on: { click: this.handlePlus }
      }, [
        this.$createElement(Icon, {
          attrs: {
            name: 'f-icon-plus-empty'
          }
        })
      ])
    },
    InputBox() {
      return this.$createElement('div', { styleName: '@input-box :disabled' }, [
        this.$createElement(Input, {
          styleName: '@input',
          attrs: {
            type: 'number',
            readonly: this.disableInput,
            validator: this.validateValue
          },
          model: {
            value: this.localValue,
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
      this.syncValue(this.localValue - this.step)
    },
    handlePlus() {
      this.syncValue(this.localValue + this.step)
    },
    validateValue(value) {
      return value >= this.min && value <= this.max
    }
  },

  render(h) {
    return h('div', { styleName: '@input-number :block' }, [
      this.Minus,
      this.InputBox,
      this.Plus
    ])
  }
}
