# fir-date-formatter

一个短小精悍的日期时间格式化工具。

## 📥 安装

### Node
```shell
yarn add @fir-ui/date-formatter
```

### CDN

```html
<script src="//unpkg.com/@fir-ui/date-formatter"></script>
```

CDN 引入时，可通过全局变量 `firDateFormatter` 使用。

## 🔧 使用

### 基本用法：传入 Date 实例

```javascript
var date = new Date()

console.log(
  firDateFormatter(
    date,
    'yy年mm月dd日 hh时ii分ss秒l毫秒'
  )
)
```

输出类似这样：

```shell
18年04月12日 06时13分53秒390毫秒
```

### 高级用法：自定义占位符及其对应的值

```javascript
console.log(
  firDateFormatter(
    {
      x: 1000,
      y: 2,
      z: 1002
    },
    'x + y = z (i > 0)'
  )
)
```

输出类似这样：

```shell
1000 + 2 = 1002 (i > 0)
```

## 🔡 日期时间占位符

占位符 | 说明                 | 例子
-------|----------------------|----------------------------------------------------------
y      | 年 (`y`ear)          | `y` --> `2018`<br />`yy` --> `18`<br />`yyyy` --> `2018`
m      | 月 (`m`onth)         | `m` --> `5`<br />`mm` --> `05`
d      | 日 (`d`ay)           | `d` --> `4`<br />`dd` --> `04`
h      | 时 (`h`our)          | `h` --> `8`<br />`hh` --> `08`
i      | 分 (m`i`nute)        | `i` --> `6`<br />`ii` --> `06`
s      | 秒 (`s`econd)        | `s` --> `1`<br />`ss` --> `01`
l      | 毫秒 (mi`l`lisecond) | `l` --> `750`
