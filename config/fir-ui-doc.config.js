module.exports = {
  entry: {
    'fir-ui': [
      'src/index-doc.js',
      'fir'
    ]
  },
  format: 'umd-min',
  dest: 'docs/.vuepress/fir-ui',
  postcss: {
    paths: [
      'src/styles/doc'
    ],
    modules: {
      generateScopedName: 'f-[hash:base64:3]'
    }
  }
}
