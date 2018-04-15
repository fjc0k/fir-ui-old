const FLAG = '##@fir@##'

module.exports = {
  entry: {
    '': 'src/components/*/*.js'
  },
  format: 'es',
  filename: '[name].[type]',
  dest: 'lib',
  replace: {
    patterns: [{
      test: /@\/components\/[^/]+\/([^'"]+)/g,
      replace: `${FLAG}$1`
    }]
  },
  afterBundle: {
    replace: {
      [FLAG]: './'
    }
  },
  banner: false,
  postcss: {
    paths: [
      'src/styles'
    ],
    modules: {
      generateScopedName: 'f-[hash:base64:3]'
    }
  }
}
