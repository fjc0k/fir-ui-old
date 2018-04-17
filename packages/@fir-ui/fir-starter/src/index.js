import Vue from 'vue'
import App from './app.vue'

import FirUI from 'fir-ui'
import 'fir-ui/dist/fir-ui.min.css'
Vue.use(FirUI)

// import { Button, PickerView } from 'fir-ui'
// Vue.component(Button.name, Button)
// Vue.component(PickerView.name, PickerView)

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App)
})
