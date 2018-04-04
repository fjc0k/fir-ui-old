import { forOwn, castArray } from 'lodash'
import * as components from '@/components'
import '@/styles/commons.styl'

function install(Vue) {
  if (install.installed) return

  Vue.prototype.$log = console.log

  forOwn(components, component => {
    if (component.alias) {
      castArray(component.alias).forEach(
        name => Vue.component(name, component)
      )
    }
    Vue.component(component.name, component)
  })

  install.installed = true
}

Object.defineProperty(components, 'install', { value: install })

export default components
