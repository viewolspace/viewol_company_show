<template>
  <div class="search-container">
    <div class="keyword-container">
      <img
        src="@/images/innovation/icon_search.png"
        alt=""
      >
      <input
        v-model="keywords"
        type="text"
        placeholder="请输入产品编号 名称"
      >
    </div>
    <div>
      <a
        class="search"
        @click="toVotePage"
      >搜索</a>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

export default @Component({})
class Search extends Vue {
  keywords = ''

  toVotePage () {
    this.$router.push({
      name: 'innovation_vote',
      query: {
        keywords: this.keywords
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  background: #0251B6;
  border: 1px solid #A0C9FD;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem;

  .keyword-container {
    width: 100%;
    height: 1.64rem;
    background: #A0C9FD;
    border: 1px solid #A0C9FD;
    border-radius: 1rem;
    padding: 0 0.47rem;
    display: flex;
    align-items: center;

    img {
      height: 0.83rem;
    }

    input {
      flex: 1;
      border: none;
      appearance: none;
      background: transparent;
      font-size: 0.76rem;
      font-weight: 400;
      color: #024397;
    }
  }

  .search {
    margin-top: 0.8rem;
    display: inline-block;
    width: 10.53rem;
    height: 1.64rem;
    line-height: 1.64rem;
    border: 1px solid #A0C9FD;
    background: linear-gradient(0deg, #0251B6 0%, #0168EC 49%, #0251B6 100%);
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.29);
    border-radius: 1rem;
    font-size: 0.85rem;
    font-weight: 400;
    color: #FFE204;
    text-align: center;
    text-decoration: none;
  }
}
</style>
