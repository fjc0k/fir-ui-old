import BScroll from 'better-scroll'
import { BS_OPTIONS } from '../../config'

export default function () {
  this.$nextTick(() => {
    const scrolls = this.scrolls
    const groups = this.$refs.groups

    for (
      let groupIndex = scrolls.length, len = groups.length;
      groupIndex < len;
      groupIndex++
    ) {
      const scroll = new BScroll(
        groups[groupIndex],
        BS_OPTIONS.call(this, groupIndex)
      )
      scroll.on('scrollEnd', () => {
        this.onScrollEnd(scroll, groupIndex)
      })

      // 级联选择器初始化
      if (this.cascaded) {
        this.onScrollEnd(scroll, groupIndex)
      }

      this.scrolls[groupIndex] = scroll
    }

    // 重置 data 后需刷新
    this.scrolls.forEach(
      (scroll, groupIndex) => {
        scroll.once('refresh', () => {
          this.$nextTick(() => {
            // 选项数据改变可能导致选中条目的索引改变，需同步
            scroll.wheelTo(
              this.findSelectedItemIndex(groupIndex)
            )
          })
        })
        scroll.refresh()
      }
    )
  })
}
