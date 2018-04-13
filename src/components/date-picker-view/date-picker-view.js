import CSSModules from 'vue-css-modules'
import dateFormatter from '@fir-ui/date-formatter'
import { range, defaultTo, mapValues, isFunction, zipObject, toArray } from 'lodash'
import { mergeData } from '@/utils/helper'
import { getMonthDays } from '@/utils/date'
import { customRenderer } from '@/mixins'
import PickerView from '@/components/picker-view/picker-view'
import styles from './date-picker-view.styl'

const CURRENT_YEAR = new Date().getFullYear()
const PAYLOAD_KEYS = ['year', 'month', 'day']

const genPayload = zipObject.bind(null, PAYLOAD_KEYS)

export default {
  name: 'f-date-picker-view',

  inheritAttrs: false,

  mixins: [
    CSSModules(styles),
    customRenderer({
      year: {
        default({ year }) {
          return year
        },
        literal(str, { year: y }) {
          return dateFormatter({ y }, str)
        }
      },
      month: {
        default({ month }) {
          return month
        },
        literal(str, { year: y, month: m }) {
          return dateFormatter({ y, m }, str)
        }
      },
      day: {
        default({ day }) {
          return day
        },
        literal(str, { year: y, month: m, day: d }) {
          return dateFormatter({ y, m, d }, str)
        }
      }
    })
  ],

  props: {
    startYear: {
      type: Number,
      default: CURRENT_YEAR - 10
    },
    endYear: {
      type: Number,
      default: CURRENT_YEAR + 10
    },
    filter: Function, // 应在 methods 里定义，否则会触发重渲染
    disabler: Function // 应在 methods 里定义，否则会触发重渲染
  },

  methods: {
    localFilter() {
      return defaultTo(
        this.filter && this.filter(
          genPayload(
            toArray(arguments)
          )
        ),
        true
      )
    },
    localDisabler() {
      return defaultTo(
        this.disabler && this.disabler(
          genPayload(
            toArray(arguments)
          )
        ),
        false
      )
    },
    localRenderer() {
      const values = toArray(arguments).slice(1, 4)
      const l = values.length
      const renderer = (
        l === 1 ? '$renderYear' :
          l === 2 ? '$renderMonth' :
            '$renderDay'
      )
      return defaultTo(
        this[renderer](
          genPayload(values)
        ),
        arguments[0]
      )
    },
    genData({
      payload = [],
      start = this.startYear,
      end = this.endYear,
      next = {
        start: 1,
        end: 12,
        next: {
          start: 1,
          end: getMonthDays,
          next: null
        }
      }
    } = {}) {
      const { localFilter, localDisabler, localRenderer } = this

      const data = []

      const X = range(start, end + 1)

      for (const i in X) { // eslint-disable-line
        const value = X[i]
        const newPayload = [...payload, value]
        if (localFilter.apply(this, newPayload)) {
          data.push({
            value,
            label: localRenderer.apply(this, [value, ...newPayload]),
            ...(
              localDisabler.apply(this, newPayload) ? {
                disabled: true
              } : (
                next ? {
                  children: this.genData({
                    payload: newPayload,
                    ...mapValues(next, value => (
                      isFunction(value) ?
                        value.apply(this, newPayload) :
                        value
                    ))
                  })
                } : {}
              )
            )
          })
        }
      }

      return data
    }
  },

  computed: {
    data() {
      return this.genData()
    }
  },

  render(h) {
    return h(PickerView, mergeData(this.$vnode.data, {
      styleName: '@date-picker-view',
      attrs: {
        data: this.data,
        cascaded: true
      }
    }))
  }
}
