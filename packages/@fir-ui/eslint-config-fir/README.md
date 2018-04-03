# ESLint config for `fir-ui`

本规则继承自 [eslint-config-xo](https://github.com/xojs/eslint-config-xo) ，并做了一些个性化设置。

## 🌟 个性化设置
- 使用 `babel-eslint` 作为解析器
- 使用两个空格缩进
- 字符串使用单引号
- 行末无逗号
- 花括号之间有空格
- 允许: if (falsy) return
- 允许: fn && fn()
- 允许：CSSModules

## 📥 安装
```shell
yarn add @fir-ui/eslint-config-fir -D
```

## 🔧 使用
`package.json`:
```json
{
  "eslintConfig": {
    "extends": "@fir-ui/fir"
  }
}
```
