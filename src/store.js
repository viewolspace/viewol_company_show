import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    base_url: 'https://www.view-ol.com/viewol_web',
    user_id: -1,
    company_id: -1,
    expo_id: 2,
    show: null,
    company: {},
    product: [],
    comment: [],
    praise: [],
    see: []
  },
  actions: {
    async getCompanyInformation ({commit, state}) {
      const {result: company, comment, praise, see, showInfo} = await axios.get(`${state.base_url}/company/getCompany`, {
        params: {
          id: state.company_id,
          userId: state.user_id
        }
      })
      const data = {company, comment, praise, see, showInfo}
      commit('SET_SHOW_INFO', data)
      return data
    },

    async getProductList ({commit, state}, params) {
      const {result} = await axios.get(`${state.base_url}/product/listProduct`, {
        params: {
          expoId: state.expo_id,
          companyId: state.company_id,
          num: 3
        }
      })
      commit('SET_PRODUCT', result)
    },

    async praiseCompany ({state, dispatch}) {
      const {status} = await axios.post(`${state.base_url}/company/praise`, qs.stringify({
        userId: state.user_id,
        comId: state.company_id
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      if (status === '0000') dispatch('getCompanyInformation')
    },

    async commentCompany ({state, dispatch}, comment) {
      const {status} = await axios.post(`${state.base_url}/company/comment`, qs.stringify({
        userId: state.user_id,
        comId: state.company_id,
        content: comment
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      if (status === '0000') dispatch('getCompanyInformation')
    }
  },
  mutations: {
    SET_SHOW_INFO (state, {company, comment, praise, see, showInfo}) {
      document.title = company.name
      state.company = company
      state.comment = comment
      state.praise = praise
      state.see = see
      if (showInfo) state.show = JSON.parse(showInfo)
    },

    SET_PRODUCT (state, product) {
      state.product = product
    },

    SET_BASIC_INFO (state, {user_id, company_id}) {
      state.user_id = user_id
      state.company_id = company_id
    }
  }
})
