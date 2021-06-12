<template>
  <div class="canvassing-container">
    <div class="nav">
      <img
        src="@/images/innovation/nav.png"
        alt=""
      >
    </div>
    <div class="detail-container">
      <div>
        <img
          src=""
          alt=""
        >
        <div>
          <div>id</div>
          <div>产品</div>
          <div>型号</div>
          <div>参选</div>
          <div>企业名称</div>
          <div>
            <img
              src=""
              alt=""
            >
          </div>
          <div>
            请长按二维码分享朋友圈帮我拉票
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

export default @Component({})
class Canvassing extends Vue {

}
</script>

<style lang="scss" scoped>
.canvassing-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../../images/background.png") repeat-y;
  background-size: 100%;
  min-height: 100vh;
  padding: 0.9rem 0.7rem;

  .nav {
    border: 1px solid #A0C9FD;
    padding: 1.23rem 1.7rem 2.56rem;
  }

  .detail-container {

  }
}
</style>
