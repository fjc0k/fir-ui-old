<% if (!options.fn) { %>import CSSModules from 'vue-css-modules'
<% } else { %>import createElement from 'vue-css-modules/lib/create-element'
<% } %><%
if (options.model) {
%>import betterSync from 'vue-better-sync'
<% } if (options.fn) { %>import mergeData from 'vue-merge-data'
<% }
const mixins = []
if (options.vnode) mixins.push('extractVNodes')
if (mixins.length > 0) {
%>import { <%= mixins.join(', ') %> } from '@/mixins'
<% } %>import styles from './<%= _.kebabCase(component) %>.styl'
<% if (options.vnode && options.fn) { %>
const propDescriptors = {
  x: extractVNodes.VNodeType
}
const VNodeProps = extractVNodes.methods.extractVNodeProps(propDescriptors)
<% } %>
export default {
  name: 'f-<%= _.kebabCase(component) %>',
<% if (options.fn) { %>
  functional: true,
<% } %><% if (!options.fn) { %>
  mixins: [
    CSSModules(styles),
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

  render(h<% if (options.fn) { %>, { props, data, children<%if (options.vnode && options.fn) { %>, slots<% } %> }<% } %>) {
<% if (options.fn) { %>    h = createElement(h, styles, props)

<% } %><% if (options.vnode && !options.fn) { %>    const { x } = this.extractVNodes()
<% }
if (options.vnode && options.fn) { %>    const { x } = extractVNodes.methods.extractVNodes({
      slots: slots(),
      props,
      VNodeProps
    })
<% } %>    return h('div', <% if (options.fn) { %>mergeData(data, {
      styleName: '@<%= _.kebabCase(component) %>'
    }, children)<% } else { %>{
      styleName: '@<%= _.kebabCase(component) %>'
    }<% } %>)
  }
}
