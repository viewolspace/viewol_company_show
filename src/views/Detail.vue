<template>
    <main-view :product="product" :company="company" :comment="comment" :praise="praise" :see="see" @comment="commentCompany" @praise="praiseCompany"></main-view>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import { State, Action } from 'vuex-class'
  import MainView from '../components/Main.vue'

  @Component({
    components: {
      MainView
    }
  })
  export default class Detail extends Vue {
    @State('company') company
    @State('product') product
    @State('comment') comment
    @State('praise') praise
    @State('see') see

    @Action('praiseCompany') praiseCompany
    @Action('commentCompany') commentCompany
  }
</script>

<style lang="scss" scoped>

</style>
