const _ = require('lodash')
const UseConfig = require('use-config')
const parseEntry = require('./parse-entry')
const parseFormat = require('./parse-format')
const realPath = require('./real-path')

const pkgPath = realPath('package.json')
const pkg = require('fs').existsSync(pkgPath) ? require(pkgPath) : {}
const pkgName = pkg.name || 'app'

const css = {
  paths: [],
  extensions: ['.css', '.styl', '.less', '.scss', '.sass']
}

const config = {
  entry: {
    [pkgName]: ['src/index.js', pkgName]
  },
  dest: 'dist',
  format: ['es', 'cjs', 'umd', 'umd-min'],
  banner: true,
  css: {
    paths: []
  },
  alias: {
    '@': 'src'
  },
  filename: '[name][suffix].[type]',
  babel: {},
  resolve: ['.js', '.json'],
  sideEffects: false,
  sourceMap: false,
  clear: true,
  inline: false,
  ...(new UseConfig({ name: 'firb' }).loadSync().config || {}),
  pkg: pkg
}

config.entry = config.entry ? parseEntry(config.entry) : {}
config.format = config.format ? parseFormat(config.format) : {}
config.dest = realPath(config.dest)
config.css.paths = config.css.paths.map(path => realPath(path))
config.css = {
  ...css,
  ...config.css
}

if (_.isPlainObject(config.alias)) {
  config.alias = _.mapValues(
    config.alias,
    src => realPath(src)
  )
}

module.exports = config
