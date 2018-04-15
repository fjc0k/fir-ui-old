module.exports = {
  entry: {
    'fir-ui': [
      'src/index.js',
      'fir'
    ]
  },
  postcss: {
    paths: [
      'src/styles'
    ],
    modules: {
      generateScopedName: 'f-[hash:base64:3]'
    }
  }
}
