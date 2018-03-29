import Vue from 'vue'
import Demo from './demo.vue'
import fir from '../src'

Vue.use(fir)

/* eslint-disable */
new Vue({
  render: h => h(Demo),
  el: '#app'
})
