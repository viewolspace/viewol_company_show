<template>
  <div class="search-result-container">
    <div class="item">
      <div class="id">
        ID 12345
      </div>
      <img
        class="image"
        src=""
        alt=""
      >
      <div class="sum">
        3333票
      </div>
      <div class="desc">
        智慧消防城市火灾风险防控及应急救援云平台，理工光科定制
      </div>
      <div>
        <button class="vote">
          投票
        </button>
      </div>
    </div>
    <div class="item">
      <div class="id">
        ID 12345
      </div>
      <img
        class="image"
        src=""
        alt=""
      >
      <div class="sum">
        3333票
      </div>
      <div class="desc">
        智慧消防城市火灾风险防控及应急救援云平台，理工光科定制
      </div>
      <div>
        <button class="vote">
          投票
        </button>
      </div>
    </div>
    <div class="item">
      <div class="id">
        ID 12345
      </div>
      <img
        class="image"
        src=""
        alt=""
      >
      <div class="sum">
        3333票
      </div>
      <div class="desc">
        智慧消防城市火灾风险防控及应急救援云平台，理工光科定制
      </div>
      <div>
        <button class="vote">
          投票
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

export default @Component({})
class SearchResultList extends Vue {

}
</script>

<style lang="scss" scoped>
.search-result-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    margin-top: 0.5rem;
    display: flex;
    padding: 0.9rem 0.33rem;
    flex-direction: column;
    align-items: center;
    width: 10.55rem;
    background: #A0C9FD;
    border: 1px solid #A0C9FD;

    .id {
      width: 5.39rem;
      height: 1.14rem;
      line-height: 1.14rem;
      background: #0251B6;
      border: 1px solid #A0C9FD;
      border-radius: 1rem;
      font-size: 0.76rem;
      font-family: SourceHanSansCN;
      font-weight: 400;
      color: #FEE302;
      text-align: center;
      position: relative;
      z-index: 99;
    }

    .image {
      margin-top: -9px;
      width: 9.88rem;
      height: 9.88rem;
      background: #FFFFFF;
      border: 1px solid #0251B6;
      border-radius: 1rem;
      overflow: hidden;
    }

    .sum {
      margin-top: 0.7rem;
      font-size: 0.76rem;
      font-weight: 400;
      color: #D72316;
    }

    .desc {
      margin-top: 0.7rem;
      font-size: 0.76rem;
      width: 9.06rem;
      height: 4rem;
      color: #01377C;
    }

    .vote {
      width: 5.39rem;
      height: 1.64rem;
      line-height: 1.64rem;
      border: 1px solid #A0C9FD;
      background: linear-gradient(0deg, #0251B6 0%, #0168EC 49%, #0251B6 100%);
      box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.52);
      border-radius: 1rem;
      font-size: 0.85rem;
      font-weight: 400;
      color: #FFFFFF;
    }
  }
}
</style>
