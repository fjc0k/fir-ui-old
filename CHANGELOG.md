# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="0.12.0"></a>
# [0.12.0](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.11.0...fir-ui@0.12.0) (2018-04-05)


### Features

* **Textarea:** 新增 autoSize 属性 ([d5959ef](https://github.com/fjc0k/fir-ui/commit/d5959ef))




<a name="0.11.0"></a>
# [0.11.0](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.10.1...fir-ui@0.11.0) (2018-04-04)


### Bug Fixes

* bundler 暂不支持动态的 CSSModules ([eb1b2e7](https://github.com/fjc0k/fir-ui/commit/eb1b2e7))


### Features

* **组件:** 新增 divider 组件 ([4107bfb](https://github.com/fjc0k/fir-ui/commit/4107bfb))




<a name="0.10.1"></a>
## [0.10.1](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.10.0...fir-ui@0.10.1) (2018-04-04)


### Bug Fixes

* **bundler:** 修复 CSSModules 不导出类名对象的问题 ([42dd2fa](https://github.com/fjc0k/fir-ui/commit/42dd2fa))




<a name="0.10.0"></a>
# [0.10.0](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.9.0...fir-ui@0.10.0) (2018-04-04)


### Features

* **组件:** 新增 Choice 组件 ([4c29902](https://github.com/fjc0k/fir-ui/commit/4c29902))




<a name="0.9.0"></a>
# [0.9.0](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.8.0...fir-ui@0.9.0) (2018-04-03)


### Features

* **bundler:** import paths 可用相对路径 ([fc52664](https://github.com/fjc0k/fir-ui/commit/fc52664))
* **bundler:** 支持 CSSModules 及 import paths 自定义 ([6aa98d7](https://github.com/fjc0k/fir-ui/commit/6aa98d7))
* **CSSModules:** 支持 vue-css-modules ([09978cf](https://github.com/fjc0k/fir-ui/commit/09978cf))
* **eslint-config-fir:** 允许：CSSModules ([d2d3dc9](https://github.com/fjc0k/fir-ui/commit/d2d3dc9))




<a name="0.8.0"></a>
# [0.8.0](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.7.0...fir-ui@0.8.0) (2018-04-02)


### Features

* 支持 bundle 和 transform 两种模式 ([f5ce403](https://github.com/fjc0k/fir-ui/commit/f5ce403))




<a name="0.7.0"></a>
# [0.7.0](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.6.1...fir-ui@0.7.0) (2018-04-02)


### Bug Fixes

* **parse-entry:** 对有效的 moduleName 不做处理 ([46db3ef](https://github.com/fjc0k/fir-ui/commit/46db3ef))


### Features

* **parse-format:** 支持 all 指定全部格式 ([3d5c417](https://github.com/fjc0k/fir-ui/commit/3d5c417))




<a name="0.6.1"></a>
## [0.6.1](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.6.0...fir-ui@0.6.1) (2018-04-02)


### Bug Fixes

* **Switch:** 兼容 rollup-plugin-json ([fa8dcdd](https://github.com/fjc0k/fir-ui/commit/fa8dcdd))




<a name="0.6.0"></a>
# [0.6.0](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.5.0...fir-ui@0.6.0) (2018-04-02)


### Features

* **rules:** 允许注释以小写字母打头 ([b24faca](https://github.com/fjc0k/fir-ui/commit/b24faca))
* fir-packer ==> [@fir-ui](https://github.com/fir-ui)/bundler ([5300c6d](https://github.com/fjc0k/fir-ui/commit/5300c6d))




<a name="0.5.0"></a>
# [0.5.0](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.4.2...fir-ui@0.5.0) (2018-04-01)


### Features

* 使用 babel-eslint 作为解析器 ([cade1d9](https://github.com/fjc0k/fir-ui/commit/cade1d9))




<a name="0.4.2"></a>
## [0.4.2](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.4.1...fir-ui@0.4.2) (2018-03-31)




**Note:** Version bump only for package fir-ui

<a name="0.4.1"></a>
## [0.4.1](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.4.0...fir-ui@0.4.1) (2018-03-31)




**Note:** Version bump only for package fir-ui

<a name="0.4.0"></a>
# [0.4.0](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.3.0...fir-ui@0.4.0) (2018-03-31)


### Bug Fixes

* **Input|InputNumber:** 适配新版 vue-better-sync ([380dca5](https://github.com/fjc0k/fir-ui/commit/380dca5))
* **Select:** 绑定值从 value 改为 selectedIndex ([8a1f32c](https://github.com/fjc0k/fir-ui/commit/8a1f32c))


### Features

* **Switch:** 新增组件 ([f6e8976](https://github.com/fjc0k/fir-ui/commit/f6e8976))




<a name="0.3.0"></a>
# [0.3.0](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.2.5...fir-ui@0.3.0) (2018-03-30)


### Features

* **Select:** 支持任意类型的 value ，比如对象 ([65d17df](https://github.com/fjc0k/fir-ui/commit/65d17df))




<a name="0.2.5"></a>
## [0.2.5](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.2.4...fir-ui@0.2.5) (2018-03-30)




**Note:** Version bump only for package fir-ui

<a name="0.2.4"></a>
## [0.2.4](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.2.3...fir-ui@0.2.4) (2018-03-30)




**Note:** Version bump only for package fir-ui

<a name="0.2.3"></a>
## [0.2.3](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.2.2...fir-ui@0.2.3) (2018-03-30)




**Note:** Version bump only for package fir-ui

<a name="0.2.2"></a>
## [0.2.2](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.2.1...fir-ui@0.2.2) (2018-03-29)




**Note:** Version bump only for package fir-ui

<a name="0.2.1"></a>
## [0.2.1](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.2.0...fir-ui@0.2.1) (2018-03-29)




**Note:** Version bump only for package fir-ui

<a name="0.2.0"></a>
# [0.2.0](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.1.4...fir-ui@0.2.0) (2018-03-29)


### Features

* **Select:** add component ([f885ead](https://github.com/fjc0k/fir-ui/commit/f885ead))




<a name="0.1.4"></a>
## [0.1.4](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.1.3...fir-ui@0.1.4) (2018-03-29)




**Note:** Version bump only for package fir-ui

<a name="0.1.3"></a>
## [0.1.3](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.1.2...fir-ui@0.1.3) (2018-03-29)




**Note:** Version bump only for package fir-ui

<a name="0.1.2"></a>
## [0.1.2](https://github.com/fjc0k/fir-ui/compare/fir-ui@0.1.1...fir-ui@0.1.2) (2018-03-29)




**Note:** Version bump only for package fir-ui
