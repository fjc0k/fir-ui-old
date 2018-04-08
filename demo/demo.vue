<template>
  <div>
    <f-panel title="完成以下信息" extra="?" tip="* 部分车次可能晚点">
      <f-form>
        <f-field label="spinner">
          <f-spinner />
        </f-field>
        <f-field label="姓名">
          <f-input v-model="name" />
        </f-field>
        <f-field label="年龄">
          <f-input-number v-model="age" />
        </f-field>
        <f-field label="等我">
          <f-switch v-model="toggle" />
        </f-field>
        <f-field label="购票类型">
          <f-picker-view :loading="true" :visibleItemCount="3" v-model="likes" cascaded :data="pickerData2" />
        </f-field>
      </f-form>
    </f-panel>

    <f-button type="primary" whiteSpace>提交</f-button>

    <f-popup v-model="showPopup" placement="bottom">
      <f-panel title="弹出框">

        弹出框呀弹出框呀弹出框呀弹出框呀弹出框呀弹出框呀弹出框呀弹出
        框呀弹出框呀弹出框呀弹出框呀弹出框
        弹出框呀弹出框呀弹出框呀弹出框呀弹出框呀呀弹出框呀
      </f-panel>
    </f-popup>


  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 24,
      showPopup: true,
      toggle: false,
      selected: '中国',
      name: '方剑成',
      data: [
        { label: '中国', value: '中国' },
        { label: '美国', value: '美国' }
      ],
      pickerData: [
        [
          { label: '中国', value: '中国' },
          { label: '美国', value: '美国' },
          { label: '俄罗斯', value: '俄罗斯' },
          { label: '德国', value: '德国' },
          { label: '英国', value: '英国' },
          { label: '意大利', value: '意大利' }
        ],
        [
          { label: '中国ddddddddd', value: '中国', disabled: true },
          { label: '美国', value: '美国' },
          { label: '俄罗斯', value: '俄罗斯' },
          { label: '德国', value: '德国', disabled: true },
          { label: '英国', value: '英国', disabled: true  },
          { label: '意大利', value: '意大利', disabled: true  }
        ]
      ],
      pickerData2: [
        {
          label: '飞机票',
          value: 0,
          children: [
            {
              label: '经济舱',
              value: 1
            },
            {
              label: '商务舱',
              value: 2
            }
          ]
        },
        {
          label: '火车票',
          value: 1,
          children: [
            {
              label: '卧铺',
              value: 1,
              disabled: true // 不可用
            },
            {
              label: '坐票',
              value: 2
            },
            {
              label: '站票',
              value: 3
            }
          ]
        },
        {
          label: '汽车票',
          value: 3,
          children: [
            {
              label: '快班',
              value: 1
            },
            {
              label: '普通',
              value: 2
            }
          ]
        }
      ],
      likes: [],
      autoSize: true
    }
  }
}
</script>
