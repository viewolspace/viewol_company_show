import axios from 'axios'

export function getOpenId (code) {
  return axios.get('/wx/getOpenId', { params: { jscode: code } })
}
