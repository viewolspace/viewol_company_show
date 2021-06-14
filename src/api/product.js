import axios from 'axios'

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

export function vote (productId) {
  return axios.post('/product/vote', {
    openId: 1,
    productId
  })
}
