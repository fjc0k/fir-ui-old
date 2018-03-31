import betterSync from 'vue-better-sync'
import { has, mapValues } from 'lodash'
import { switch as CN } from '@/components.json'

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

  computed: {
    classList() {
      return [CN, `is-${this.actualValue ? 'on' : 'off'}`, {
        'is-disabled': this.disabled
      }]
    }
  },

  methods: {
    transformValue(_, fromProp) {
      return mapValues(_, value => (
        fromProp ?
          this.valueMap.on === value :
          this.valueMap[value ? 'on' : 'off']
      ))
    },
    done() {
      this.syncValue(!this.actualValue)
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
      class: this.classList,
      on: {
        click: this.handleClick
      }
    })
  }
}
