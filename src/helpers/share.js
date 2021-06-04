/**
 * 微信js-sdk
 * 参考文档：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
 */
import axios from 'axios'

const wxApi = {
  /**
   * [wxRegister 微信Api初始化]
   * @param  {Function} callback [ready回调函数]
   */
  async register (callback) {
    // 这边的接口请换成你们自己的
    const { result: data } = await axios.get('https://www.view-ol.com/viewol_web/wx/jsapiSignature', { params: { url: window.location.href } })
    console.log(data)
    const { wx } = window
    const config = {
      debug: false, // 开启调试模式
      appId: data.appId, // 必填，公众号的唯一标识
      timestamp: data.timestamp, // 必填，生成签名的时间戳
      nonceStr: data.nonceStr, // 必填，生成签名的随机串
      signature: data.signature, // 必填，签名，见附录1
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    }
    wx.config(config)

    wx.ready((res) => {
      // 如果需要定制ready回调方法
      if (callback) callback()
    })
  },

  shareTimeline (option) {
    const { wx } = window
    wx.onMenuShareTimeline({
      title: option.title, // 分享标题
      link: option.link, // 分享链接
      imgUrl: option.imgUrl, // 分享图标
      success () {
        // 用户成功分享后执行的回调函数
        option.success && option.success()
      },
      cancel () {
        // 用户取消分享后执行的回调函数
        option.error && option.error()
      }
    })
  },

  shareAppMessage (option) {
    const { wx } = window
    wx.onMenuShareAppMessage({
      title: option.title, // 分享标题
      desc: option.desc, // 分享描述
      link: option.link, // 分享链接
      imgUrl: option.imgUrl, // 分享图标
      success () {
        // 用户成功分享后执行的回调函数
        option.success && option.success()
      },
      cancel () {
        // 用户取消分享后执行的回调函数
        option.error && option.error()
      }
    })
  }
}
export default wxApi
