#!/usr/bin/env node
const _ = require('lodash')
const cac = require('cac')
const klawSync = require('klaw-sync')
const path = require('path')
const babel = require('./babel')
const webpack = require('./webpack')
const { realPath, pkg } = require('./config')

const packageName = pkg.name || 'app'
const cli = cac()

cli
  .command('*', {
    desc: 'JS打包机',
    alias: ['pack', 'bundle']
  }, (_, { entry, outDir, fileName, libraryName, format, sourceMap }) => {
    console.log('\n✔ JS打包中...\n')
    webpack({
      entry: { [fileName]: entry },
      outDir,
      library: libraryName,
      format,
      sourceMap
    }).then(
      stats => {
        console.log(
          stats.toString({
            chunks: false,
            colors: true
          }),
          '\n\n✔ JS打包完成！\n'
        )
      },
      console.error
    )
  })
  .option('entry', {
    desc: '入口文件',
    default: 'src/index.js'
  })
  .option('outDir', {
    desc: '打包至文件夹',
    default: 'dist'
  })
  .option('fileName', {
    desc: '打包文件名',
    default: _.kebabCase(packageName)
  })
  .option('libraryName', {
    desc: '包名',
    default: _.camelCase(packageName)
  })
  .option('format', {
    desc: '目标文件类型',
    default: 'cjs,umd,cjs-min,umd-min'
  })
  .option('sourceMap', {
    desc: '生成 sourceMap ?',
    type: 'boolean',
    default: true
  })

cli
  .command('compile', 'JS编译机', (_, { src, to }) => {
    console.log('\n✔ JS编译中...\n')
    const _src = realPath(src)
    const _to = realPath(to)
    const files = klawSync(_src, {
      nodir: true,
      filter: ({ path }) => path.endsWith('.js')
    })
    Promise
      .all(
        files.map(file => babel(
          file.path,
          path.resolve(_to, path.relative(_src, file.path))
        ))
      )
      .then(
        () => console.log('✔ JS编译完成！\n'),
        console.error
      )
  })
  .option('src', {
    desc: '待编译文件夹',
    default: 'src'
  })
  .option('to', {
    desc: '目标文件夹',
    default: 'lib'
  })

cli.parse()
