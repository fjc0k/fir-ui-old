const path = require('path')

module.exports = {
  entry: 'src/components/button/button.js',
  format: 'cjs',
  postcss: {
    modules: {
      globalModulePaths: [/src\/styles/],
      generateScopedName: 'f-[hash:base64:3]'
    },
    use: [['stylus', {
      paths: [
        path.join(__dirname, 'src/styles')
      ]
    }]]
  }
}
