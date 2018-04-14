import '@/styles/commons.styl'
import { forOwn, castArray, cloneDeep } from 'lodash'
import * as components from '@/components'

function install(Vue) {
  if (install.installed) return

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

  install.installed = true
}

export default {
  components,
  install
}
