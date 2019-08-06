<template>
    <div class="section" id="introduce">
        <div class="d-flex justify-content-center">
            <div class="d-flex align-items-center logo">
                <img :src="company.logoView" alt="Logo">
            </div>
        </div>
        <div class="container text-center company pl-3 pr-3">
            <div class="name">{{company.name}}</div>
            <div class="mt-3 text-left content" v-html="company.content"></div>
            <div class="mt-4 images">
                <div v-for="item in show.imgUrl" :key="item"><img :src="item" alt=""></div>
            </div>
        </div>

        <div class="arrow-container">
            <div class="arrow"></div>
        </div>
    </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    props: {
      company: {required: true},
      show: {required: true}
    }
  })
  export default class Introduce extends Vue {

  }
</script>

<style lang="scss" scoped>
    .company {
        .name {
            color: #233C5A;
            font-size: 1rem;
        }

        .content {
            color: #2C4058;
            font-size: .9375rem;
        }

        .content {
            text-indent: 2rem;
            line-height: 1.6875rem;
        }

        .images {
            div {
                img {
                    width: 75%;
                    border: 2px solid white;
                    box-shadow: 0 10px 18px 0 rgba(166, 174, 187, 1);
                }

                &:nth-child(odd) {
                    text-align: left;
                }

                &:nth-child(even) {
                    text-align: right;
                }

                &:not(:first-child) {
                    margin-top: -4rem;
                }
            }
        }
    }
</style>
