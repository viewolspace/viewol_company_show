import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Toasted from 'vue-toasted'
import 'swiper/dist/css/swiper.css'
import 'bootstrap-4-grid/css/grid.css'
import './styles/app.scss'

import interceptorsSetup from './helpers/interceptors'

import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Toasted, {
  containerClass: 'toast-container-custom',
  className: 'toast-custom',
  position: 'bottom-center',
  duration: 3000
})
Vue.use(VueAwesomeSwiper)

interceptorsSetup()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
