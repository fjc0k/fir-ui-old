import createElement from 'vue-css-modules/lib/create-element'
import Hairline from '@/components/hairline/hairline'
import Icon from '@/components/icon/icon'
import mergeData from 'vue-merge-data'
import { isString, isBoolean } from 'lodash'
import { extractVNodes } from '@/mixins'
import styles from './item.styl'

const ARROWS = ['right', 'down', 'left', 'up']

const { VNodeType } = extractVNodes

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
  name: 'f-item',

  alias: [
    'f-list-item'
  ],

  functional: true,

  props: propDescriptors,

  render(h, { props, data, slots }) {
    h = createElement(h, styles, props)

    const { header, body, footer, left, right, icon, title, desc, extra, note } = extractVNodes.methods.extractVNodes({
      slots: slots(),
      props,
      VNodeProps
    })

    const arrow = isBoolean(props.arrow) ? props.arrow && 'right' : props.arrow

    return h(Hairline, mergeData(data, {
      styleName: '@item',
      attrs: {
        bottom: true
      }
    }), [
      // Header
      header && h('div', { styleName: '@header' }, [header]),

      // Body
      h('div', { styleName: '@body' }, [
        body || [
          // Left
          left && h('div', { styleName: '@left' }, [left]),
          // Icon, Title, Desc, Extra
          h('div', { styleName: '@middle' }, [
            title && h('div', {
              styleName: '@info',
              style: `width: ${props.infoWidth};`
            }, [
              icon && h('div', { styleName: '@icon' }, [
                isString(icon) ?
                  h(Icon, { attrs: { name: icon } }) :
                  icon
              ]),
              title && h('div', { styleName: '@outline' }, [
                h('div', { styleName: '@title' }, [title]),
                desc && h('div', { styleName: '@desc' }, [desc])
              ])
            ]),
            extra && h('div', { styleName: '@extra' }, [extra])
          ]),
          // Note, Right
          Boolean(note || right) && h('div', { styleName: '@right' }, [
            note && h('div', { styleName: '@note' }, [note]),
            right
          ]),
          // Arrow
          h(Icon, {
            styleName: '@arrow',
            directives: [{
              name: 'show',
              value: arrow
            }],
            attrs: {
              name: `f-icon-arrow-${arrow || 'right'}`
            }
          })
        ]
      ]),

      // Footer
      footer && h('div', { styleName: '@footer' }, [footer])
    ])
  }
}
