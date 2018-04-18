import CSSModules from 'vue-css-modules'
import betterSync from 'vue-better-sync'
import mergeData from 'vue-merge-data'
import { isNil } from 'lodash'
import Picker from '@/components/picker/picker'
import styles from './single-picker.styl'

export default {
  name: 'f-single-picker',

  inheritAttrs: false,

  mixins: [
    CSSModules(styles),
    betterSync({
      prop: 'value',
      event: 'change'
    })
  ],

  props: {
    value: null,
    data: {
      type: Array,
      required: true
    }
  },

  computed: {
    localData() {
      return [this.data]
    }
  },

  methods: {
    transformValue(_) {
      _.newValue = isNil(_.newValue) || _.newValue === '' ? [] : [_.newValue]
      return _
    },
    transformLocalValue(_) {
      _.newValue = _.newValue[0]
      return _
    }
  },

  render(h) {
    return h(Picker, mergeData(this.$vnode.data, {
      styleName: '@single-picker',
      model: {
        value: this.localValue,
        callback: this.syncValue
      },
      attrs: {
        data: this.localData
      }
    }))
  }
}
