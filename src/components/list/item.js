import Hairline from '@/components/hairline/hairline'
import Icon from '@/components/icon/icon'
import { item as CN } from '@/components.json'
import { genFunctionalData, VNodeType } from '@/utils/helper'
import { isString, isBoolean } from 'lodash'
import { extractVNodes } from '@/mixins'

const ARROWS = ['right', 'down', 'left', 'up']

const propDescriptors = {
  header: VNodeType,
  body: VNodeType,
  footer: VNodeType,
  left: VNodeType,
  right: VNodeType,
  icon: VNodeType,
  title: {
    ...VNodeType,
    slot: 'default'
  },
  desc: VNodeType,
  extra: VNodeType,
  note: VNodeType,
  tag: {
    type: String,
    default: 'div'
  },
  infoWidth: String,
  arrow: {
    type: [Boolean, String],
    default: false,
    validator: value => isBoolean(value) || ARROWS.indexOf(value) >= 0
  }
}
const VNodeProps = extractVNodes.methods.extractVNodeProps(propDescriptors)

export default {
  name: CN,

  functional: true,

  props: propDescriptors,

  render(h, { props, data, slots }) {
    const { header, body, footer, left, right, icon, title, desc, extra, note } = extractVNodes.methods.extractVNodes({
      slots: slots(),
      props,
      VNodeProps
    })

    const arrow = isBoolean(props.arrow) ? props.arrow && 'right' : props.arrow

    return h(Hairline, genFunctionalData(data, {
      staticClass: CN,
      attrs: {
        bottom: true
      }
    }), [
      // Header
      header && h('div', { staticClass: `${CN}_header` }, [header]),

      // Body
      h('div', { staticClass: `${CN}_body` }, [
        body || [
          // Left
          left && h('div', { staticClass: `${CN}_left` }, [left]),
          // Icon, Title, Desc, Extra
          h('div', { staticClass: `${CN}_middle` }, [
            title && h('div', {
              staticClass: `${CN}_info`,
              style: `width: ${props.infoWidth};`
            }, [
              icon && h('div', { staticClass: `${CN}_icon` }, [
                isString(icon) ?
                  h(Icon, { attrs: { name: icon } }) :
                  icon
              ]),
              title && h('div', { staticClass: `${CN}_outline` }, [
                h('div', { staticClass: `${CN}_title` }, [title]),
                desc && h('div', { staticClass: `${CN}_desc` }, [desc])
              ])
            ]),
            extra && h('div', { staticClass: `${CN}_extra` }, [extra])
          ]),
          // Note, Right
          Boolean(note || right) && h('div', { staticClass: `${CN}_right` }, [
            note && h('div', { staticClass: `${CN}_note` }, [note]),
            right
          ]),
          // Arrow
          h(Icon, {
            staticClass: `${CN}_arrow`,
            style: `display: ${arrow ? 'block' : 'none'};`,
            attrs: {
              name: `f-icon-arrow-${arrow || 'right'}`
            }
          })
        ]
      ]),

      // Footer
      footer && h('div', { staticClass: `${CN}_footer` }, [footer])
    ])
  }
}
