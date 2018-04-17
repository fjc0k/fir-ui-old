const baseConfig = require('./base.config')('src/styles')
const path = require('path')

const srcPath = path.resolve(__dirname, '../src')

module.exports = Object.assign(baseConfig, {
  entry: {
    '': 'src/{utils,mixins}/*.js'
  },
  external: '**',
  format: 'es',
  banner: false,
  dest: 'lib',
  clear: false,
  filename({ file }) {
    return file.replace(srcPath, '')
  }
})
