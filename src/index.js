import { forOwn } from 'lodash'
import * as components from '@/components'
import '@/styles/commons.styl'

function install(Vue) {
  if (install.installed) return

  Vue.prototype.$log = console.log

  forOwn(components, component => Vue.component(component.name, component))

  install.installed = true
}

Object.defineProperty(components, 'install', { value: install })

export default components
