const webpack = require('webpack')
const webpackConfig = require('./webpack-config')

module.exports = config => {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig(config), (err, stats) => {
      if (err) return reject(err)
      resolve(stats)
    })
  })
}
