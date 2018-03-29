const _ = require('lodash')
const path = require('path')
const fs = require('fs-extra')
const klaw = require('klaw')
const { vueComponentExt } = require('./config')

const SRC_PATH = path.resolve(__dirname, '../src')
const COMPONENTS_PATH = path.join(SRC_PATH, 'components')
const COMPONENTS_JS_FILE = path.join(SRC_PATH, 'components' + vueComponentExt)

const items = []
const vueComponentExtLength = vueComponentExt.length

klaw(COMPONENTS_PATH, {
  depthLimit: 1
})
  .on('data', item => {
    if (_.endsWith(item.path, vueComponentExt)) {
      items.push(item.path)
    }
  })
  .on('end', () => {
    const raw = items.map(item => {
      return {
        relative: '@/' + path.relative(SRC_PATH, item).slice(0, -vueComponentExtLength).replace(/\\|\/{2,}/g, '/'),
        ...path.parse(item)
      }
    })
    const components = raw.map(item => [
      _.camelCase(item.name),
      item.relative
    ])
    fs.outputFileSync(
      COMPONENTS_JS_FILE,
      components.map(([name, path]) => {
        return `export { default as ${name} } from '${path}'`
      }).join('\n') + '\n'
    )
  })
