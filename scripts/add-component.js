/* eslint new-cap: 0, capitalized-comments: 0 */

const _ = require('lodash')
const cac = require('cac')
const path = require('path')
const fs = require('fs-extra')
const { execSync } = require('child_process')
const { cssExt, vueComponentExt } = require('./config')

const TEMPLATES_PATH = path.resolve(__dirname, './templates')

const r = path.resolve.bind(path, __dirname)
const t = _.flow([
  path.join.bind(path, TEMPLATES_PATH),
  fs.readFileSync,
  template => values => _.template(template)(values).trim() + '\n'
])

const EXPORT_COMPONENTS_SCRIPT = r('export-components.js')

const COMPONENT_JS_PATH = r('../src/components')
const COMPONENT_CSS_PATH = r('../src/styles/components')
const COMPONENT_VAR_CSS_PATH = r('../src/styles/settings/variables')
const COMPONENTS_JSON_FILE = r('../src/components.json')
const SELECTORS_CSS_FILE = r('../src/styles/settings/selectors' + cssExt)

const COMPONENT_JS_TEMPLATE = t('component' + vueComponentExt)
const COMPONENT_CSS_TEMPLATE = t('component' + cssExt)
const COMPONENT_VAR_CSS_TEMPLATE = t('component.var' + cssExt)
const SELECTORS_CSS_TEMPLATE = t('selectors' + cssExt)

const cli = cac()

cli
  .command('*', '新增组件', ([componentName], options) => {
    if (!componentName) {
      console.error('\n✘ 组件名不能为空\n')
      return
    }

    const cName = _.camelCase(componentName)
    const kName = _.kebabCase(componentName)

    // components.json
    const components = fs.readJsonSync(COMPONENTS_JSON_FILE)
    if (components[cName] && !options.force) return
    components[cName] = `f-${kName}`
    fs.writeJsonSync(COMPONENTS_JSON_FILE, components, {
      spaces: 2
    })

    // component.js
    fs.outputFileSync(
      path.join(COMPONENT_JS_PATH, options.parent || kName, kName + vueComponentExt),
      COMPONENT_JS_TEMPLATE({ options, component: componentName })
    )

    // component.scss
    fs.outputFileSync(
      path.join(COMPONENT_CSS_PATH, kName + cssExt),
      COMPONENT_CSS_TEMPLATE({ options, component: componentName })
    )

    // component.var.scss
    fs.outputFileSync(
      path.join(COMPONENT_VAR_CSS_PATH, kName + cssExt),
      COMPONENT_VAR_CSS_TEMPLATE({ options, component: componentName })
    )

    // selectors.scss
    fs.outputFileSync(
      SELECTORS_CSS_FILE,
      SELECTORS_CSS_TEMPLATE({ options, components })
    )

    // Export components
    execSync('node ' + EXPORT_COMPONENTS_SCRIPT)
  })
  .option('parent', {
    desc: '父组件是?',
    type: 'string'
  })
  .option('model', {
    desc: '引入 vue-better-sync ?',
    type: 'boolean'
  })
  .option('vnode', {
    desc: '引入 extractVNodes ?',
    type: 'boolean'
  })
  .option('fn', {
    desc: '函数组件?',
    type: 'boolean'
  })
  .option('force', {
    desc: '组件存在，覆盖之?',
    type: 'boolean'
  })

cli.parse()
