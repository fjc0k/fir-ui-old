import createElement from 'vue-css-modules/lib/create-element'
import { VNodeType } from '@/utils/helper'
import { extractVNodes } from '@/mixins'
import styles from './panel.styl'

const propDescriptors = {
  title: VNodeType,
  extra: VNodeType,
  tip: VNodeType
}
const VNodeProps = extractVNodes.methods.extractVNodeProps(propDescriptors)

export default {
  name: 'f-panel',

  functional: true,

  props: propDescriptors,

  render(h, { props, data, children, slots }) {
    h = createElement(h, styles, props)

    const { title, extra, tip } = extractVNodes.methods.extractVNodes({
      slots: slots(),
      props,
      VNodeProps
    })

    return h('div', {
      ...data,
      styleName: '@panel'
    }, [
      Boolean(title || extra) && h('div', { styleName: 'header' }, [
        h('div', { styleName: 'title' }, title),
        h('div', { styleName: 'extra' }, extra)
      ]),
      h('div', { styleName: 'body' }, children),
      tip && h('div', { styleName: 'tip' }, tip)
    ])
  }
}
