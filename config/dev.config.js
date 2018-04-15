const path = require('path')

const srcPath = path.join(__dirname, '../src')

module.exports = {
  css: {
    modules: true
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('@', srcPath)
    config.module
      .rule('styl')
      .use('stylus')
      .loader('stylus-loader')
      .tap(options => {
        options || (options = {})
        options.paths = [
          path.join(srcPath, 'styles')
        ]
        return options
      })
  }
}
