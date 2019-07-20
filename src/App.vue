<template>
    <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-item" v-if="show">
            <introduce-view :company="company" :show="show"></introduce-view>
        </swiper-slide>
        <swiper-slide class="swiper-item" v-if="show">
            <history-view :company="company" :show="show"></history-view>
        </swiper-slide>
        <swiper-slide class="swiper-item" v-if="show">
            <product-view :company="company" :show="show"></product-view>
        </swiper-slide>
        <swiper-slide class="swiper-item company-item">
            <main-view :product="product" :company="company" :comment="comment" :praise="praise" :see="see" @praise="praiseCompany" @comment="commentCompany"></main-view>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import axios from 'axios'
  import qs from 'qs'
  import IntroduceView from './components/Introduce'
  import HistoryView from './components/History'
  import ProductView from './components/Product'
  import MainView from './components/Main.vue'

  const BASE_URL = 'https://www.view-ol.com/viewol_web'

  @Component({
    components: {
      IntroduceView,
      HistoryView,
      ProductView,
      MainView
    }
  })
  export default class App extends Vue {
    swiperOption = {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      mousewheel: true
    }
    companyId = 6
    expoId = 1
    show = null
    company = {}
    product = {}
    comment = []
    praise = []
    see = []

    async mounted () {
      let uri = window.location.search.substring(1)
      let params = new URLSearchParams(uri)
      this.companyId = params.get('company_id')
      this.userId = params.get('user_id')
      await this.getCompanyInformation()
      await this.getProductList()
    }

    async praiseCompany () {
      const {status} = await axios.post(`${BASE_URL}/company/praise`, qs.stringify({
        userId: this.userId,
        comId: this.companyId
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      if (status === '0000') await this.getCompanyInformation()
    }

    async commentCompany (comment) {
      const {status} = await axios.post(`${BASE_URL}/company/comment`, qs.stringify({
        userId: this.userId,
        comId: this.companyId,
        content: comment
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      if (status === '0000') await this.getCompanyInformation()
      await this.getCompanyInformation()
    }

    async getCompanyInformation () {
      const {result: company, comment, praise, see, showInfo} = await axios.get(`${BASE_URL}/company/getCompany`, {
        params: {
          id: this.companyId,
          userId: this.userId
        }
      })
      document.title = company.name
      this.company = company
      this.comment = comment
      this.praise = praise
      this.see = see
      if (showInfo) this.show = JSON.parse(showInfo)
    }

    async getProductList () {
      const {result} = await axios.get(`${BASE_URL}/product/listProduct`, {
        params: {
          expoId: this.expoId,
          companyId: this.companyId,
          num: 3
        }
      })
      this.product = result
    }

  }
</script>

<style lang="scss" scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .swiper-box {
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }

    .swiper-item {
        min-height: 100vh;
        height: auto;
        text-align: center;
    }


</style>
