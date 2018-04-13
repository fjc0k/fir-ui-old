// onValueChange 是 vue-better-sync 注册的钩子函数：
// 其已实现仅当 value 由父组件改变，
// 而不是，localValue 改变触发 value 改变时，
// 调用此函数。

export default function () {
  this.$nextTick(() => {
    if (this.cascaded) {
      this.disableSync = true // 禁止再同步值
      const groupIndex = 0
      const scroll = this.scrolls[groupIndex]
      scroll.wheelTo(
        this.findSelectedItemIndex(groupIndex, true)
      )
      this.onScrollEnd(scroll, groupIndex)
    } else {
      this.scrolls.forEach(
        (scroll, groupIndex) => {
          scroll.wheelTo(
            this.findSelectedItemIndex(groupIndex, true)
          )
        }
      )
    }
  })
}
