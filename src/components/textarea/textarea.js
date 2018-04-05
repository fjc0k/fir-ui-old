import CSSModules from 'vue-css-modules'
import betterSync from 'vue-better-sync'
import autoSize from 'autosize'
import Input from '@/components/input/input'
import styles from './textarea.styl'

export default {
  name: 'f-textarea',

  inheritAttrs: false,

  mixins: [
    betterSync({
      prop: 'value',
      event: 'input'
    }),
    CSSModules(styles)
  ],

  props: {
    value: {
      type: [String, Number],
      sync: true
    },
    rows: {
      type: [Number, String],
      default: 2
    },
    autoSize: Boolean
  },

  methods: {
    onValueChange() {
      this.resize()
    },
    resize() {
      this.$nextTick(() => {
        const el = this.$refs.textarea.$el
        if (this.autoSize) {
          if (this.autoSizeInited) {
            autoSize.update(el)
          } else {
            this.autoSizeInited = true
            autoSize(el)
          }
        } else {
          this.autoSizeInited = false
          autoSize.destroy(el)
        }
      })
    }
  },

  watch: {
    autoSize: {
      immediate: true,
      handler: 'resize'
    }
  },

  render(h) {
    return h(Input, {
      styleName: '@textarea',
      attrs: {
        ...this.$attrs,
        tag: 'textarea',
        rows: this.rows
      },
      model: {
        value: this.localValue,
        callback: this.syncValue
      },
      ref: 'textarea'
    })
  }
}
