import createElement from 'vue-css-modules/lib/create-element'
import mergeData from 'vue-merge-data'
import styles from './icon.styl'

export default {
  name: 'f-icon',

  functional: true,

  props: {
    name: {
      type: String,
      required: true
    }
  },

  render(h, { props, data }) {
    h = createElement(h, styles, props)

    let { name } = props

    const isSVG = name[0] === '$'
    name = isSVG ? name.substr(1) : name

    return (
      isSVG ?
        h('i', mergeData(data, {
          styleName: '@svg'
        }), [h('svg', [h('use', {
          attrs: {
            'xlink:href': `#${name}`
          }
        })])]) :
        h('i', mergeData(data, {
          styleName: '@icon',
          staticClass: name
        }))
    )
  }
}
