module.exports = {
  presets: [
    [require.resolve('babel-preset-poi'), {
      jsx: 'vue'
    }]
  ],
  plugins: [
    [require.resolve('babel-plugin-import'), {
      libraryName: 'fir-ui',
      style: componentName => `${componentName}.css`
    }],
    [require.resolve('babel-plugin-lodash')]
  ]
}
