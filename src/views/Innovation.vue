<template>
  <div class="innovation-container">
    <router-view />
    <div class="bar">
      <div class="item">
        <img
          class="icon"
          src="@/images/innovation/icon_introduce.png"
          alt=""
        >
        <div class="name">
          介绍
        </div>
      </div>
      <div class="item">
        <img
          class="icon"
          src="@/images/innovation/icon_vote.png"
          alt=""
        >
        <div class="name">
          投票
        </div>
      </div>
      <div class="item">
        <img
          class="icon"
          src="@/images/innovation/icon_rank.png"
          alt=""
        >
        <div class="name">
          排行
        </div>
      </div>
      <div class="item">
        <img
          class="icon"
          src="@/images/innovation/icon_search.png"
          alt=""
        >
        <div class="name">
          搜索
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

export default @Component({})
class Innovation extends Vue {

}
</script>

<style lang="scss" scoped>
.innovation-container {
  background: url("../images/background.png") repeat-y;
  background-size: 100%;
  min-height: 100vh;
  padding: 0.9rem 0.7rem;
}

.bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 3.48rem;
  background: #0259C7;

  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      height: 1.64rem;
    }

    .name {
      margin-top: 4px;
      font-size: 0.62rem;
      font-weight: 500;
      color: #FFDE00;
      line-height: 0.78rem;
    }
  }
}
</style>
