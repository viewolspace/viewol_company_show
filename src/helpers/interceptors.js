/**
 * interceptors.js
 * @author gexiaowei
 * @version 1.0.0
 * copyright 2014-2019, gandxiaowei@gmail.com all rights reserved.
 */

import axios from 'axios'

export default () => {
  axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

  axios.interceptors.response.use(response => {
    const { data } = response
    if (data) {
      switch (data.code || data.status) {
        case '0000': // 成功
          return Promise.resolve(data)
        default:
          return Promise.reject(data.message)
      }
    }
    return response
  }, error => {
    return Promise.reject(error)
  })
}
