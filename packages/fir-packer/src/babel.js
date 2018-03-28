const babel = require('@babel/core')
const fs = require('fs-extra')
const babelConfig = require('./babel-config')

module.exports = (from, to) => {
  return new Promise((resolve, reject) => {
    babel.transformFile(from, {
      ...babelConfig(),
      babelrc: false
    }, (err, { code }) => {
      if (err) return reject(err)
      fs.outputFile(to, code, err => {
        if (err) return reject(err)
        resolve()
      })
    })
  })
}
