# ESLint config for `fir-ui`

本规则继承自 [eslint-config-xo](https://github.com/xojs/eslint-config-xo) ，并做了一些个性化设置。

## 🌟 个性化规则
- 使用两个空格缩进
- 字符串使用单引号
- 行末无逗号
- 花括号之间有空格
- 允许: if (false) return
- 允许: fn && fn()

## 📥 安装
```shell
yarn add eslint-config-fir -D
```

## 🔧 使用
`package.json`:
```json
{
  "eslintConfig": {
    "extends": "fir"
  }
}
```
