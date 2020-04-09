import Vue from 'vue'
import store from './store'
import App from './App.vue'
import vSelect from 'vue-select'

Vue.config.productionTip = false
Vue.prototype.$info = window.info;

Vue.component('v-select', vSelect)
Vue.component('slide-1', () => import('./components/slide-1'))
Vue.component('slide-2', () => import('./components/slide-2'))
Vue.component('slide-3', () => import('./components/slide-3'))
Vue.component('slide-4', () => import('./components/slide-4'))
Vue.component('modal-info', () => import('./components/modal-info'))
Vue.component('modal-pyatnik', () => import('./components/modal-pyatnik'))
Vue.component('modal-shildi', () => import('./components/modal-shildi'))
Vue.component('modal-privat', () => import('./components/modal-privat'))
Vue.component('image-svg', () => import('./components/image-svg'))

new Vue({
  store,
  render: h => h(App),
}).$mount('#constructor')
