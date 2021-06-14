import axios from 'axios'

export function getList (parentId) {
  return axios.get('/category/listCategory', {
    params: {
      parentId
    }
  })
}
