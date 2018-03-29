const babel = require('@babel/core')
const fs = require('fs-extra')
const klawSync = require('klaw-sync')
const path = require('path')
const babelConfig = require('./babel-config')
const { realPath } = require('./config')

module.exports = ({ src, to }) => {
  const _src = realPath(src)
  const _to = realPath(to)

  // 清空输出目录
  try {
    fs.emptyDirSync(_to)
  } catch (e) {
    console.warn(e)
  }

  const files = klawSync(_src, { nodir: true })

  return (
    Promise.all(
      files.map(file => {
        return new Promise((resolve, reject) => {
          const targetFile = path.resolve(_to, path.relative(_src, file.path))
          if (file.path.endsWith('.js')) {
            babel.transformFile(file.path, {
              ...babelConfig(),
              babelrc: false
            }, (err, { code }) => {
              if (err) return reject(err)
              fs.outputFile(
                targetFile,
                code,
                err => err ? reject(err) : resolve()
              )
            })
          } else {
            fs.copy(
              file.path,
              targetFile,
              err => err ? reject(err) : resolve()
            )
          }
        })
      })
    )
  )
}
