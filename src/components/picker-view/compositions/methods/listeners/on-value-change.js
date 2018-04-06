// onValueChange 是 vue-better-sync 的钩子函数：
// 其已实现仅当 value 由父组件本身改变，
// 而不是，localValue 改变触发 value 改变时，
// 调用此函数。

export default function () {
  this.$nextTick(() => {
    this.scrolls.forEach(
      (scroll, groupIndex) => {
        scroll.wheelTo(
          this.findSelectedItemIndex(groupIndex, true)
        )
      }
    )
  })
}
