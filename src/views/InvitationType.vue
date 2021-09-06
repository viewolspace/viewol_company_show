<template>
  <div v-if="detail.id">
<!--    <gift-style-->
<!--      v-if="type==='1'"-->
<!--      :detail="detail"-->
<!--    />-->
<!--    <chinese-style-->
<!--      v-else-if="type==='2'"-->
<!--      :detail="detail"-->
<!--    />-->
<!--    <envelope-style-->
<!--      v-else-if="type==='3'"-->
<!--      :detail="detail"-->
<!--    />-->
  </div>
</template>

<script>
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
import { State } from 'vuex-class'
import wxApi from '../helpers/share'

@Component({

})
export default class Invitation extends Vue {
  @State('invitation_detail') detail
  @Prop() type

  @Watch('detail', { deep: true })
  handlerDetailChange () {
    this.setShareMessage()
  }

  async mounted () {
    console.log(this.type)
    await wxApi.register(() => {
      this.setShareMessage()
    })
  }

  setShareMessage () {
    const { detail } = this
    wxApi.shareTimeline({
      title: detail.name + '邀请您莅临参观2021年中国国际消防设备技术交流展', // 分享标题
      link: window.location.href, // 分享链接
      imgUrl: 'http://www.view-ol.com/logo.png' // 分享图标
    })
    wxApi.shareAppMessage({
      title: detail.name + '邀请您莅临参观2021年中国国际消防设备技术交流展', // 分享标题
      desc: detail.content, // 分享描述
      link: window.location.href, // 分享链接
      imgUrl: 'http://www.view-ol.com/logo.png' // 分享图标
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
