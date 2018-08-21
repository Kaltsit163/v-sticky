import Vue from 'vue'
import App from './App.vue'
import stickyD from './lib/sticky/index'

Vue.directive('sticky', stickyD)

new Vue({
  el: '#app',
  render: h => h(App)
})
