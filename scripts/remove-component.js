const _ = require('lodash')
const cac = require('cac')
const fs = require('fs-extra')
const { execSync } = require('child_process')
const { cssExt, r, EXPORT_COMPONENTS_SCRIPT } = require('./config')

const cli = cac()

cli
  .command('*', 'Remove component', ([componentName]) => {
    const name = _.kebabCase(componentName);

    [
      r('../src/components/' + name),
      r('../src/styles/variables/' + name + cssExt)
    ].forEach(path => {
      fs.removeSync(path)
    })

    // Export components
    execSync('node ' + EXPORT_COMPONENTS_SCRIPT)
  })

cli.parse()
