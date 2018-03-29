// 调整 zIndex

import { isNumber } from 'lodash'

export default startZIndex => ({
  props: {
    zIndex: Number
  },

  data() {
    return {
      useCustomZIndex: false,
      customZIndex: startZIndex++
    }
  },

  computed: {
    actualZIndex() {
      return (
        this.useCustomZIndex || !isNumber(this.zIndex) ?
          this.customZIndex :
          this.zIndex
      )
    }
  },

  methods: {
    getZIndex() {
      return this.actualZIndex
    },
    setZIndex(index) {
      this.customZIndex = index
      this.useCustomZIndex = true
    }
  }
})
