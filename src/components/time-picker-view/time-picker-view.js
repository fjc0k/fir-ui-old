import CSSModules from 'vue-css-modules'
import dateFormatter from '@fir-ui/date-formatter'
import { range, defaultTo, mapValues, isFunction, zipObject, toArray } from 'lodash'
import mergeData from 'vue-merge-data'
import { customRenderer } from '@/mixins'
import PickerView from '@/components/picker-view/picker-view'
import styles from './time-picker-view.styl'

const PAYLOAD_KEYS = ['hour', 'minute', 'second']

const genPayload = zipObject.bind(null, PAYLOAD_KEYS)

export default {
  name: 'f-time-picker-view',

  inheritAttrs: false,

  mixins: [
    CSSModules(styles),
    customRenderer({
      hour: {
        default({ hour }) {
          return hour
        },
        literal(str, { hour: h }) {
          return dateFormatter({ h }, str)
        }
      },
      minute: {
        default({ minute }) {
          return minute
        },
        literal(str, { hour: h, minute: i }) {
          return dateFormatter({ h, i }, str)
        }
      },
      second: {
        default({ second }) {
          return second
        },
        literal(str, { hour: h, minute: i, second: s }) {
          return dateFormatter({ h, i, s }, str)
        }
      }
    })
  ],

  props: {
    filter: Function, // 应在 methods 里定义，否则会触发重渲染
    disabler: Function // 应在 methods 里定义，否则会触发重渲染
  },

  methods: {
    getPickerView() {
      return this.$refs.PickerView
    },
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
        l === 1 ? '$renderHour' :
          l === 2 ? '$renderMinute' :
            '$renderSecond'
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
      start = 0,
      end = 23,
      next = {
        start: 0,
        end: 59,
        next: {
          start: 0,
          end: 59,
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
      styleName: '@time-picker-view',
      attrs: {
        data: this.data,
        cascaded: true
      },
      ref: 'PickerView'
    }))
  }
}
