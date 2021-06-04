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
      2021年10月13-15日
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
class InvitationEnvelope extends Vue {
  @Prop({ required: true }) detail
}
</script>

<style lang="scss" scoped>
.content-container {
  background-color: #ffffff;
  background-image: url("../../images/invitation/envelope/1.png");
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  .logo-container {
    margin-top: 14.5vw;

    img {
      width: 14vw;
      height: 14vw;
      background: #FFFFFF;
      border: 0.23rem solid #004883;
      border-radius: 50%;
    }
  }

  .name {
    margin-top: 46vw;
    font-size: 0.87rem;
    font-weight: 500;
    color: #004883;
  }

  .place {
    margin-top: 10vw;
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
