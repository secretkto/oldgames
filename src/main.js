// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

require('@/css/hamburgers.css')
require('@/css/mines.css')
require('@/css/animate.css')
require('@/css/bootstrap.css')

// require('@/css/bootstrap.css')
// require('@/css/animate.css')
// Vue.config.productionTip = false
// Vue.config.silent = true
// Vue.component('modal', {
//   template: '#modal-template',
//   methods: {
//     set(marker){
//       vm.markers.player = marker;
//       vm.markers.computer = marker == 'X' ? 'O' : 'X';
//       vm.init('computer');
//   }
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
