import { GROUP_CLASS_NAME, ITEM_CLASS_NAME } from '../config'

export default {
  Mask() {
    return this.$createElement('div', {
      styleName: 'mask',
      style: this.styles.mask
    })
  },
  Indicator() {
    return this.$createElement('div', {
      styleName: 'indicator',
      style: this.styles.indicator
    })
  },
  Content() {
    return this.$createElement('div', {
      styleName: 'content',
      style: this.styles.content
    }, this.Groups)
  },
  Loading() {
    // todo
    return this.loading && this.$createElement(
      'div',
      { styleName: 'loading' },
      'LOADING'
    )
  },
  Groups() {
    const h = this.$createElement

    return this.localData.map((items, groupIndex) => {
      const divider = this.localDivider[groupIndex]
      const unit = this.localUnit[groupIndex]

      const Items = items.map(
        (item, index) => h('li', {
          staticClass: ITEM_CLASS_NAME,
          styleName: ['item', item.disabled && 'disabled'],
          style: this.styles.item,
          key: index
        }, [item.label])
      )

      const Divider = divider && h('div', { styleName: 'divider' }, [divider])
      const Unit = unit && h('div', { styleName: 'unit' }, [unit])
      const Loading = (groupIndex === this.groupCount - 1) && this.Loading

      return [
        h('div', {
          styleName: 'scroll',
          style: this.styles.scroll,
          ref: 'groups',
          refInFor: true
        }, [
          h('ul', {
            staticClass: GROUP_CLASS_NAME,
            styleName: 'group',
            style: this.styles.group
          }, Items)
        ]),
        Loading || Unit,
        Divider
      ]
    })
  }
}
