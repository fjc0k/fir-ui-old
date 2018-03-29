import betterSync from 'vue-better-sync'
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

  computed: {
    Options() {
      return this.data.map(
        (item, index) => this.$createElement(
          'option',
          {
            attrs: {
              ...item,
              'data-index': index
            }
          },
          [item.label]
        )
      )
    }
  },

  methods: {
    handleChange({ target: { selectedIndex } }) {
      if (selectedIndex !== -1) {
        this.syncValue(
          this.data[selectedIndex].value
        )
      }
    }
  },

  render(h) {
    return h('select', {
      staticClass: `${CN} ${fieldClassName}--reset`,
      domProps: { value: this.actualValue },
      on: {
        change: this.handleChange
      }
    }, this.Options)
  }
}
