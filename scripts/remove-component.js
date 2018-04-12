const _ = require('lodash')
const cac = require('cac')
const fs = require('fs-extra')
const { execSync } = require('child_process')
const { cssExt, r, EXPORT_COMPONENTS_SCRIPT } = require('./config')

const cli = cac()

cli
  .command('*', '删除组件', ([componentName]) => {
    const name = _.kebabCase(componentName);

    [
      r('../src/components/' + name),
      r('../src/styles/variables/' + name + cssExt)
    ].forEach(path => {
      fs.removeSync(path)
    })

    const cps = fs.readJsonSync(r('../src/components.json'))
    fs.writeJsonSync(
      r('../src/components.json'),
      _.omit(cps, _.camelCase(componentName)),
      { spaces: 2 }
    )

    // Export components
    execSync('node ' + EXPORT_COMPONENTS_SCRIPT)
  })

cli.parse()
