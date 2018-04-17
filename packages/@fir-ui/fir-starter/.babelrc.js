const resolve = require.resolve

module.exports = {
  presets: [
    [resolve('babel-preset-poi'), {
      jsx: 'vue'
    }]
  ],
  plugins: [
    [resolve('babel-plugin-import'), {
      libraryName: 'fir-ui'
    }],
    [resolve('babel-plugin-lodash')]
  ]
}
