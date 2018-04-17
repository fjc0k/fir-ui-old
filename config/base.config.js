const { resolve } = require('path')

module.exports = stylePath => ({
  alias: {
    '@': resolve(__dirname, '../src'),
    'commons.styl': resolve(__dirname, `../${stylePath}/commons.styl`)
  },
  postcss: {
    paths: [
      resolve(__dirname, `../${stylePath}`)
    ],
    modules: {
      generateScopedName: 'f-[hash:base64:3]'
    }
  }
})
