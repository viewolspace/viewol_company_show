<template>
    <swiper :options="swiperOption" ref="swiper" class="swiper-box" @slideChange="swiperChange">
        <swiper-slide class="swiper-item" v-if="show">
            <introduce-view :company="company" :show="show"></introduce-view>
        </swiper-slide>
        <swiper-slide class="swiper-item" v-if="show">
            <history-view :company="company" :show="show"></history-view>
        </swiper-slide>
        <swiper-slide class="swiper-item" v-if="show">
            <product-view :company="company" :show="show"></product-view>
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
      if (this.$refs.swiper.swiper.activeIndex === 3) this.$router.push({name: 'detail'})
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
