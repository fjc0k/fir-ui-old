const { forOwn } = require('lodash')
const baseConfig = require('./base.config')('src/styles')

module.exports = {
  css: {
    modules: true
  },
  chainWebpack(config) {
    forOwn(baseConfig.alias, (value, key) => {
      config.resolve.alias.set(key, value)
    })
    config.module
      .rule('styl')
      .use('stylus')
      .loader('stylus-loader')
      .tap(options => {
        options || (options = {})
        options.paths = baseConfig.postcss.paths
        return options
      })
  }
}
