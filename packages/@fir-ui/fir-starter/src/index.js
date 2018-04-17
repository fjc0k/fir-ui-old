import Vue from 'vue'
import App from './app.vue'

// import FirUI from 'fir-ui'
// import 'fir-ui/dist/fir-ui.min.css'
// Vue.use(FirUI)

import { Choice, Picker, Button, Divider, PickerView, Sheet } from 'fir-ui'
Vue.component(Choice.name, Choice)
Vue.component(Button.name, Button)
Vue.component(Divider.name, Divider)
Vue.component(Picker.name, Picker)
Vue.component(PickerView.name, PickerView)
Vue.component(Sheet.name, Sheet)

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App)
})
