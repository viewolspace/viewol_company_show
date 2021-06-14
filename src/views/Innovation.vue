<template>
  <div class="innovation-container">
    <div class="nav">
      <img
        src="@/images/innovation/nav.png"
        alt=""
      >
    </div>
    <router-view class="content-container" />
    <div
      v-if="$route.meta.tab"
      class="bar"
    >
      <router-link
        :to="{name:'innovation_introduce'}"
        class="item"
      >
        <img
          class="icon"
          src="@/images/innovation/icon_introduce.png"
          alt=""
        >
        <div class="name">
          介绍
        </div>
      </router-link>
      <router-link
        :to="{name:'innovation_vote'}"
        class="item"
      >
        <img
          class="icon"
          src="@/images/innovation/icon_vote.png"
          alt=""
        >
        <div class="name">
          投票
        </div>
      </router-link>
      <router-link
        :to="{name:'innovation_rank'}"
        class="item"
      >
        <img
          class="icon"
          src="@/images/innovation/icon_rank.png"
          alt=""
        >
        <div class="name">
          排行
        </div>
      </router-link>
      <router-link
        class="item"
        :to="{name:'innovation_search'}"
      >
        <img
          class="icon"
          src="@/images/innovation/icon_search.png"
          alt=""
        >
        <div class="name">
          搜索
        </div>
      </router-link>
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

  .nav {
    border: 1px solid #A0C9FD;
    padding: 1.23rem 1.7rem 2.56rem;
  }
}

.content-container {
  margin-bottom: 3rem;
}

.bar {
  border-top: 2px solid #D72316;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 3.48rem;
  background: #0259C7;
  z-index: 999;

  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    appearance: none;
    height: 100%;

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
