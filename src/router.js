import Vue from 'vue'
import Router from 'vue-router'
import Show from './views/Show.vue'
import Detail from './views/Detail.vue'
import Activity from './views/Activity.vue'
import Invitation from './views/Invitation.vue'
import InvitationType from './views/InvitationType.vue'
import Message from './views/Message.vue'
import SignUp from './views/SignUp.vue'
import CheckIn from './views/CheckIn.vue'
import Innovation from './views/Innovation.vue'
import InnovationIntroduce from '@/components/innovation/Introduce.vue'
import InnovationVote from '@/components/innovation/Vote.vue'
import InnovationVoteProduct from '@/components/innovation/VoteProduct'
import InnovationRank from '@/components/innovation/Rank.vue'
import InnovationSearch from '@/components/innovation/Search.vue'
import InnovationCanvassing from '@/components/innovation/Canvassing.vue'

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
      path: '/innovation',
      name: 'innovation',
      component: Innovation,
      redirect: { name: 'innovation_introduce' },
      children: [{
        path: '/innovation/introduce',
        name: 'innovation_introduce',
        meta: {
          tab: 'introduce'
        },
        component: InnovationIntroduce
      }, {
        path: '/innovation/vote',
        name: 'innovation_vote',
        meta: {
          tab: 'vote'
        },
        component: InnovationVote
      }, {
        path: '/innovation/vote/:id',
        name: 'innovation_vote_product',
        component: InnovationVoteProduct,
        props: true
      }, {
        path: '/innovation/rank',
        name: 'innovation_rank',
        meta: {
          tab: 'rank'
        },
        component: InnovationRank
      }, {
        path: '/innovation/search',
        name: 'innovation_search',
        meta: {
          tab: 'search'
        },
        component: InnovationSearch
      },
      {
        path: '/innovation/canvassing/:id',
        name: 'innovation_canvassing',
        props: true,
        component: InnovationCanvassing
      }]
    },

    {
      path: '/invitation',
      name: 'invitation',
      component: Invitation
    },
    {
      path: '/invitation/:type',
      name: 'invitation-type',
      component: InvitationType,
      props: true
    },
    {
      path: '/check-in',
      name: 'check-in',
      component: CheckIn,
      props: (route) => ({ bbsId: route.query.bbsId })
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp,
      props: (route) => ({ bbsId: route.query.bbsId })
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      props: (route) => ({ type: route.query.type, bbsId: route.query.bbsId })
    }
  ]
})
