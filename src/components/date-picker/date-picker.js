import createElement from 'vue-css-modules/lib/create-element'
import { mergeData } from '@/utils/helper'
import Picker from '@/components/picker/picker'
import DatePickerView from '@/components/date-picker-view/date-picker-view'
import styles from './date-picker.styl'

export default {
  name: 'f-date-picker',

  functional: true,

  render(h, { props, data }) {
    h = createElement(h, styles, props)

    return h(Picker, mergeData(data, {
      styleName: '@date-picker',
      attrs: {
        view: DatePickerView
      }
    }))
  }
}
