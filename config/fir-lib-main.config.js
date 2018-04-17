const baseConfig = require('./base.config')('src/styles')
const fs = require('fs-extra')

const FLAG = '##@fir@##'

module.exports = Object.assign(baseConfig, {
  entry: {
    '': 'src/components/*/*.js'
  },
  format: 'es',
  banner: false,
  dest: 'lib',
  filename({ type, name }) {
    return [
      type === 'css' ? 'styles/' : '',
      name,
      '.',
      type
    ].join('')
  },
  replace: {
    patterns: [{
      test: /@\/components\/[^/]+\/([^'"]+)/g,
      replace: `${FLAG}$1`
    }, {
      test: /@\/(mixins|utils)([^'"]*)/g,
      replace: `${FLAG}$1$2`
    }]
  },
  postBundle({ type, name, file, content }) {
    if (type === 'js') {
      // Ignore helper file
      if (name === 'common') {
        fs.removeSync(file)
        return
      }

      // Transform to relative path
      content = content.replace(
        new RegExp(FLAG, 'g'),
        './'
      )

      // Import styles
      content = [
        `import './styles/common.css'`,
        `import './styles/${name}.css'`,
        content
      ].join('\n')

      return content
    }
  }
})
