/**
 * interceptors.js
 * @author gexiaowei
 * @version 1.0.0
 * copyright 2014-2019, gandxiaowei@gmail.com all rights reserved.
 */
import { interceptors } from 'axios'

export default () => {
  interceptors.response.use(response => {
    let {data} = response
    if (data) {
      switch (data['code'] || data['status']) {
        case '0000': // 成功
          return Promise.resolve(data)
        default:
          return Promise.reject(data['message'])
      }
    }
    return response
  }, error => {
    return Promise.reject(error)
  })
}
