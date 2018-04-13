export default function (ignoreCache) {
  this.$nextTick(() => {
    if (this.cascaded) {
      const groupIndex = this.nextGroupIndex || 0
      const scroll = this.scrolls[groupIndex]
      if (scroll) {
        scroll.once('refresh', () => {
          scroll.wheelTo(
            this.findSelectedItemIndex(groupIndex, ignoreCache)
          )
          this.onScrollEnd(scroll, groupIndex)
        })
        scroll.refresh()
      }
    } else {
      this.scrolls.forEach(
        (scroll, groupIndex) => {
          scroll.once('refresh', () => {
            scroll.wheelTo(
              this.findSelectedItemIndex(groupIndex, ignoreCache)
            )
            this.onScrollEnd(scroll, groupIndex)
          })
          scroll.refresh()
        }
      )
    }
  })
}
