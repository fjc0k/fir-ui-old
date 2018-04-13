export default {
  // 绑定值
  value: {
    type: Array,
    default: () => []
  },
  // 绑定值详情
  detail: {
    type: Array,
    sync: true
  },
  // 选项数据
  data: {
    type: Array,
    required: true
  },
  // 分隔符
  divider: [String, Number, Array],
  // 单位
  unit: [String, Number, Array],
  // 可见的选项个数
  visibleItemCount: {
    type: Number,
    default: 5
  },
  // 单个选项的高度
  itemHeight: {
    type: String,
    default: '2.4em'
  },
  // 过滤选项的函数
  filterItem: Function,
  // 禁用选项的函数
  disableItem: Function,
  // 渲染选项的函数
  renderItem: Function,
  // 是否级联数据，即 item 含 children 节点
  cascaded: Boolean,
  // 是否异步加载数据中
  loading: Boolean
}
