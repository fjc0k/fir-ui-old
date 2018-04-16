import { forOwn, castArray, cloneDeep } from 'lodash'
import * as components from '@/components'
import { ensureBrowser } from '@/utils/env'

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

ensureBrowser(({ Vue }) => {
  Vue && install(Vue)
})

export default {
  components,
  install
}
