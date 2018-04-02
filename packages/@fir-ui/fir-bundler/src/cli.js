#!/usr/bin/env node
const cac = require('cac')

const cli = cac()

cli
  .command('*', {
    alias: 'build',
    desc: 'Bundle all assets'
  }, () => {
    require('./bundle')()
  })

cli
  .command('transform', 'Transform javascript files', (_, { src, to }) => {
    require('./babel')(src, to)
  })
  .option('src', {
    desc: 'Source path',
    default: 'src/**/*.js'
  })
  .option('to', {
    desc: 'Target path',
    default: 'lib'
  })

cli.parse()
