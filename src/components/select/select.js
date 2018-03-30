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
      return this.data.map(item => this.$createElement(
        'option', {
          attrs: {
            disabled: item.disabled
          }
        }, [item.label]))
    }
  },

  methods: {
    handleChange(e) {
      const { selectedIndex } = e.target
      if (selectedIndex !== -1 && this.data[selectedIndex]) {
        this.syncValue(
          this.data[selectedIndex].value
        )
      }
    }
  },

  render(h) {
    return h('select', {
      staticClass: `${CN} ${fieldClassName}--reset`,
      attrs: { value: this.actualValue },
      on: {
        change: this.handleChange
      }
    }, this.Options)
  }
}
