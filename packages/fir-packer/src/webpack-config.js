const _ = require('lodash')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const autoPrefixer = require('autoprefixer')
const babelConfig = require('./babel-config')
const { browsers, realPath, isDev } = require('./config')

const formats = {
  cjs: ['.cjs', 'commonjs2', false],
  umd: ['', 'umd', false],
  'cjs-min': ['.cjs.min', 'commonjs2', true],
  'umd-min': ['.min', 'umd', true]
}

module.exports = bundles => {
  bundles = _.flatten(
    _.castArray(bundles).map(bundle => {
      return (_.isString(bundle.format) ? bundle.format.split(',') : bundle).map(
        format => ({ ...bundle, format })
      )
    })
  ).filter(bundle => Boolean(formats[bundle.format]))

  return (
    bundles.map(({
      library,
      entry,
      format,
      outDir,
      sourceMap = true,
      alias = {}
    }) => {
      outDir = realPath(outDir)

      return {
        mode: isDev ? 'development' : 'production',
        entry: _.mapValues(entry, file => realPath(file)),
        output: {
          path: outDir,
          filename: `[name]${formats[format][0]}.js`,
          library,
          libraryTarget: formats[format][1]
        },
        resolve: {
          alias: {
            '@': realPath('src'),
            'vue-better-sync': 'vue-better-sync/dist/vue-better-sync.cjs.js',
            ...alias
          }
        },
        externals: format.startsWith('cjs') ? [nodeExternals()] : [],
        optimization: {
          minimize: formats[format][2]
        },
        devtool: sourceMap && (isDev ? 'eval-source-map' : 'source-map'),
        module: {
          rules: [{
            test: /\.js$/,
            exclude: /node_modules\/.*/,
            use: [{
              loader: 'babel-loader',
              options: {
                ...babelConfig({ modules: false }),
                cacheDirectory: true
              }
            }]
          }, {
            test: /\.(styl|css)$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  sourceMap,
                  importLoaders: 1,
                  minimize: formats[format][2]
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: isDev && sourceMap,
                  plugins: [
                    autoPrefixer({ browsers })
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: { sourceMap: isDev && sourceMap }
              }
            ]
          }]
        },
        plugins: [
          new CleanWebpackPlugin(['*.*'], {
            root: outDir,
            verbose: false
          }),
          new MiniCssExtractPlugin({
            filename: `[name]${formats[format][2] ? '.min' : ''}.css`
          })
        ]
      }
    })
  )
}
