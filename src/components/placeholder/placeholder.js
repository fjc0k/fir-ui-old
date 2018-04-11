import createElement from 'vue-css-modules/lib/create-element'
import { isEmpty, isNumber, isArray } from 'lodash'
import styles from './placeholder.styl'

export default {
  name: 'f-placeholder',

  functional: true,

  props: {
    value: null,
    predicate: {
      type: Function,
      default: value => {
        if (value === true) return true
        if (isNumber(value)) return true
        return !isEmpty(value)
      }
    },
    renderValue: {
      type: Function,
      default(value) {
        return isArray(value) ? value.join(', ') : value
      }
    },
    inline: Boolean
  },

  render(h, { props, data, children }) {
    h = createElement(h, styles, props)

    const renderValue = (
      data.scopedSlots && data.scopedSlots.default ?
        data.scopedSlots.default :
        props.renderValue
    )

    return h('div', {
      ...data,
      styleName: '@placeholder :inline'
    }, [
      props.predicate(props.value) ?
        h('div', { styleName: 'value' }, [renderValue(props.value)]) :
        h('div', { styleName: 'text' }, [children])
    ])
  }
}
