import { clone, isArray } from 'lodash'

export default function processData(items, groupIndex) {
  const { filterItem, disableItem, renderItem } = this

  const newItems = []

  for (let itemIndex = 0, len = items.length; itemIndex < len; itemIndex++) {
    const item = clone(items[itemIndex])
    const payload = { groupIndex, itemIndex, item }

    if (filterItem) {
      if (!filterItem(payload)) continue
    }

    if (disableItem && disableItem(payload)) {
      item.disabled = true
    }

    if (renderItem) {
      const label = renderItem(payload)
      if (label) {
        item.label = label
      }
    }

    if (isArray(item.children) && item.children.length) {
      item.children = processData.call(this, item.children, groupIndex + 1)
    }

    newItems.push(item)
  }

  return newItems
}
