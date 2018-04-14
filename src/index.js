import '@/styles/commons.styl'
import { forOwn, castArray, cloneDeep } from 'lodash'
import * as components from '@/components'
import { inBrowser } from '@/utils/env'

function install(Vue) {
  if (install.installed) return

  install.installed = true

  Vue.prototype.$log = (...args) => console.log.apply(
    console,
    args.map(cloneDeep)
  )

  forOwn(components, component => {
    if (component.alias) {
      castArray(component.alias).forEach(
        name => Vue.component(name, component)
      )
    }
    Vue.component(component.name, component)
  })
}

if (inBrowser && window.Vue) {
  window.Vue.use(install)
}

export default {
  components,
  install
}
