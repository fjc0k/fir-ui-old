<%
if (options.model) {
%>import betterSync from 'vue-better-sync'
<% }
const helpers = []
if (options.fn) helpers.push('genFunctionalData')
if (options.vnode) helpers.push('VNodeType')
if (helpers.length > 0) {
%>import { <%= helpers.join(', ') %> } from '@/utils/helper'
<% }
const mixins = []
if (options.vnode) mixins.push('extractVNodes')
if (mixins.length > 0) {
%>import { <%= mixins.join(', ') %> } from '@/mixins'
<% } %>import { <%= _.camelCase(component) %> as CN } from '@/components.json'
<% if (options.vnode && options.fn) { %>
const propDescriptors = {
  x: VNodeType
}
const VNodeProps = extractVNodes.methods.extractVNodeProps(propDescriptors)
<% } %>
export default {
  name: CN,
<% if (options.fn) { %>
  functional: true,
<% } %><% if (!options.fn) { %>
  mixins: [
<% if (options.model) { %>    betterSync({
      prop: 'value',
      event: 'input'
    })<%= mixins.length ? ',' : '' %>
<% } %><% if (mixins.includes('extractVNodes')) { %>    extractVNodes
<% } %>  ],
<% } %>
  props: {<% if (options.model) { %>
    value: {
      type: String,
      sync: true
    }
  <% } %>},
<% if (!options.fn) { %>
  computed: {
    classList() {
      return [
        CN
      ]
    }
  },
<% } %>
  render(h<% if (options.fn) { %>, { props, data, children<%if (options.vnode && options.fn) { %>, slots<% } %> }<% } %>) {
<% if (options.vnode && !options.fn) { %>    const { x } = this.extractVNodes()
<% }
if (options.vnode && options.fn) { %>    const { x } = extractVNodes.methods.extractVNodes({
      slots: slots(),
      props,
      VNodeProps
    })
<% } %>    return h('div'<% if (options.fn) { %>, genFunctionalData(data, {
      staticClass: CN
    })<% } %>)
  }
}