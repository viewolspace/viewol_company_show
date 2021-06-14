<template>
  <div class="vote-container">
    <div class="count">
      <div class="item">
        <div class="number">
          {{ detail.rank }}
        </div>
        <div class="desc">
          排名
        </div>
      </div>
      <div class="divide" />
      <div class="item">
        <div class="number">
          {{ detail.vNum }}
        </div>
        <div class="desc">
          票数
        </div>
      </div>
      <div class="divide" />
      <div class="item">
        <div class="number">
          {{ detail.lastNum }}
        </div>
        <div class="desc">
          距上一名
        </div>
      </div>
    </div>
    <div class="production-container">
      <img
        class="logo"
        :src="detail.productPic"
        alt=""
      >
      <div class="information">
        <div>
          产品ID：<span class="highlight">{{ detail.productId }}</span>
        </div>
        <div>产品名称：{{ detail.productName }}</div>
        <div v-if="detail.desc">
          型号：{{ detail.desc }}
        </div>
        <div>参选：{{ detail.categoryId }}</div>
        <div>
          企业名称：{{ detail.companyName }}
        </div>
      </div>
    </div>
    <div class="image-container">
      <img
        v-for="item in productImages"
        :key="item"
        :src="item"
        alt=""
        class="production-image"
      >
    </div>
    <div class="action-container">
      <div>
        {{ detail.vDes }}
      </div>
      <div class="actions">
        <button @click="vote()">
          投票
        </button>
        <button @click="share=true">
          为我拉票
        </button>
      </div>
    </div>
    <div
      v-if="share"
      class="share"
      @click="share=false"
    >
      <img
        src="@/images/guide_share.png"
        alt=""
      >
    </div>
  </div>
</template>

<script>
import { Component, Vue, Prop } from 'vue-property-decorator'
import * as ProductAPI from '@/api/product'
import { State } from 'vuex-class'
import wxApi from '@/helpers/share'

export default @Component({})
class VoteProduct extends Vue {
  @State('open_id') openId
  @Prop({ required: true }) id

  detail = {}
  share = false

  get productImages () {
    return _.compact(this.detail.vPic?.split(',') || [])
  }

  mounted () {
    this.getProductDetail()
  }

  async getProductDetail () {
    const { result } = await ProductAPI.getIdeaDetail(this.id)
    this.detail = result
    await this.setShareMessage()
  }

  async vote () {
    const { message } = await ProductAPI.vote(this.id, this.openId)
    this.$toasted.show(message)
    await this.getProductDetail()
  }

  setShareMessage () {
    const { detail } = this
    wxApi.shareTimeline({
      title: detail.companyName + '邀请您莅临参观2021年中国国际消防设备技术交流展', // 分享标题
      link: window.location.href, // 分享链接
      imgUrl: 'http://www.view-ol.com/logo.png' // 分享图标
    })
    wxApi.shareAppMessage({
      title: detail.companyName + '邀请您莅临参观2021年中国国际消防设备技术交流展', // 分享标题
      desc: detail.content, // 分享描述
      link: window.location.href, // 分享链接
      imgUrl: 'http://www.view-ol.com/logo.png' // 分享图标
    })
  }
}
</script>

<style lang="scss" scoped>
.vote-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .count {
    margin-top: 0.5rem;
    width: 18.91rem;
    height: 3.05rem;
    border: 1px solid #A0C9FD;
    background: linear-gradient(0deg, #0251B6 0%, #0168EC 49%, #0251B6 100%);
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.29);
    border-radius: 2rem;
    display: flex;
    justify-items: center;
    align-items: center;
    position: relative;
    z-index: 99;

    .divide {
      width: 1px;
      height: 1.44rem;
      background: #D72316;
    }

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .number {
        font-size: 0.87rem;
        font-weight: 500;
        color: #FFFFFF;
      }

      .desc {
        font-size: 12px;
        font-weight: 400;
        color: #FFE200;
      }
    }
  }

  .production-container {
    margin-top: -1.5rem;
    background: #0251B6;
    width: 100%;
    border: 1px solid #A0C9FD;
    display: flex;
    padding: 2.81rem 0 1.55rem 1.52rem;

    .logo {
      width: 3.14rem;
      height: 3.14rem;
      background: #EEEEEE;
      border-radius: 0.75rem;
      margin-right: 1rem;
      overflow: hidden;
    }

    .information {
      font-size: 0.76rem;
      font-weight: 400;
      color: #FFFFFF;

      .highlight {
        color: #FFE204;
      }
    }
  }

  .image-container {
    width: 100%;
    display: flex;
    flex-direction: column;

    .production-image {
      margin-top: 0.31rem;
      width: 100%;
      background: #767676;
      border: 1px solid #A0C9FD;
      overflow: hidden;
    }
  }

  .action-container {
    margin-top: 0.31rem;
    width: 100%;
    background: #0251B6;
    border: 1px solid #A0C9FD;
    padding: 1.03rem 1.28rem 2.48rem;
    font-size: 0.76rem;
    font-weight: 400;

    color: #FFFFFF;

    .actions {
      margin-top: 3.14rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        margin-top: 1.22rem;
        width: 10.39rem;
        height: 1.8rem;
        border: 1px solid #FCD003;
        background: linear-gradient(0deg, #0251B6 0%, #0168EC 49%, #0251B6 100%);
        box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.29);
        border-radius: 1rem;
        font-size: 0.87rem;
        font-weight: 500;
        color: #FFE200;
      }
    }

  }

  .share {
    position: fixed;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    padding-right: 1.5rem;
    flex-direction: column;
    align-items: flex-end;

    img {
      width: 244px;
      height: 200px;
    }
  }
}
</style>
