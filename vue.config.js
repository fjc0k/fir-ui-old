const path = require('path')

module.exports = {
  lintOnSave: true,
  css: {
    modules: true,
    loaderOptions: {
      stylus: {
        paths: [
          path.join(__dirname, 'src/styles')
        ]
      }
    }
  },
  configureWebpack: {
    resolve: {
      modules: [path.join(__dirname, 'src/styles'), 'D:/fjc0k/github/better-scroll/node_modules'],
      extensions: ['.js', '.json', '.styl', '/index.js']
    }
  }
}
