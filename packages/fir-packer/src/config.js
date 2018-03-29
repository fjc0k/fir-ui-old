const fs = require('fs-extra')
const path = require('path')

exports.realPath = path.resolve.bind(path, process.cwd())

exports.pkg = fs.readJsonSync(
  exports.realPath('package.json'), { throws: false }
) || {}

exports.browsers = exports.pkg.browsers || ['iOS 6', 'Android 4.0']
