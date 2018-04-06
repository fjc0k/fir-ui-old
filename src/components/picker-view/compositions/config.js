import styles from '../picker-view.styl'

export const DIRECTION_DOWN = 0

export const DIRECTION_UP = 1

export const GROUP_CLASS_NAME = styles.group

export const ITEM_CLASS_NAME = styles.item

export const BS_OPTIONS = function (groupIndex) {
  return {
    wheel: {
      selectedIndex: this.findSelectedItemIndex(groupIndex),
      wheelWrapperClass: GROUP_CLASS_NAME,
      wheelItemClass: ITEM_CLASS_NAME,
      rotate: 100 / this.visibleItemCount,
      adjustTime: 200
    },
    observeDOM: false,
    bindToWrapper: this.visibleItemCount === 1
  }
}
