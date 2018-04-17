module.exports = {
  babel: {
    babelrc: false,
    jsx: 'vue',
    plugins: [
      [require.resolve('babel-plugin-import'), {
        libraryName: 'fir-ui',
        style: componentName => `${componentName}.css`
      }],
      [require.resolve('babel-plugin-lodash')]
    ]
  }
}
