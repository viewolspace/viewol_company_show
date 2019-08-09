<template>
    <pull-to :top-load-method="refresh" v-if="show" :top-config="config">
        <main-view :product="product" :company="company" :comment="comment" :praise="praise" :see="see" @comment="commentCompany" @praise="praiseCompany"></main-view>
    </pull-to>
    <div v-else>
        <main-view :product="product" :company="company" :comment="comment" :praise="praise" :see="see" @comment="commentCompany" @praise="praiseCompany"></main-view>
    </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import { State, Action } from 'vuex-class'
  import MainView from '../components/Main.vue'
  import PullTo from 'vue-pull-to'

  @Component({
    components: {
      MainView,
      PullTo
    }
  })
  export default class Detail extends Vue {
    @State('show') show
    @State('company') company
    @State('product') product
    @State('comment') comment
    @State('praise') praise
    @State('see') see

    @Action('praiseCompany') praiseCompany
    @Action('commentCompany') commentCompany

    config = {
      pullText: '', // 下拉时显示的文字
      triggerText: '', // 下拉到触发距离时显示的文字
      loadingText: '', // 加载中的文字
    }

    refresh () {
      this.$router.back()
    }
  }
</script>

<style lang="scss" scoped>

</style>
