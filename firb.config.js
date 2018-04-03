module.exports = {
  entry: {
    'fir-ui': ['src/index.js', 'fir']
  },
  format: 'all',
  css: {
    paths: ['src/styles'],
    modules: {
      generateScopedName: 'f-[hash:base64:3]'
    }
  }
}
