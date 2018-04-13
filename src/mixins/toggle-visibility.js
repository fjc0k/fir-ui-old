// 控制组件的可见性

import betterSync from 'vue-better-sync'
import { isFunction } from 'lodash'

export default (defaultVisible, isModel) => ({
  mixins: [
    betterSync(isModel && ({
      prop: 'visible',
      event: 'change'
    }))
  ],

  props: {
    visible: {
      type: Boolean,
      default: defaultVisible,
      sync: !isModel
    }
  },

  methods: {
    onLocalVisibleChange(visible) {
      if (visible) {
        if (isFunction(this.onShow)) {
          this.onShow()
        }
      }
    },
    show() {
      this.syncVisible(true)
    },
    hide() {
      this.syncVisible(false)
    },
    toggle() {
      this.syncVisible(!this.localVisible)
    }
  }
})
