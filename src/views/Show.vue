<template>
  <div class="section" v-if="false">
    <introduce-view :company="company" :show="show"></introduce-view>
    <history-view :company="company" :show="show"></history-view>
  </div>
  <swiper v-else :options="swiperOption" ref="swiper" style="" class="swiper-box section" @slideChange="swiperChange">
    <swiper-slide class="swiper-item" v-if="show">
      <introduce-view :company="company" :show="show"></introduce-view>
    </swiper-slide>
    <swiper-slide class="swiper-item" v-if="show && show.showFlag">
      <history-view :company="company" :show="show"></history-view>
    </swiper-slide>

    <swiper-slide class="swiper-item"></swiper-slide>
  </swiper>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import IntroduceView from '../components/Introduce'
import HistoryView from '../components/History'
import ProductView from '../components/Product'

@Component({
  components: {
    IntroduceView,
    HistoryView,
    ProductView
  }
})
export default class Show extends Vue {
  @State('show') show
  @State('company') company

  swiperOption = {
    direction: 'vertical',
    mousewheel: true
  }

  swiperChange () {
    let last = 2
    if (!this.show.showFlag) last = 1
    if (this.$refs.swiper.swiper.activeIndex === last) this.$router.push({name: 'detail'})
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
