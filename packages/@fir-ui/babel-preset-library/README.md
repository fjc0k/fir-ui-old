# Babel preset for `fir-ui`

## 📦 包括的预设/插件
- [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)

- [@babel/plugin-proposal-object-rest-spread](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-object-rest-spread)
  - 如：`const x = { ...y, z }`

- [@babel/plugin-proposal-class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties)
  - 如：`class Test { x = 1 }`

- [@babel/plugin-proposal-optional-chaining](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-optional-chaining)
  - 如：`const n = x?.y.z?.a`

- [fast-async](https://github.com/MatAtBread/fast-async)
  - 如：`async function list(page) { return await fetch(page) }`

- [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash)
  - 如：`import { curry } from 'lodash'`


## 📥 安装
```shell
yarn add @fir-ui/babel-preset-library -D
```


## 🔧 使用
```json
{
  "presets": [
    [
      "@fir-ui/library",
      {
        "loose": true
      }
    ]
  ]
}
```
#### 配置
选项  |  类型  | 默认值 | 说明
:---: | :---: | :---: | :----
loose | Boolean | true | `true`：开启宽松模式，生成的代码更简单直接，也更快。<br /><br />`false`：生成的代码更符合最新的 ECMAScript 规范，但较笨重。
polyfill | Boolean | false | `true`：为出现在代码中的，但是在目标环境（浏览器、 Node 等）不支持的语法或对象自动引入垫片。<br /><br />`false`：不自动引入垫片。
lodash | Boolean | true | 设为 `true` 即可按需加载 lodash 啦，具体用法看这里：[lodash/babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash)
env | Object | ==> | 这是 [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env) 的默认配置，你可在 `env` 里覆盖它们：<br />{<!--DONT-REMOVE:eyBsb29zZTogJ+etieS6juS4iumdoueahCBsb29zZSDpgInpobknLCB1c2VCdWlsdEluczogJ+S4iumdoueahCBwb2x5ZmlsbCDkuLogdHJ1ZSDvvIzliJnkuLogdXNhZ2Ug77yM5ZCm5YiZ5Li6IGZhbHNlJywgbW9kdWxlczogZmFsc2UsIGV4Y2x1ZGU6IFsndHJhbnNmb3JtLXJlZ2VuZXJhdG9yJywgJ3RyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3InXSB9--><br />&nbsp;&nbsp;&nbsp;&nbsp;"loose": "等于上面的 loose 选项",<br />&nbsp;&nbsp;&nbsp;&nbsp;"useBuiltIns": "上面的 polyfill 为 true ，则为 usage ，否则为 false",<br />&nbsp;&nbsp;&nbsp;&nbsp;"modules": false,<br />&nbsp;&nbsp;&nbsp;&nbsp;"exclude": [<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"transform-regenerator",<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"transform-async-to-generator"<br />&nbsp;&nbsp;&nbsp;&nbsp;]<br />}
