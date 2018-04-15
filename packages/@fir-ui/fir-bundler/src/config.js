const _ = require('lodash')
const fs = require('fs-extra')
const UseConfig = require('use-config')
const parseEntry = require('./parse-entry')
const parseFormat = require('./parse-format')
const realPath = require('./real-path')

const pkgPath = realPath('package.json')
const pkg = fs.existsSync(pkgPath) ? require(pkgPath) : {}
const pkgName = pkg.name || 'app'

const defaultConfig = {
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
  replace: false,
  external: false
}

module.exports = configName => {
  const config = {
    ..._.cloneDeep(defaultConfig),
    ...(new UseConfig({
      name: configName,
      files: fs.existsSync(realPath(configName)) ? [configName] : []
    }).loadSync().config || {}),
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

  return config
}
