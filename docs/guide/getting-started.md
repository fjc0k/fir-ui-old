# 快速上手


## 引入 FirUI

你可以完整引入 FirUI ，或者根据需要引入部分组件。


### 完整引入

在 main.js 中写入以下内容：

```js{3}
import Vue from 'vue'
import FirUI from 'fir-ui'
import 'fir-ui/dist/fir-ui.min.css' // 样式文件需单独引入
import App from './App.vue'

Vue.use(FirUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

以上便完成了 FirUI 的完整引入，需注意的是样式文件需单独引入。


### 按需引入
<demo-area>
  <demo-box>
  ```html
  <f-button type="primary" whiteSpace>primary</f-button>
  ```
  ::: tip 加载中状态
  添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
  :::
  </demo-box>





  <demo-box>
  ```html
  <f-button type="primary" whiteSpace>primary</f-button>
  ```
  ::: tip 加载中状态
  添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
  :::
  </demo-box>

  <demo-box>
  ```html
  <div>
    <f-button type="primary" whiteSpace>primary</f-button>
    <f-button type="danger" whiteSpace>danger</f-button>
  </div>
  ```
  ::: tip 加载中状态
  添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
  :::
  </demo-box>
</demo-area>

## 全局配置

在引入 FirUI 时，可以传入一个全局配置对象。该对象支持以下字段：

字段        | 类型   | 说明                                                                              | 默认值
------------|--------|-----------------------------------------------------------------------------------|--------
labelWidth  | String | 全局设置 Field 组件的标签宽度，可被具体的 Form 或 Field 组件的 labelWidth 属性覆盖 | 4.5em
startZIndex | Number | 设置 Popup 等组件的起始 z-index 序号                                              | 1000

具体操作如下。完整引入 FirUI：

```js
import Vue from 'vue'
import FirUI from 'fir-ui'

Vue.use(FirUI, {
  labelWidth: '5em',
  startZIndex: 6666
})
```

按需引入 FirUI：

```js
import Vue from 'vue'
import { Button } from 'fir-ui'

Vue.prototype.$FIR = {
  labelWidth: '5em',
  startZIndex: 6666
}

Vue.component(Button.name, Button)
```
