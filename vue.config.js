const path = require('path')

module.exports = {
  lintOnSave: true,
  css: {
    modules: true,
    localIdentName: 'f-[hash:base64:3]',
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
      extensions: ['.js', '.json', '.ts', '.styl', '/index.js']
    }
  }
}
