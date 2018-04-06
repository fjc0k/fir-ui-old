import { DIRECTION_DOWN } from '../config'
import { isNil, findIndex } from 'lodash'

export default function (groupIndex, ignoreCache) {
  const {
    findAvailableItemIndex,
    selectedItems,
    localData,
    localValue
  } = this

  const itemCount = localData[groupIndex].length

  let selectedItemIndex = -1

  // 1. 从缓存的选值中找
  if (!ignoreCache && selectedItems[groupIndex]) {
    selectedItemIndex = selectedItems[groupIndex].index
  }

  // 2. 从传入的绑定值中找
  if (selectedItemIndex === -1 && !isNil(localValue[groupIndex])) {
    selectedItemIndex = findIndex(
      localData[groupIndex],
      item => item.value === localValue[groupIndex]
    )
  }

  // 3. 若未找到，直接找一个可用值；若找到，确保其可用
  selectedItemIndex = findAvailableItemIndex(
    localData[groupIndex],
    (
      selectedItemIndex <= 0 ? 0 :
        selectedItemIndex >= itemCount ? itemCount - 1 :
          selectedItemIndex
    ),
    DIRECTION_DOWN
  )

  return selectedItemIndex
}
