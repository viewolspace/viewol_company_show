<template>
  <div class="canvassing-container">
    <div class="detail-container">
      <img
        class="logo"
        :src="detail.comLogo"
        alt=""
      >
      <div class="information">
        <div>产品ID：<span class="highlight">{{ detail.productId }}</span></div>
        <div>产品名称：{{ detail.productName }}</div>
        <div>型号：{{ detail.desc }}</div>
        <div>参选：{{ detail.categoryId }}</div>
        <div>
          企业名称：{{ detail.companyName }}
        </div>
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
import { Component, Prop, Vue } from 'vue-property-decorator'
import * as ProductAPI from '@/api/product'

export default @Component({})
class Canvassing extends Vue {
  @Prop({ required: true }) id
  detail = {}

  mounted () {
    this.getProductDetail()
  }

  async getProductDetail () {
    const { result } = await ProductAPI.getIdeaDetail(this.id)
    this.detail = result
  }
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
    font-weight: 500;
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

      .highlight {
        color: #FFE204;
      }

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
