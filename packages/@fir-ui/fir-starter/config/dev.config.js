const importOnDemand = require('babel-plugin-import')

module.exports = {
  babel: {
    babelrc: false,
    jsx: 'vue',
    plugins: [
      [importOnDemand, {
        libraryName: 'fir-ui',
        style: componentName => `${componentName}.css`
      }]
    ]
  }
}
