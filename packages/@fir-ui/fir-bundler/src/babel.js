const { transform } = require('@babel/core')
const preset = require('@fir-ui/babel-preset-library')

module.exports = (code, options = {}) => {
  return transform(code, {
    presets: [[preset, options]]
  })
}
