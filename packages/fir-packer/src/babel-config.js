const { browsers } = require('./config')

module.exports = ({ modules = 'commonjs' } = {}) => ({
  plugins: [
    [
      require.resolve('fast-async'),
      { spec: true }
    ],
    [
      require.resolve('@babel/plugin-proposal-optional-chaining'),
      { loose: true }
    ],
    [
      require.resolve('@babel/plugin-proposal-object-rest-spread'),
      {
        useBuiltIns: true,
        loose: true
      }
    ],
    [
      require.resolve('@babel/plugin-proposal-class-properties'),
      { loose: true }
    ],
    [
      require.resolve('babel-plugin-lodash')
    ]
  ],
  presets: [
    [
      require('@babel/preset-env').default,
      {
        modules,
        loose: true,
        useBuiltIns: false,
        targets: { browsers: browsers },
        exclude: ['transform-regenerator', 'transform-async-to-generator']
      }
    ]
  ]
})
