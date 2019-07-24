import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
import 'bootstrap-4-grid/css/grid.css'
import './styles/app.scss'

import interceptorsSetup from './helpers/interceptors'

import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

interceptorsSetup()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
