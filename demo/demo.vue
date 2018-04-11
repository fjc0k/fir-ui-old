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
        <f-field label="等我">
          <f-placeholder :value="toggle">
            <div slot-scope="bool">
              {{ bool ? 'ok' : 'false' }}
            </div>
            等一下
          </f-placeholder>
        </f-field>
        <f-field label="购票类型">
          <f-date-picker-view
            v-model="likes"
            :startYear="2012"
            :endYear="2012"
          >
            <template slot="year" slot-scope="{ year }">
              {{ year }} 年
            </template>
            <template slot="month" slot-scope="{ year, month }">
              {{ month }}月
            </template>
          </f-date-picker-view>
        </f-field>
      </f-form>
    </f-panel>

    <f-button @click="showPopup=!showPopup" type="primary" whiteSpace>提交</f-button>

    <f-sheet :cancel="false" title="SHEET" desc="选择时间" v-model="showPopup">
      <f-date-picker-view v-model="likes" :data="pickerData2" />

    </f-sheet>


  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 24,
      showPopup: false,
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
      pickerData2: [{
          label: '2012', value: '2012', children: [{
            label: '2013', value: '2013'
          }, {
            label: '2013', value: '2013'
          }]
        }, {
          label: '20124', value: '20124', children: [{
            label: '2013', value: '2013'
          }]
        }],
      likes: [],
      autoSize: true
    }
  }
}
</script>
