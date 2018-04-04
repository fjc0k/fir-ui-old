import createElement from 'vue-css-modules/lib/create-element'
import { genFunctionalData } from '@/utils/helper'
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
    inline: Boolean,
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

    return h('a', genFunctionalData(data, {
      styleName: '@button $type :mini :plain :inline :disabled :white-space',
      attrs: {
        href: 'javascript:;' // eslint-disable-line no-script-url
      }
    }), [
      ButtonIcon,
      ...(children || [])
    ])
  }
}
