import CSSModules from 'vue-css-modules'
import betterSync from 'vue-better-sync'
import { toggleVisibility, customRenderer, stageValues } from '@/mixins'
import PickerView from '@/components/picker-view/picker-view'
import Sheet from '@/components/sheet/sheet'
import Placeholder from '@/components/placeholder/placeholder'
import styles from './picker.styl'

export default {
  name: 'f-picker',

  inheritAttrs: false,

  mixins: [
    stageValues,
    CSSModules(styles),
    toggleVisibility(false),
    customRenderer({
      value(value) {
        return value.join(', ')
      }
    }),
    betterSync({
      prop: 'value',
      event: 'change'
    })
  ],

  props: {
    value: Array,
    placeholder: {
      type: null,
      default: ' '
    }
  },

  methods: {
    onShow() {
      const { picker } = this.$refs
      if (this.localValue.length) {
        picker.localValue = this.localValue.slice()
      }
      picker.refresh(true)
    },
    handleChange(value) {
      this.stage('localValue', value)
    },
    handleConfirm() {
      this.commit('localValue')
    }
  },

  created() {
    this.handleChange(this.value)
  },

  render(h) {
    return h(Placeholder, {
      attrs: {
        value: this.localValue,
        renderValue: this.$renderValue,
        text: this.placeholder
      },
      on: {
        click: this.toggle
      }
    }, [
      h(Sheet, {
        model: {
          value: this.localVisible,
          callback: this.toggle
        },
        on: {
          confirm: this.handleConfirm
        }
      }, [
        h(PickerView, {
          styleName: '@picker',
          model: {
            value: this.localValue,
            callback: this.handleChange
          },
          attrs: { ...this.$attrs },
          ref: 'picker'
        })
      ])
    ])
  }
}
