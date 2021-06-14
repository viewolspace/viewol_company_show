import axios from 'axios'
import qs from 'qs'

export function getIdeaList ({ name, categoryId, pageIndex, num = 20 }) {
  return axios.get('/product/listIdea', {
    params: { name, categoryId, pageIndex, num }
  })
}

export function getIdeaDetail (id) {
  return axios.get('/product/getIdea', {
    params: { id }
  })
}

export function getSummary () {
  return axios.get('/product/total')
}

export function vote (productId, openId) {
  return axios.post('/product/vote', qs.stringify({
    openId,
    productId
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
