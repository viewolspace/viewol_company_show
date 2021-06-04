<template>
  <div class="content-container">
    <div class="logo-container">
      <img
        :src="detail.logoView"
        alt=""
      >
    </div>
    <img
      style="width: 100%;margin-top: -2.5rem;"
      src="@/images/invitation/gift/1.png"
      alt=""
    >
    <div class="name">
      {{ detail.name }}
    </div>
    <img
      style="width: 12.63rem;margin-top: 0.86rem;"
      src="@/images/invitation/gift/2.png"
      alt=""
    >
    <div class="place">
      {{ detail.place }}
    </div>
    <div class="place-tip">
      我司展位号
    </div>
    <div>
      <img
        src="@/images/invitation/gift/3.png"
        alt=""
      >
    </div>

    <img
      class="qr"
      :src="detail.qr"
      alt=""
    >
    <div class="time">
      2021年10月13-15日
    </div>
    <div class="location">
      中国国际展览中心（新馆）
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator'

export default @Component({})
class InvitationGift extends Vue {
  @Prop() detail

  mounted () {
    console.log(this.detail)
  }
}
</script>

<style lang="scss" scoped>
.content-container {
  min-height: 100vh;
  background: #051E40;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.9rem 0 0 0;

  .logo-container {
    img {
      width: 3.33rem;
      height: 3.33rem;
      background: #FFFFFF;
      border: 0.23rem solid #BA801A;
      border-radius: 50%;
    }
  }

  .name {
    font-size: 0.87rem;
    font-weight: 500;
    color: #FFFFFF;
  }

  .place {
    font-size: 1.3rem;
    font-weight: bold;
    color: #D6AE79;
    margin-top: 1.3rem;

    &-tip {
      font-size: 0.56rem;
      font-weight: 400;
      color: #D6AE79;
      margin-top: 0.42rem;
    }
  }

  .qr {
    margin-top: -6rem;
    width: 6.64rem;
  }

  .time{
    font-size: 0.54rem;
    font-weight: 400;
    color: #FCFDFD;
    margin-top: 0.73rem;
  }

  .location{
    font-size: 0.54rem;
    font-weight: 400;
    color: #FCFDFD;
    margin-top: 0.39rem;
  }

}
</style>
