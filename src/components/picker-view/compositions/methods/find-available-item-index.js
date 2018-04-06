import { DIRECTION_DOWN, DIRECTION_UP } from '../config'
import { findIndex, findLastIndex } from 'lodash'

export default function (items, currentItemIndex, direction) {
  if (items[currentItemIndex] && !items[currentItemIndex].disabled) {
    return currentItemIndex
  }

  let newIndex

  const findDown = () => findIndex(
    items,
    item => !item.disabled,
    currentItemIndex
  )

  const findUp = () => findLastIndex(
    items.slice(0, currentItemIndex),
    item => !item.disabled
  )

  if (direction === DIRECTION_DOWN) {
    newIndex = findDown()
    if (newIndex === -1) {
      newIndex = findUp()
    }
  } else if (direction === DIRECTION_UP) {
    newIndex = findUp()
    if (newIndex === -1) {
      newIndex = findDown()
    }
  }

  newIndex = newIndex === -1 ? currentItemIndex : newIndex

  return newIndex
}
