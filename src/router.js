import Vue from 'vue'
import Router from 'vue-router'
import Show from './views/Show.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'show',
      component: Show
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})