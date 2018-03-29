const { declare } = require('@babel/helper-plugin-utils')
const presetEnv = require('@babel/preset-env')

const transformOptionalChaining = require('@babel/plugin-proposal-optional-chaining')
const transformClassProperties = require('@babel/plugin-proposal-class-properties')
const transformObjectSpread = require('@babel/plugin-proposal-object-rest-spread')
const transformLodash = require('babel-plugin-lodash')
const transformAsync = require('fast-async')

module.exports = declare(
  (api, options = {}) => {
    api.assertVersion(7)

    const {
      loose = true,
      useBuiltIns = true,
      lodash = true,
      modules = (
        process.env.VUE_CLI_BABEL_TRANSPILE_MODULES ?
          'commonjs' :
          false
      ),
      targets = (
        process.env.VUE_CLI_BABEL_TARGET_NODE ?
          { node: 'current' } :
          undefined
      )
    } = options

    const presets = [
      // Env
      [presetEnv, {
        modules,
        loose,
        targets,
        // No polyfills
        useBuiltIns: false,
        // For fast-async
        exclude: ['transform-regenerator', 'transform-async-to-generator']
      }]
    ]

    const plugins = [
      // Async/Await
      [transformAsync, { spec: true }],
      // Optional chaining
      [transformOptionalChaining, { loose, useBuiltIns }],
      // Object spread
      [transformObjectSpread, { loose, useBuiltIns }],
      // Class properties
      [transformClassProperties, { loose, useBuiltIns }]
    ]

    // Lodash
    if (lodash) plugins.push(transformLodash)

    return { presets, plugins }
  }
)
