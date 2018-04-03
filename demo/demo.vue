<template>
  <div>
    <f-button inline icon="f-icon-bell" type="primary" plain>按钮</f-button>
    <br />
    <br />
    <f-hairline all>

      <f-select v-model="selected" :data="data" />
    </f-hairline>
    <br />
    <br />


    <f-list>
      <f-item note="方剑成">
        姓名
      </f-item>
      <f-item>
        姓名
      </f-item>
    </f-list>

    <f-form>
      <f-field label="姓名">
        <f-input v-model="name" />
      </f-field>
      <f-field label="等我">
        <f-switch v-model="toggle" />
      </f-field>
    </f-form>


  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
      selected: '中国',
      name: '方剑成',
      data: [
        { label: '中国', value: '中国' },
        { label: '美国', value: '美国' }
      ]
    }
  }
}
</script>
