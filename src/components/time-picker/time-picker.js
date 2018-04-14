import createElement from 'vue-css-modules/lib/create-element'
import mergeData from 'vue-merge-data'
import Picker from '@/components/picker/picker'
import TimePickerView from '@/components/time-picker-view/time-picker-view'
import styles from './time-picker.styl'

export default {
  name: 'f-time-picker',

  functional: true,

  render(h, { props, data }) {
    h = createElement(h, styles, props)

    return h(Picker, mergeData(data, {
      styleName: '@time-picker',
      attrs: {
        view: TimePickerView
      }
    }))
  }
}
