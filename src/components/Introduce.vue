<template>
  <div id="introduce">
    <div class="container text-center company pl-3 pr-3">
      <div class="d-flex flex-column align-items-center section-header">
        <div class="d-flex align-items-center">
          <img class="logo-image" :src="company.logoView" alt="Logo">
        </div>
        <div class="name">{{ company.name }}</div>
      </div>
      <div class="mt-3 text-left content" v-html="company.content"></div>
      <div class="mt-4 images">
        <div v-for="item in show.imgUrl" :key="item"><img class="w-100" :src="item" alt=""></div>
      </div>
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
  .content {
    font-size: 0.76rem;
    color: #FFFFFF;
    text-indent: 2rem;
    line-height: 1.4rem;
    word-break: break-all;
    text-align: justify;
    margin-top: 0.4rem;
    border: 1.5px solid #A0C9FD;
    padding: 0.8rem;
  }

  .images {
    div {
      img {
        background: white;
        border: 2px solid white;
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
