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
        <f-field label="你的生日">
          <f-date-picker
            v-model="birthday"
            placeholder="选择日期"
            :startYear="1980"
            :endYear="2018"
          />
        </f-field>
        <f-field label="出生时间">
          <f-time-picker
            v-model="birthtime"
            placeholder="选择时间"
          />
        </f-field>
        <f-field label="等我">
          <f-switch v-model="toggle" />
        </f-field>
        <f-field label="tag">
          <f-tag v-model="taged" value="爱">
            爱情价更高
          </f-tag>
          <f-tag v-model="taged" value="苹果" closable>
            苹果
          </f-tag>
        </f-field>
        <f-field label="single-picker">
          <f-single-picker v-model="selected" :data="data" placeholder="选择国家">
            爱情价更高
          </f-single-picker>
        </f-field>
        <f-field label="等我">
          <f-picker
            :visible="false"
            v-model="pickerValue"
            :data="pickerData"
            placeholder="选择一个"
          ></f-picker>
        </f-field>
        <f-field label="购票类型">
          <f-date-picker-view
            v-model="likes"
            :startYear="2000"
            :endYear="2012"
            renderYear="yy 年"
            renderMonth="mm 月"
            renderDay="dd 日"
            :visibleItemCount="3"
            renderHour="hh 点"
          >
            <template slot="month" slot-scope="{ year, month }">
              <i>{{ month }}</i>
            </template>
          </f-date-picker-view>
        </f-field>
      </f-form>
    </f-panel>

    <f-button type="primary" whiteSpace>提交</f-button>

    <f-divider align="left" width="100%">小小墙</f-divider>


  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 24,
      showPopup: false,
      toggle: false,
      selected: '',
      name: '方剑成',
      taged: [],
      birthday: [],
      birthtime: [],
      pickerValue: [],
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
