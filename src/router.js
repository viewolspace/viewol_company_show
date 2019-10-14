import Vue from 'vue'
import Router from 'vue-router'
import Show from './views/Show.vue'
import Detail from './views/Detail.vue'
import Activity from './views/Activity.vue'
import Invitation from './views/Invitation.vue'
import Message from './views/Message.vue'
import SignUp from './views/SignUp.vue'
import CheckIn from './views/CheckIn.vue'

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
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/invitation',
      name: 'invitation',
      component: Invitation
    },
    {
      path: '/check-in',
      name: 'check-in',
      component: CheckIn,
      props: (route) => ({bbsId: route.query.bbsId})
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp,
      props: (route) => ({bbsId: route.query.bbsId})
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      props: (route) => ({type: route.query.type, bbsId: route.query.bbsId})
    }
  ]
})
