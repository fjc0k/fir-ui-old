import Vue from 'vue'
import { Button, PickerView } from 'fir-ui'
import App from './app.vue'

Vue.component(Button.name, Button)
Vue.component(PickerView.name, PickerView)

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App)
})
