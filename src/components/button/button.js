import { genFunctionalData } from '@/utils/helper'
import { button as CN } from '@/components.json'
import Icon from '@/components/icon/icon'

const BUTTON_TYPES = ['default', 'primary', 'success', 'warning', 'danger']

export default {
  name: CN,

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
    const staticClass = `${CN} ${CN}_${props.type}`
    const classList = {
      'is-mini': props.mini,
      'is-plain': props.plain,
      'is-inline': props.inline,
      'is-disabled': props.disabled,
      'has-white-space': props.whiteSpace
    }

    const ButtonIcon = props.icon && h(Icon, {
      staticClass: `${CN}_icon`,
      attrs: {
        name: props.icon
      }
    })

    return h('a', genFunctionalData(data, {
      attrs: {
        href: 'javascript:;' // eslint-disable-line no-script-url
      },
      class: classList,
      staticClass
    }), [
      ButtonIcon,
      ...(children || [])
    ])
  }
}
