<template>
  <div
    v-if="detail.id"
    class="invitation-container"
  >
    <div class="top">
      <img
        class="logo"
        :src="detail.logoView"
        alt=""
      >
      <div class="name">
        {{ detail.name }}
      </div>
    </div>
    <div class="place">
      <img
        class="active-logo"
        src="../images/invitation/nav.png"
        alt=""
      >
      <div class="place-no">
        {{ detail.place }}
      </div>
      <div class="place-tip">
        展位号
      </div>
    </div>
    <div class="bottom">
      <div class="basic">
        <div class="name">
          2021中国国际消防设备技术交流展览会
        </div>
        <div class="info">
          <div class="item">
            <div>主办</div>
            <div>中国消防协会</div>
          </div>
          <div class="item">
            <div>时间</div>
            <div>2021年10月12-15日</div>
          </div>
          <div class="item">
            <div>地点</div>
            <div>中国国际展览中心（新馆）</div>
          </div>
        </div>
        <img
          class="qr"
          :src="detail.qr"
          alt=""
        >
      </div>
      <div class="press-tip">
        请长按二维码获得电子入场券
      </div>
    </div>

    <!--    <gift-style-->
    <!--      v-if="type==='1'"-->
    <!--      :detail="detail"-->
    <!--    />-->
    <!--    <chinese-style-->
    <!--      v-else-if="type==='2'"-->
    <!--      :detail="detail"-->
    <!--    />-->
    <!--    <envelope-style-->
    <!--      v-else-if="type==='3'"-->
    <!--      :detail="detail"-->
    <!--    />-->
  </div>
</template>

<script>
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
import { State } from 'vuex-class'
import wxApi from '../helpers/share'

@Component({})
export default class Invitation extends Vue {
  @State('invitation_detail') detail
  @Prop() type

  @Watch('detail', { deep: true })
  handlerDetailChange () {
    this.setShareMessage()
  }

  async mounted () {
    console.log(this.type)
    await wxApi.register(() => {
      this.setShareMessage()
    })
  }

  setShareMessage () {
    const { detail } = this
    wxApi.shareTimeline({
      title: detail.name + '邀请您莅临参观2021年中国国际消防设备技术交流展', // 分享标题
      link: window.location.href, // 分享链接
      imgUrl: 'http://www.view-ol.com/logo.png' // 分享图标
    })
    wxApi.shareAppMessage({
      title: detail.name + '邀请您莅临参观2021年中国国际消防设备技术交流展', // 分享标题
      desc: detail.content, // 分享描述
      link: window.location.href, // 分享链接
      imgUrl: 'http://www.view-ol.com/logo.png' // 分享图标
    })
  }
}
</script>

<style lang="scss" scoped>
.invitation-container {
  background: url(../images/invitation/background_mixin.png);
  padding: 2rem 0.8rem 0;
  min-height: 100vh;
  background-size: cover;

  .top {
    border: 2px solid #A0C9FD;
    border-radius: 1rem 1rem 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
      margin-top: -1.66rem;
      width: 3.33rem;
      height: 3.33rem;
      object-fit: cover;
      border-radius: 50%;
    }

    .name {
      margin-top: 0.98rem;
      margin-bottom: 0.92rem;
      font-size: 1rem;
      font-weight: bold;
      color: #FFFFFF;
    }
  }

  .place {
    margin-top: 0.34rem;
    border: 2px solid #A0C9FD;
    padding: 2.67rem 1.9rem 2.53rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .active-logo {
      width: 100%;
    }

    .place-no {
      margin-top: 1.28rem;
      width: 15.75rem;
      height: 1.88rem;
      background: #FFFFFF;
      border-radius: 1rem;
      font-size: 1.3rem;
      font-weight: bold;
      color: #0251B6;
      text-align: center;
    }

    .place-tip {
      margin-top: -.2rem;
      font-size: 0.56rem;
      color: #0251B6;
      width: 7.72rem;
      height: 1rem;
      line-height: 1rem;
      background: #FFE200;
      border: 1px solid #0251B6;
      border-radius: 1rem;
      letter-spacing: 8px;
      text-align: center;
    }
  }

  .bottom {
    margin-top: 0.53rem;

    .basic {
      background: #A0C9FD;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 2px solid #A0C9FD;
      padding: 1.14rem;

      .name {
        font-size: 0.96rem;
        font-weight: bold;
        color: #0251B6;
      }

      .info {
        margin-top: 0.7rem;
        font-size: 0.9rem;
        color: #0251B6;
        line-height: 1.29rem;

        .item {
          display: flex;

          div {
            &:first-child {
              padding-right: 0.3rem;
              border-right: 1px solid #EB2316;
            }

            &:last-child {
              padding-left: 0.2rem;
            }
          }
        }
      }

      .qr {
        margin-top: 0.84rem;
        width: 10rem;
        height: 10rem;
      }
    }

    .press-tip {
      font-size: 0.8rem;
      text-align: center;
      padding: 1rem;
      font-weight: 400;
      color: #FEFEFE;
      border: 2px solid #A0C9FD;
      border-top: none;
      border-radius: 0 0 1rem 1rem;
    }
  }
}

</style>
