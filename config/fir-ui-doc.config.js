const baseConfig = require('./base.config')('src/styles/doc')

module.exports = Object.assign(baseConfig, {
  entry: {
    'fir-ui': [
      'src/index.js',
      'fir'
    ]
  },
  format: 'umd-min',
  dest: 'docs/.vuepress/fir-ui'
})
