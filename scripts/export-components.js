const _ = require('lodash')
const path = require('path')
const fs = require('fs-extra')
const globby = require('globby')
const { vueComponentExt } = require('./config')

const SRC_PATH = path.resolve(__dirname, '../src')
const COMPONENTS_PATH = path.join(SRC_PATH, 'components')
const COMPONENTS_JS_FILE = path.join(SRC_PATH, 'components' + vueComponentExt)

const components = globby.sync([`*/*${vueComponentExt}`, `!common/common${vueComponentExt}`], {
  cwd: COMPONENTS_PATH
})

const exportCodes = components.map(componentPath => {
  const info = path.parse(componentPath)
  const ComponentName = _.upperFirst(_.camelCase(info.name))
  componentPath = componentPath.replace(vueComponentExt, '')
  return `export { default as ${ComponentName} } from '@/components/${componentPath}'`
})

fs.outputFileSync(
  COMPONENTS_JS_FILE,
  exportCodes.join('\n') + '\n'
)

console.log('\nExport components success!\n')
