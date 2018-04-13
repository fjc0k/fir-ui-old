import { isNaN, isEmpty, isArray } from 'lodash'
import { DIRECTION_DOWN, DIRECTION_UP } from '../../config'

export default function (scroll, groupIndex) {
  // 当前选中条目的索引
  const selectedIndex = scroll.getSelectedIndex()

  // 如果索引有误，直接返回
  if (isNaN(selectedIndex)) return

  // 获取当前选中的条目，并将其索引植入
  const selectedItem = this.localData[groupIndex][selectedIndex]
  selectedItem.index = selectedIndex

  // 跳过禁用的条目
  if (selectedItem.disabled) {
    const newIndex = this.findAvailableItemIndex(
      this.localData[groupIndex],
      selectedIndex,
      scroll.directionY >= 0 ? DIRECTION_DOWN : DIRECTION_UP
    )
    // 防止死循环
    if (newIndex !== selectedIndex) {
      // scroll.wheelTo(newIndex)
      scroll.scrollTo(
        0,
        -newIndex * scroll.itemHeight,
        170 // 若是 0 则不会触发 scrollEnd 事件
      )
    }
    return
  }

  // 确保是有效滑动
  if (!this.cascaded && this.selectedItems[groupIndex] && this.selectedItems[groupIndex].index === selectedIndex) {
    return
  }

  // 设置当前组选中的条目为本条目
  this.selectedItems[groupIndex] = selectedItem

  this.localValue[groupIndex] = selectedItem.value

  // 同步绑定值
  if (!this.cascaded) {
    // 非级联时，滑动结束即触发
    this.syncDetail(this.selectedItems.slice())
    this.syncValue(this.localValue.slice())
  } else if (isEmpty(selectedItem.children)) {
    if (this.disableSync) {
      this.disableSync = false
    } else {
      // 级联时，最后一个 group 滑动结束触发
      this.syncDetail(this.selectedItems.slice(0, groupIndex + 1))
      this.syncValue(this.localValue.slice(0, groupIndex + 1))
    }
  }

  // 级联数据的联动处理
  if (this.cascaded) {
    const nextGroupIndex = groupIndex + 1
    const nextGroupItems = selectedItem.children

    if (isArray(nextGroupItems) && nextGroupItems.length) { // set
      this.nextGroupIndex = nextGroupIndex
      this.$set(
        this.localData,
        nextGroupIndex,
        nextGroupItems
      )
    } else if (this.localData.length > nextGroupIndex) { // delete
      this.localData.splice(nextGroupIndex)
      this.localValue.splice(nextGroupIndex)
      this.scrolls.splice(nextGroupIndex)
    }
  }
}
