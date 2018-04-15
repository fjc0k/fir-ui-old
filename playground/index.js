import Vue from 'vue'
import fir from '../src'
import Playground from './playground.vue'

Vue.use(fir)

/* eslint-disable */
new Vue({
  render: h => h(Playground),
  el: '#app'
})
