import CSSModules from 'vue-css-modules'
import betterSync from 'vue-better-sync'
import { isArray, isBoolean } from 'lodash'
import { customRenderer } from '@/mixins'
import Icon from '@/components/icon/icon'
import styles from './choice.styl'

const CHECKBOX = 1
const RADIO = 2
const AGREE = 3

export default {
  name: 'f-choice',

  alias: [
    'f-checkbox',
    'f-radio'
  ],

  mixins: [
    CSSModules(styles),
    customRenderer({
      box({ selected }) {
        return this.$createElement(Icon, {
          attrs: {
            name: selected ? this.actualSelectedIcon : this.actualIcon
          }
        })
      }
    }),
    betterSync({
      prop: 'selectedValue',
      event: 'change'
    })
  ],

  props: {
    selectedValue: {
      type: null,
      sync: true
    },
    value: null,
    icon: String,
    selectedIcon: String
  },

  computed: {
    type() {
      const { actualSelectedValue } = this
      return (
        isBoolean(actualSelectedValue) ?
          AGREE :
          isArray(actualSelectedValue) ?
            CHECKBOX :
            RADIO
      )
    },
    nativeType() {
      return this.type === RADIO ? 'radio' : 'checkbox'
    },
    actualIcon() {
      return this.icon || (
        this.type === RADIO ?
          'f-icon-radiobox' :
          'f-icon-checkbox'
      )
    },
    actualSelectedIcon() {
      return this.selectedIcon || (
        this.type === RADIO ?
          'f-icon-radiobox-checked' :
          'f-icon-checkbox-checked'
      )
    },
    selected() {
      const { type, actualSelectedValue, value } = this
      return (
        type === CHECKBOX ?
          actualSelectedValue.indexOf(value) >= 0 :
          actualSelectedValue === value
      )
    }
  },

  methods: {
    handleChange({ target: { checked: selected } }) {
      const { type, actualSelectedValue, value } = this

      let newValue

      if (type === CHECKBOX) {
        newValue = actualSelectedValue.slice()
        if (selected) {
          newValue.push(value)
        } else {
          newValue.splice(
            newValue.indexOf(value),
            1
          )
        }
      } else if (type === AGREE) {
        newValue = selected
      } else {
        newValue = value
      }

      this.syncSelectedValue(newValue)
    }
  },

  render(h) {
    return h('label', {
      styleName: '@choice :selected'
    }, [
      h('input', {
        styleName: 'input',
        attrs: {
          type: this.nativeType
        },
        domProps: {
          checked: this.selected
        },
        on: {
          change: this.handleChange
        }
      }),
      h('div', {
        styleName: 'box'
      }, [
        this.$renderBox({ selected: this.selected })
      ]),
      this.$slots.default
    ])
  }
}
