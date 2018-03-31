<template>
<div>d

<f-hairline all top bottom>
111
  <button>确认<f-icon name="$f-icon-bell" class="sskdkk" style="color:red" /></button>

</f-hairline>
<br/><br/>
<f-form :offset="false" :border="true">
  <f-field icon="f-icon-bell" label="身高" note="厘米">
    <f-input :validator="v => /\d/.test(v)" type="text" v-model="text" placeholder="输入" />
  </f-field>
  <f-field label="表单项">
    <f-input-number block :min="20.5" v-model="text" />
  </f-field>
  <f-field label="Switch">
    <f-switch :valueMap="valueMap" v-model="switchValue" />
  </f-field>
  <f-field label="TextArea">
    <f-textarea v-model="text" />
  </f-field>


  <f-field label="女生" desc="中国姓氏哦~" :note="text">
    <f-select :data="options" v-model="checkedOption" />
  </f-field>
  <f-item title="女生" desc="中国姓氏哦~" :note="text" extra="extra">
  </f-item>
  <f-item left="yoyo" right="反馈" icon="f-icon-bell" title="title" desc="desc" note="note"></f-item>
</f-form>

<f-button @click="$log('clicked')"  id="dd" whiteSpace type="default" block>按钮</f-button>
<f-button icon="$f-icon-bell" id="dd" whiteSpace type="primary" >按钮</f-button>
<f-button id="dd" whiteSpace type="danger" plain>按钮</f-button>
</div>
</template>

<script>
  export default {
    data() {
      return {
        text: '20',
        type: 'number',
        checkedOption: 'female',
        switchValue: 0,
        valueMap: {
          on: 1,
          off: 0
        },
        options: [
          { label: '男', value: 'male' },
          { label: '女', value: 'female' },
          { label: 'Object', value: { x: 0 } },
          { label: '不男不女', value: 'xxx', disabled: true }
        ]
      };
    },
    computed: {

    },
    methods: {

    },
    mounted() {

    }
  }
</script>

<style>

</style>
