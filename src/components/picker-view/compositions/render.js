export default function (h) {
  return h('div', { styleName: '@picker-view' }, [
    this.Mask,
    this.Indicator,
    this.Content
  ])
}
