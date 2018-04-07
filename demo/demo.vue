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

    <f-divider width="80%">小小墙提供技术支持</f-divider>


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
      <f-field label="spinner">
        <f-spinner />
      </f-field>
      <f-field label="姓名">
        <f-input v-model="name" />
      </f-field>
      <f-field label="姓名2">
        <f-textarea :autoSize="autoSize" v-model="name" />
      </f-field>
      <f-field label="等我">
        <f-switch v-model="toggle" />
      </f-field>
      <f-field label="购票类型">
        <f-picker-view :loading="true" :visibleItemCount="3" v-model="likes" cascaded :data="pickerData2" />
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
