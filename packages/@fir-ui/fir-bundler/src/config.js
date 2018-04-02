const _ = require('lodash')
const UseConfig = require('use-config')
const parseEntry = require('./parse-entry')
const parseFormat = require('./parse-format')
const realPath = require('./real-path')

const pkgPath = realPath('package.json')
const pkg = require('fs').existsSync(pkgPath) ? require(pkgPath) : {}
const pkgName = pkg.name || 'app'

const config = {
  entry: {
    [pkgName]: ['src/index.js', pkgName]
  },
  dest: 'dist',
  format: ['es', 'cjs', 'umd', 'umd-min'],
  banner: true,
  postcss: {},
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

if (_.isPlainObject(config.alias)) {
  config.alias = _.mapValues(
    config.alias,
    src => realPath(src)
  )
}

module.exports = config
