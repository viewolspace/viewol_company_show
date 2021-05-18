<template>
  <div v-if="detail.id">
    <transition-group name="ab" tag="div" class="animate-background">
      <div v-for="item in background_list" :key="item"></div>
    </transition-group>
    <transition name="fade">
      <div class="content" v-if="show">
        <div class="inner">
          <div>
            <img class="title" src="../images/invitation/title.png" alt="">
          </div>
          <div>
            <div class="logo">
              <img :src="detail.logoView" alt="">
            </div>
          </div>
          <div class="name">
            {{ detail.name }}
          </div>
          <div class="welcome">
            邀请您莅临参观2019年中国<br>国际消防设备技术交流展
          </div>
          <div class="date">10.16-10.19</div>
          <div class="location">中国国际展览中心(新馆)</div>
          <div class="place">
            <div class="place-inner">
              {{ detail.place }}
            </div>
          </div>
          <div><img class="qr-code" :src="detail.qr" alt=""></div>
          <div class="tip">长按识别二维码</div>
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
import { Vue, Watch, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'
import wxApi from '../helpers/share'

@Component
export default class Invitation extends Vue {
  @State('invitation_detail') detail

  background_list = []
  show = false

  @Watch('detail', {deep: true})
  handlerDetailChange () {
    this.setShareMessage()
  }

  async mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.background_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
      }, 1000)

      setTimeout(() => {
        this.show = true
      }, 3000)
    })
    await wxApi.register(() => {
      this.setShareMessage()
    })
  }

  setShareMessage () {
    const {detail} = this
    wxApi.shareTimeline({
      title: detail.name + '邀请您莅临参观2019年中国国际消防设备技术交流展', // 分享标题
      link: window.location.href, // 分享链接
      imgUrl: 'http://www.view-ol.com/logo.png', // 分享图标
    })
    wxApi.shareAppMessage({
      title: detail.name + '邀请您莅临参观2019年中国国际消防设备技术交流展', // 分享标题
      desc: detail.content, // 分享描述
      link: window.location.href, // 分享链接
      imgUrl: 'http://www.view-ol.com/logo.png', // 分享图标
    })
  }
}
</script>

<style lang="scss" scoped>

.animate-background {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;

  .ab-enter {
    opacity: 0;
    transform: translateY(100%);

    &:nth-child(odd) {
      transform: translateY(-100%);
    }
  }

  .ab-enter-active {
    &:nth-child(4n) {
      transition: 1.5s;
    }

    &:nth-child(4n+1) {
      transition: 1.8s;
    }

    &:nth-child(4n+2) {
      transition: 2.2s;
    }

    &:nth-child(4n+3) {
      transition: 2.5s;
    }

  }

  .ab-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  & > div {
    flex: 1;
    background: #013F94;
  }
}

.content {
  position: relative;
  z-index: 9999;
  text-align: center;
  /*background: red;*/
  background: url("../images/invitation/background.png") repeat-y;
  background-size: 100% auto;
  padding: 1rem 1.8rem;

  .inner {
    background: url("../images/invitation/background-inner.png") no-repeat;
    background-size: 100% auto;
    padding: 3.1rem 0;

    .title {
      width: 10.25rem;
    }

    .logo {
      margin-top: 1.84rem;
      display: inline-block;
      background: white;
      width: 3.75rem;
      height: 3.75rem;
      padding: .5rem;
      border-radius: 3.75rem;
      overflow: hidden;
      position: relative;

      img {
        position: absolute;
        top: 50%;
        left: 10%;
        transform: translateY(-50%);
        max-width: 80%;
      }
    }

    .name {
      margin-top: 1.25rem;
      font-size: 1rem;
      color: #1c3e5c;
    }

    .welcome {
      margin-top: 1.25rem;
      font-size: .88rem;
      color: #1c3e5c;
    }

    .date {
      margin-top: .88rem;
      font-size: 1rem;
      color: #fe2023;
    }

    .location {
      margin-top: .75rem;
      font-size: 0.81rem;
      color: #2661a7;
    }

    .place {
      margin-top: 1.25rem;
      font-size: 1.56rem;
      color: #ffffff;

      .place-inner {
        background-size: 100%;
        display: inline-block;
        width: 12.16rem;
        height: 4.47rem;
        line-height: 3.3rem;
        white-space: nowrap;
        overflow: hidden;
        padding: 0 1rem;
        text-overflow: ellipsis;
      }
    }

    .qr-code {
      margin-top: 1.25rem;
      width: 7rem;
    }

    .tip {
      font-size: 0.69rem;
      line-height: 1.25rem;
      letter-spacing: -0.03rem;
      color: #2661a7;
    }
  }
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

</style>
