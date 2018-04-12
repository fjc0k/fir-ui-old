const path = require('path')

const r = path.resolve.bind(path, __dirname)

module.exports = {
  cssExt: '.styl',
  vueComponentExt: '.js',
  r: r,
  EXPORT_COMPONENTS_SCRIPT: r('export-components.js')
}
