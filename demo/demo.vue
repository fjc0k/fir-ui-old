<template>
  <div style="background:white">
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
        <f-choice v-model="likes" value="苹果">
          苹果
        </f-choice>
        <f-choice v-model="name" value="方剑成1995">
          方剑成1995
        </f-choice>
        <f-choice v-model="toggle" :value="true">
          true
        </f-choice>
      </f-item>
      <f-item>
        <f-checkbox v-model="likes" value="苹果">
          苹果
        </f-checkbox>
        <f-checkbox checkedIcon="f-icon-bell" v-model="likes" value="梨子" theme="outline">
          梨子
          <div slot="box" slot-scope="{ checked }">
            {{ checked }}
          </div>

        </f-checkbox>
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
      ],
      likes: []
    }
  }
}
</script>
