import Vue from 'vue'
import Demo from './demo.vue'

import fir from '../src'

// import button from '../src/components/button/button'
// import icon from '../src/components/icon/icon'
// import hairline from '../src/components/hairline/hairline'
// import switch$ from '../src/components/switch/switch'
// import select from '../src/components/select/select'
// import list from '../src/components/list/list'
// import item from '../src/components/item/item'
// import form from '../src/components/form/form'
// import field from '../src/components/field/field'
// import input from '../src/components/input/input'
// import textarea from '../src/components/textarea/textarea'
// import inputNumber from '../src/components/input-number/input-number'

import '../src/styles/commons.styl'

// Vue.component(button.name, button)
// Vue.component(icon.name, icon)
// Vue.component(hairline.name, hairline)
// Vue.component(switch$.name, switch$)
// Vue.component(select.name, select)
// Vue.component(list.name, list)
// Vue.component(item.name, item)
// Vue.component(form.name, form)
// Vue.component(field.name, field)
// Vue.component(input.name, input);
// Vue.component(textarea.name, textarea);
// Vue.component(inputNumber.name, inputNumber)
Vue.use(fir)

/* eslint-disable */
new Vue({
  render: h => h(Demo),
  el: '#app'
})
