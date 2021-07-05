import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'

const WECHAT_OPEN_ID_KEY = 'wechat_open_id_new'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    open_id: localStorage.getItem(WECHAT_OPEN_ID_KEY),
    user_id: -1,
    company_id: -1,
    expo_id: 2,
    show: null,
    company: {},
    product: [],
    comment: [],
    praise: [],
    see: [],
    activity_detail: '',
    invitation_detail: {}
  },
  actions: {
    setOpenId ({ state }, openId) {
      localStorage.setItem(WECHAT_OPEN_ID_KEY, openId)
      state.open_id = openId
    },
    clearOpenId ({ state }) {
      localStorage.removeItem(WECHAT_OPEN_ID_KEY)
      state.open_id = null
    },
    async getCompanyInformation ({ commit, state }) {
      const {
        result: company,
        comment,
        praise,
        see,
        showInfo
      } = await axios.get('/company/getCompany', {
        params: {
          id: state.company_id,
          userId: state.user_id
        }
      })
      const data = { company, comment, praise, see, showInfo }
      commit('SET_SHOW_INFO', data)
      return data
    },

    async getProductList ({ commit, state }) {
      const { result } = await axios.get('/product/listProduct', {
        params: {
          expoId: state.expo_id,
          companyId: state.company_id,
          num: 21
        }
      })
      commit('SET_PRODUCT', result)
    },

    async praiseCompany ({ state, dispatch }) {
      const { status } = await axios.post('/company/praise', qs.stringify({
        userId: state.user_id,
        comId: state.company_id
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      if (status === '0000') dispatch('getCompanyInformation')
    },

    async commentCompany ({ state, dispatch }, comment) {
      const { status } = await axios.post('/company/comment', qs.stringify({
        userId: state.user_id,
        comId: state.company_id,
        content: comment
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      if (status === '0000') dispatch('getCompanyInformation')
    },

    async getActivityDetail ({ commit, state }, id) {
      const { result } = await axios.get('/schedule/getSchedule', {
        params: {
          userId: state.user_id,
          id
        }
      })
      document.title = result.title
      commit('SET_ACTIVITY_DETAIL', result)
    },

    async getCompanyAndQr ({ commit, state }, id) {
      const { qr, result } = await axios.get('/company/getCompanyAndQr', {
        params: {
          maNum: 3,
          id,
          width: 100
        }
      })
      console.log(result)
      result.qr = `data:image/png;base64,${qr}`
      document.title = result.name
      commit('SET_INVITATION_DETAIL', result)
    },

    async signUp ({ state }, params) {
      const result = await axios.post('/buser/userJoinBbs', qs.stringify({
        name: params.name,
        sex: params.sex,
        company: params.company,
        position: params.position,
        phone: params.phone,
        email: params.email,
        idea: params.idea,
        bbsId: params.bbsId,
        address: params.address
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })

      console.log(result)
    },

    async checkIn ({ state }, params) {
      return await axios.post('/buser/userSignBbs', qs.stringify({
        phone: params.phone,
        bbsId: params.bbsId
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    }
  },

  mutations: {
    SET_SHOW_INFO (state, { company, comment, praise, see, showInfo }) {
      document.title = company.name
      state.company = company
      state.comment = comment
      state.praise = praise
      state.see = see
      if (showInfo) {
        const show = JSON.parse(showInfo)
        show.showFlag = (show.showFlag === '1')
        state.show = show
      }
    },

    SET_PRODUCT (state, product) {
      state.product = product
    },

    SET_BASIC_INFO (state, { user_id, company_id }) {
      state.user_id = user_id
      state.company_id = company_id
    },
    SET_ACTIVITY_DETAIL (state, { contentView, companyName }) {
      state.activity_detail = contentView ? { ...JSON.parse(contentView), companyName } : null
    },
    SET_INVITATION_DETAIL (state, detail) {
      state.invitation_detail = detail
    }
  }
})
