const { rollup } = require('rollup')

module.exports = async (inputOptions, outputOptions) => {
  const bundle = await rollup(inputOptions)
  const result = await bundle.write(outputOptions)
  return result
}
