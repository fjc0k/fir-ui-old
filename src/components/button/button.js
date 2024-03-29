import createElement from 'vue-css-modules/lib/create-element'
import mergeData from 'vue-merge-data'
import Icon from '@/components/icon/icon'
import styles from './button.styl'

const BUTTON_TYPES = ['default', 'primary', 'success', 'warning', 'danger']

export default {
  name: 'f-button',

  functional: true,

  props: {
    type: {
      type: String,
      default: BUTTON_TYPES[0],
      validtor: value => BUTTON_TYPES.indexOf(value) >= 0
    },
    icon: String,
    mini: Boolean,
    plain: Boolean,
    block: Boolean,
    disabled: Boolean,
    whiteSpace: Boolean
  },

  render(h, { props, data, children }) {
    h = createElement(h, styles, props)

    const ButtonIcon = props.icon && h(Icon, {
      styleName: '@icon',
      attrs: {
        name: props.icon
      }
    })

    return h('a', mergeData(data, {
      styleName: '@button $type :mini :plain :block :disabled :white-space',
      attrs: {
        href: 'javascript:;' // eslint-disable-line no-script-url
      }
    }), [
      ButtonIcon,
      ...(children || [])
    ])
  }
}
