const _ = require('lodash')
const fs = require('fs-extra')
const path = require('path')
const uglify = require('rollup-plugin-uglify')
const babel = require('rollup-plugin-babel')
const postcss = require('rollup-plugin-postcss')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const alias = require('rollup-plugin-alias')
const json = require('rollup-plugin-json')
const preset = require('@fir-ui/babel-preset-library')
const createBanner = require('./create-banner')
const rollup = require('./rollup')

module.exports = (config = require('./config')) => {
  const cssProcessed = {}

  config.clear && fs.emptyDirSync(config.dest)

  _.forOwn(config.entry, ([filePath, moduleName], name) => {
    _.forOwn(config.format, (suffix, format) => {
      const compress = format.endsWith('-min')
      format = format.split('-')[0]
      const banner = createBanner(config.banner, config.pkg) || ''
      const inline = format === 'umd' ? true : config.inline
      rollup({
        input: filePath,
        treeshake: {
          pureExternalModules: !config.sideEffects
        },
        plugins: [
          alias({
            ...config.alias,
            resolve: ['', '/index.js', ...config.resolve]
          }),
          inline && resolve({
            module: true,
            preferBuiltIns: true,
            extensions: config.resolve
          }),
          commonjs(),
          json(),
          postcss({
            extract: true,
            minimize: compress,
            sourceMap: config.sourceMap,
            ...config.postcss,
            onExtract(getExtracted) {
              const id = `${filePath}-${compress ? '-min' : ''}`
              if (!cssProcessed[id]) {
                const cssFilePath = path.join(
                  config.dest,
                  config.filename
                    .replace(/\[name\]/g, name)
                    .replace(/\[suffix\]/g, compress ? '.min' : '')
                    .replace(/\[type\]/g, 'css')
                )
                const { code, map } = getExtracted()
                fs.writeFile(cssFilePath, banner + code, 'utf8')
                config.sourceMap && fs.writeFile(`${cssFilePath}.map`, map, 'utf8')
                cssProcessed[id] = true
              }
              return false
            }
          }),
          babel({
            include: '**/*.js',
            exclude: 'node_modules/**',
            babelrc: false,
            presets: [
              [preset, {
                ...config.babel,
                env: { modules: false }
              }]
            ]
          }),
          compress && uglify({
            output: {
              preamble: banner
            }
          })
        ]
      }, {
        format: format,
        name: moduleName,
        sourcemap: config.sourceMap,
        banner: banner,
        file: path.join(
          config.dest,
          config.filename
            .replace(/\[name\]/g, name)
            .replace(/\[suffix\]/g, suffix)
            .replace(/\[type\]/g, 'js')
        )
      })
    })
  })
}
