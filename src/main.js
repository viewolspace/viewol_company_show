import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
import 'bootstrap-4-grid/css/grid.css'
import './styles/app.scss'

import interceptorsSetup from './helpers/interceptors'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

interceptorsSetup()

new Vue({
  render: h => h(App),
}).$mount('#app')
