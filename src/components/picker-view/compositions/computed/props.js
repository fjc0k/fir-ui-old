import { isArray, fill } from 'lodash'

export default {
  groupCount() {
    return this.localData.length
  },
  localDivider() {
    return (
      isArray(this.divider) ?
        this.divider :
        fill(Array(this.groupCount), this.divider)
    )
  },
  localUnit() {
    return (
      isArray(this.unit) ?
        this.unit :
        fill(Array(this.groupCount), this.unit)
    )
  },
  styles() {
    const { visibleItemCount, itemHeight } = this

    const [
      pureItemHeight,
      unit = 'px'
    ] = itemHeight.split(/(?=([a-zA-Z]{2,}))/, 2)

    const actualItemHeight = `${pureItemHeight}${unit}`
    const pickerHeight = `${pureItemHeight * visibleItemCount}${unit}`
    const pickerHalfHeight = `${pureItemHeight * ((visibleItemCount - 1) / 2)}${unit}`

    return {
      mask: {
        backgroundSize: `100% ${pickerHalfHeight}`
      },
      indicator: {
        height: actualItemHeight,
        top: pickerHalfHeight,
        display: visibleItemCount === 1 ? 'none' : 'block'
      },
      content: {
        height: pickerHeight
      },
      scroll: {
        maxWidth: `${100 / this.groupCount}%`
      },
      group: {
        marginTop: pickerHalfHeight
      },
      item: {
        height: actualItemHeight,
        lineHeight: actualItemHeight
      }
    }
  }
}
