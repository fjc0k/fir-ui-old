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
  }
}
