<template>
  <pull-to
    class="section"
    :bottom-load-method="toDetail"
    :bottom-config="{pullText:'',triggerText:''}"
  >
    <introduce-view
      :company="company"
      :show="show"
    />
    <history-view
      :company="company"
      :show="show"
    />
  </pull-to>
  <!--  <swiper v-else :options="swiperOption" ref="swiper" style="" class="swiper-box section" @slideChange="swiperChange">-->
  <!--    <swiper-slide class="swiper-item" v-if="show">-->
  <!--      <introduce-view :company="company" :show="show"></introduce-view>-->
  <!--    </swiper-slide>-->
  <!--    <swiper-slide class="swiper-item" v-if="show && show.showFlag">-->
  <!--      <history-view :company="company" :show="show"></history-view>-->
  <!--    </swiper-slide>-->

  <!--    <swiper-slide class="swiper-item"></swiper-slide>-->
  <!--  </swiper>-->
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import IntroduceView from '../components/Introduce'
import HistoryView from '../components/History'
import ProductView from '../components/Product'
import PullTo from 'vue-pull-to'

@Component({
  components: {
    IntroduceView,
    HistoryView,
    ProductView,
    PullTo
  }
})
export default class Show extends Vue {
  @State('show') show
  @State('company') company

  // swiperOption = {
  //   direction: 'vertical',
  //   mousewheel: true
  // }
  //
  // swiperChange () {
  //   let last = 2
  //   if (!this.show.showFlag) last = 1
  //   if (this.$refs.swiper.swiper.activeIndex === last) this.$router.push({ name: 'detail' })
  // }

  toDetail () {
    this.$router.push({ name: 'detail' })
  }
}
</script>

<style scoped lang="scss">
.swiper-box {
  height: 100vh;

  .swiper-item {
    height: 100vh;
  }
}

</style>
