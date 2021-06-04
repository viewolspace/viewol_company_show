<template>
  <div>
    <div class="container text-center pl-3 pr-3">
      <div class="d-flex justify-content-center">
        <div class="d-flex align-items-center logo">
          <img
            :src="company.logoView"
            alt="Logo"
          >
        </div>
      </div>
      <div class="mt-3 item-title">
        <span class="arrow" />
        <span class="arrow" />
        <span class="pl-3 pr-3">产品展示</span>
        <span class="arrow flip" />
        <span class="arrow flip" />
      </div>

      <div class="mt-4 product">
        <div
          v-for="(product,index) in products"
          :key="index"
          class="d-flex item justify-content-center"
        >
          <div
            v-for="item in product"
            :key="item"
          >
            <div class="single m-2 d-flex align-items-center">
              <img
                :src="item"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import _ from 'lodash'

@Component({
  props: {
    company: { required: true },
    show: { required: true, default: [] }
  }
})
export default class Product extends Vue {
  get products () {
    return _.chunk(this.show.productUrl, 1)
  }
}
</script>

<style lang="scss" scoped>
.product {
  .item {
    color: #2B3C4C;
    font-size: .875rem;
    font-weight: 500;

    .single {
      height: 14vh;
      background: white;
      border-radius: 2px;
      border: 1px solid rgba(175, 202, 230, 1);
      box-shadow: 0 0 .5rem 0 rgba(137, 152, 168, 0.75);

      img {
        max-height: 100%;
      }
    }
  }
}
</style>
