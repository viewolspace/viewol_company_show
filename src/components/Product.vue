<template>
    <div class="section">
        <div class="container text-center pl-3 pr-3">
            <div class="d-flex justify-content-center">
                <div class="d-flex align-items-center logo">
                    <img :src="company.logoView" alt="Logo">
                </div>
            </div>
            <div class="mt-3 item-title">
                <span class="arrow"></span>
                <span class="arrow"></span>
                <span class="pl-3 pr-3">产品展示</span>
                <span class="arrow flip"></span>
                <span class="arrow flip"></span>
            </div>

            <div class="mt-4 product">
                <div class="d-flex item justify-content-center" v-for="(product,index) in products" :key="index">
                    <div v-for="item in product" :key="item">
                        <div class="single m-2 d-flex align-items-center">
                            <img :src="item" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="arrow-container">
            <div class="arrow"></div>
        </div>
    </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import _ from 'lodash'

  @Component({
    props: {
      company: {required: true},
      show: {required: true, default: []}
    }
  })
  export default class Product extends Vue {
    get products () {
      return _.chunk(this.show.productUrl, 1)
    }
  }
</script>

<style lang="scss" scoped>
    .section {
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
    }
</style>
