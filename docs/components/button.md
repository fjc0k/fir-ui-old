# Button 按钮

按钮用于触发操作。

## 何时使用

提交表单，触发相应的业务逻辑等。

## 代码演示

<style>
  div:not(#whiteSpace) > [data-component-button] {
    margin: 5px;
  }
</style>

<demo-area>

<demo-box>
```html
<div>
  <f-button @click="name='kk'">{{ name }}默认按钮</f-button>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="warning">警告按钮</f-button>
  <f-button type="danger">危险按钮</f-button>
  <f-button type="info">信息按钮</f-button>
</div>

<script>
  export default {
    data: function () {
      return {
        name: '方剑成'
      }
    }
  }
</script>
```
::: tip 按钮类型
以上按钮类型按需选用，主要按钮在同一个操作区域应当最多出现一次。
:::
</demo-box>

<demo-box>
```html
<div>
  <f-button icon="f-icon-gear">设置</f-button>
  <f-button type="primary" icon="f-icon-search-strong">搜索</f-button>
</div>
```
::: tip 图标按钮
当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。

如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。
:::
</demo-box>

<demo-box>
```html
<div>
  <f-button>正常</f-button>
  <f-button plain>朴素</f-button><br />
  <f-button type="primary">正常</f-button>
  <f-button type="primary" plain>朴素</f-button>
</div>
```
::: tip 朴素按钮
添加 `plain` 属性使按钮朴素化。
:::
</demo-box>

<demo-box>
```html
<div>
  <f-button>可用</f-button>
  <f-button disabled>禁用</f-button><br />
  <f-button type="primary">可用</f-button>
  <f-button type="primary" disabled>禁用</f-button>
</div>
```
::: tip 禁用状态
设置 `disabled` 属性可使按钮不可点击，同时添加不可用样式。
:::
</demo-box>

<demo-box>
```html
<div>
  <f-button type="primary" block>确认</f-button>
  <f-button block>取消</f-button>
</div>
```
::: tip 长条按钮
设置 `block` 属性拉伸按钮占据整个可视宽度。
:::
</demo-box>

<demo-box>
```html
<div id="whiteSpace">
  <f-button type="primary" block whiteSpace>确认</f-button>
  <f-button block whiteSpace>取消</f-button>
</div>
```
::: tip 按钮四周留白
设置 `whiteSpace` 属性可在按钮四周留出空白。常用于表单提交。
:::
</demo-box>

<demo-box>
```html
<div>
  <f-button mini>回复</f-button>
  <f-button type="primary" icon="f-icon-search-strong" mini>搜索</f-button>
  <f-button type="warning" plain mini>退出</f-button>
</div>
```
::: tip 小型按钮
设置 `mini` 属性即可得到小型按钮。
:::
</demo-box>

</demo-area>

## API

### 属性

属性 | 说明             | 类型   | 默认值
-----|------------------|--------|--------
icon | 设置按钮图标类型 | string | -