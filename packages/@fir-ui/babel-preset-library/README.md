# Babel preset for `fir-ui`

## 🌟 特性

- **不会引入任何的 polyfills** ，因此天然适合用来开发模块或包，而不是一个网站。

- **支持 Object spread** ，类似 `const obj = { x: 0, ...y }` 会被转换为 `const obj = Object.assign({ x: 0 }, y)`。如果目标环境不支持 Object.assign ，你需自行引入 polyfill 。

- **支持 Async/Await** ，这里引入了 [fast-async](https://github.com/MatAtBread/fast-async) 插件，它用 Promise 模拟了 Async/Await 调用，体积更小，性能更优。如果目标环境不支持 Promise ，你需自行引入 polyfill 。

- **支持可选链式调用**，就像这样 `const x = obj?.name?.x` ，它的效果等同为：`const x = obj && obj.name && obj.name.x` ，一个蛮不错的语法糖。

- **默认支持按需导入 lodash** ，因此 `import { isNumber } from 'lodash'` 会被转换为 `import isNumber from 'lodash/isNumber'` 。

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
