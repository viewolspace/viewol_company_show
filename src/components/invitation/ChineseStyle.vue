<template>
  <div class="content-container">
    <div class="logo-container">
      <img
        :src="detail.logoView"
        alt=""
      >
    </div>
    <div class="name">
      {{ detail.name }}
    </div>
    <div class="place">
      {{ detail.place }}
    </div>
    <div class="place-tip">
      我司展位号
    </div>
    <div class="time">
      2023年10月10-13日
    </div>
    <div class="location">
      中国国际展览中心（新馆）
    </div>
    <img
      class="qr"
      :src="detail.qr"
      alt=""
    >
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator'

export default @Component({})
class InvitationChineseStyle extends Vue {
  @Prop({ required: true }) detail
}
</script>

<style lang="scss" scoped>
.content-container {
  min-height: 100vh;
  background-image: url("../../images/invitation/chinese_style/1.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-color: #0C284A;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo-container {
    margin-top: 13.9vw;

    img {
      width: 14vw;
      height: 14vw;
      background: #FFFFFF;
      border: 0.23rem solid #004883;
      border-radius: 50%;
    }
  }

  .name {
    margin-top: 42.67vw;
    font-size: 0.87rem;
    font-weight: 500;
    color: #004883;
  }

  .place {
    margin-top: 9vw;
    font-size: 1.3rem;
    font-weight: bold;
    color: #BA801A;

    &-tip {
      font-size: 0.56rem;
      font-weight: 400;
      color: #BA801A;
    }
  }

  .time {
    margin-top: 37vw;
    font-size: 0.54rem;
    font-weight: 400;
    color: #FCFDFD;
  }

  .location {
    font-size: 0.54rem;
    font-weight: 400;
    color: #FCFDFD;
  }

  .qr {
    margin-top: 4.3vw;
    width: 6.64rem;
  }

}
</style>
