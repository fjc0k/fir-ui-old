const baseConfig = require('./base.config')('src/styles')

module.exports = Object.assign(baseConfig, {
  entry: {
    'fir-ui': [
      'src/index.js',
      'fir'
    ]
  }
})
