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
      sync: true
    }
  },

  methods: {
    beforeSyncVisible(_, visible, confirm) {
      const Api = visible ? 'Show' : 'Hide'
      const beforeMethod = `before${Api}`
      const afterMethod = `after${Api}`
      const beforeFn = (
        isFunction(this[beforeMethod]) ?
          this[beforeMethod] :
          next => next()
      )
      beforeFn(() => {
        confirm()
        if (isFunction(this[afterMethod])) {
          this.$nextTick(this[afterMethod])
        }
      })
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
