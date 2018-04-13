import styles from '../picker-view.styl'

export const DIRECTION_DOWN = 0

export const DIRECTION_UP = 1

export const BS_OPTIONS = function (groupIndex) {
  return {
    wheel: {
      selectedIndex: this.findSelectedItemIndex(groupIndex),
      wheelWrapperClass: styles.group,
      wheelItemClass: styles.item,
      rotate: 100 / this.visibleItemCount,
      adjustTime: 200
    },
    observeDOM: false,
    bindToWrapper: this.visibleItemCount === 1
  }
}
