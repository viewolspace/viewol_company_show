<template>
  <div class="canvassing-container">
    <div class="detail-container">
      <img
        class="logo"
        src=""
        alt=""
      >
      <div class="information">
        <div>产品ID：<span class="highlight">9048</span></div>
        <div>产品名称：城市级消防物联网平台</div>
        <div>型号：zhilusaas 1.0</div>
        <div>参选：智慧消防技术产品</div>
        <div>企业名称：深圳知路科技有限公司</div>
        <img
          class="qrcode"
          src=""
          alt=""
        >
        <div>
          请长按二维码分享朋友圈帮我拉票
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

export default @Component({})
class Canvassing extends Vue {

}
</script>

<style lang="scss" scoped>
.canvassing-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .detail-container {
    width: 100%;
    padding: 1.28rem 1.52rem;
    display: flex;
    font-size: 0.76rem;
    font-weight: 400;
    color: #FFFFFF;

    .logo {
      width: 3.15rem;
      height: 3.15rem;
      background: #EEEEEE;
      border: 1px solid #A0C9FD;
      border-radius: 0.47rem;
      overflow: hidden;
      box-sizing: border-box;
      margin-right: 1rem;
    }

    .information {
      display: flex;
      flex-direction: column;

      .qrcode {
        margin-top: 1.52rem;
        margin-bottom: 1.2rem;
        width: 11.91rem;
        height: 11.91rem;
      }
    }
  }
}
</style>
