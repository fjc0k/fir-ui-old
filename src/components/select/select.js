import betterSync from 'vue-better-sync'
import { findIndex } from 'lodash'
import { select as CN, field as fieldClassName } from '@/components.json'

export default {
  name: CN,

  mixins: [
    betterSync({
      prop: 'value',
      event: 'change'
    })
  ],

  props: {
    value: {
      type: null,
      sync: true
    },
    data: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    lastSelectedIndex: null
  }),

  computed: {
    selectedIndex() {
      // eslint-disable-next-line no-negated-condition
      return this.lastSelectedIndex !== null ? this.lastSelectedIndex : findIndex(
        this.data,
        ['value', this.actualValue]
      )
    },
    Options() {
      return this.data.map(item => this.$createElement(
        'option', {
          attrs: {
            disabled: item.disabled
          }
        }, [item.label]))
    }
  },

  methods: {
    handleChange({ target: { selectedIndex } }) {
      if (selectedIndex !== -1 && this.data[selectedIndex]) {
        this.lastSelectedIndex = selectedIndex
        this.syncValue(
          this.data[selectedIndex].value
        )
      }
    }
  },

  render(h) {
    return h('select', {
      staticClass: `${CN} ${fieldClassName}--reset`,
      domProps: { selectedIndex: this.selectedIndex },
      on: { change: this.handleChange }
    }, this.Options)
  }
}
