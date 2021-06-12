<template>
  <div class="rank-container">
    <div class="nav">
      <img
        src="@/images/innovation/nav.png"
        alt=""
      >
    </div>
    <div class="count">
      <div class="item">
        <div class="number">
          636333
        </div>
        <div class="desc">
          总票数
        </div>
      </div>
      <div class="divide" />
      <div class="item">
        <div class="number">
          231
        </div>
        <div class="desc">
          产品数
        </div>
      </div>
      <div class="divide" />
      <div class="item">
        <div class="number">
          636333
        </div>
        <div class="desc">
          访问量
        </div>
      </div>
    </div>
    <div class="rule-container">
      <div class="item">
        <img
          src="@/images/innovation/icon_time.png"
          alt=""
          class="icon"
        >
        <div class="desc">
          投票开始：2021-06-15 00:00:00
        </div>
      </div>
      <div class="item">
        <img
          src="@/images/innovation/icon_time.png"
          alt=""
          class="icon"
        >
        <div class="desc">
          投票截止：2021-07-10 23:59:59
        </div>
      </div>
      <div class="item">
        <img
          src="@/images/innovation/icon_remain.png"
          alt=""
          class="icon"
        >
        <div class="desc">
          投票规则：每个微信号整个活动期间只能投10次
        </div>
      </div>
      <div class="item">
        <img
          src="@/images/innovation/icon_clock.png"
          alt=""
          class="icon"
        >
        <div class="desc">
          投票结束倒计时：<span class="remain">15天12时30分30秒</span>
        </div>
      </div>
    </div>
    <div class="search-container">
      <div class="content">
        <img
          src="@/images/innovation/icon_search.png"
          alt=""
        >
        <input
          type="text"
          placeholder="请输入产品编号 名称"
        >
        <a>搜索</a>
      </div>
      <div class="more">
        <a>查看介绍</a>
        <a>查看排行</a>
      </div>
    </div>
    <div class="category-container">
      <div class="item active">
        全部
      </div>
      <div class="item">
        智慧消防
      </div>
      <div class="item">
        灭火系统和消防器具
      </div>
      <div class="item">
        应急救援装备及职业健康
      </div>
      <div class="item">
        火灾防护及逃生自救
      </div>
      <div class="item">
        消防科研及火灾事故
      </div>
    </div>
    <div class="rank-list-container">
      <div class="title">
        排行榜
      </div>
      <div class="rank-list-top">
        <div class="item">
          <img
            class="rank-logo"
            src="@/images/innovation/rank_1.png"
            alt=""
          >
          <div>
            <div class="id">
              ID 12345
            </div>
            <div class="name">
              80米举高喷射消防车
            </div>
            <div class="company">
              广州市昕恒泵业制造有限公司
            </div>
            <div class="sum">
              68976 票
            </div>
          </div>
        </div>
      </div>
      <div class="rank-list-bottom">
        <div class="item">
          <div class="rank-no">
            4
          </div>
          <div class="detail">
            <img
              class="logo"
              src=""
              alt=""
            >
            <div class="information">
              <div class="id">
                ID 1234
              </div>
              <div class="name">
                智慧消防城市火灾风险防控及应急救援云平台,理工光科定制
              </div>
            </div>
            <div class="sum">
              68976 票
            </div>
          </div>
        </div>
      </div>
    </div>
    <search-result-list />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import SearchResultList from './SearchResultList.vue'

export default @Component({
  components: { SearchResultList }
})
class Rank extends Vue {

}
</script>

<style lang="scss" scoped>
.rank-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .nav {
    border: 1px solid #A0C9FD;
    padding: 1.23rem 1.7rem 2.56rem;
  }

  .count {
    margin-top: 0.5rem;
    width: 18.91rem;
    height: 3.05rem;
    border: 1px solid #A0C9FD;
    background: linear-gradient(0deg, #0251B6 0%, #0168EC 49%, #0251B6 100%);
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.29);
    border-radius: 2rem;
    display: flex;
    justify-items: center;
    align-items: center;
    position: relative;
    z-index: 99;

    .divide {
      width: 1px;
      height: 1.44rem;
      background: #D72316;
    }

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .number {
        font-size: 0.87rem;
        font-weight: 500;
        color: #FFFFFF;
      }

      .desc {
        font-size: 12px;
        font-weight: 400;
        color: #FFE200;
      }
    }
  }

  .rule-container {
    margin-top: -1.5rem;
    padding: 2rem 1.5rem 1.08rem;
    height: 11.14rem;
    background: #0251B6;
    border: 1px solid #A0C9FD;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .item {
      margin-top: 0.38rem;
      display: flex;
      padding: 0 0.33rem;
      width: 100%;
      align-items: center;
      background: #0259C7;
      height: 1.64rem;
      border: 1px solid #A0C9FD;
      border-radius: 1rem;

      .icon {
        width: 1.1rem;
      }

      .desc {
        margin-left: 0.75rem;
        font-size: 12px;
        font-weight: 400;
        color: #FFFFFF;

        .remain {
          color: #FFE204;
        }
      }
    }
  }

  .search-container {
    margin-top: 0.5rem;
    padding: 1.16rem 1.5rem 1.2rem;
    background: #0251B6;
    border: 1px solid #A0C9FD;
    width: 100%;

    .content {
      background: #A0C9FD;
      border: 1px solid #A0C9FD;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      padding-left: .47rem;

      img {
        width: 0.83rem;
        margin-right: 0.43rem;
      }

      input {
        flex: 1;
        background: transparent;
        border: none;
        font-size: 0.76rem;
        font-weight: 400;
        color: #024397;
      }

      a {
        width: 5.39rem;
        height: 1.64rem;
        line-height: 1.64rem;
        background: #0259C7;
        border: 1px solid #A0C9FD;
        border-radius: 1rem;
        font-size: 0.85rem;
        text-align: center;
        font-weight: 400;
        color: #FFFFFF;
      }
    }

    .more {
      margin-top: 0.53rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        width: 9.03rem;
        height: 1.64rem;
        line-height: 1.64rem;
        text-align: center;
        background: #0259C7;
        border: 1px solid #A0C9FD;
        border-radius: 1rem;
        font-size: 0.85rem;
        font-weight: 400;
        color: #FFFFFF;
      }
    }

  }

  .category-container {
    background: #0251B6;
    border: 1px solid #A0C9FD;
    width: 100%;
    padding: 1rem 1.5rem 1.48rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
      margin-top: .5rem;
      width: 9.03rem;
      height: 1.64rem;
      line-height: 1.64rem;
      text-align: center;
      background: #0259C7;
      border: 1px solid #A0C9FD;
      border-radius: 1rem;
      font-size: 0.76rem;
      font-weight: 400;
      color: #FFFFFF;

      &.active {
        color: #FFE100;

      }
    }
  }

  .rank-list-container {
    margin-top: 1.06rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      width: 16.47rem;
      height: 1.58rem;
      line-height: 1.58rem;
      text-align: center;
      border: 1px solid #A0C9FD;
      background: linear-gradient(0deg, #0251B6 0%, #0168EC 49%, #0251B6 100%);
      box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.29);
      border-radius: 1rem;
      font-size: 1.09rem;
      font-weight: 500;
      color: #FFE204;
      position: relative;
      z-index: 99;
    }

    .rank-list-top {
      margin-top: -.8rem;
      width: 100%;
      padding: 2rem 1rem 1.5rem;
      border: 1px solid #A0C9FD;

      .item {
        display: flex;
        align-items: center;
        width: 19.73rem;
        height: 7.28rem;
        background: #0259C7;
        border: 1px solid #A0C9FD;
        border-radius: 4rem;

        .rank-logo {
          height: 100%;
        }

        .id {
          font-size: 0.87rem;
          font-weight: bold;
          color: #FFE204;
        }

        .name {
          margin-top: 0.3rem;
          font-size: 0.85rem;
          font-weight: 400;
          color: #FFFFFF;
        }

        .company {
          margin-top: 0.8rem;
          font-size: 0.65rem;
          font-weight: 400;
          color: #FFFFFF;
        }

        .sum {
          margin-top: 0.3rem;
          height: 0.77rem;
          font-size: 0.85rem;
          font-weight: 400;
          color: #FFE204;
        }
      }
    }

    .rank-list-bottom {
      margin-top: 0.58rem;
      position: relative;
      background: #0259C7;
      border: 1px solid #A0C9FD;
      padding: 1.5rem .69rem 1.5rem .98rem;

      &:before {
        content: '';
        position: absolute;
        width: 1.92rem;
        height: 1.5rem;
        top: 0;
        left: 0;
        background: url("../../images/innovation/icon_ranking.png");
        background-size: 100%;

      }

      .item {
        display: flex;
        align-items: center;

        .rank-no {
          font-size: 0.87rem;
          font-family: SourceHanSansCN;
          font-weight: 500;
          color: #FFE204;
          margin-right: 0.95rem;
        }

        .detail {
          flex: 1;
          display: flex;
          align-items: center;
          height: 3.56rem;
          padding: 0 0.5rem;
          background: #014CAB;
          border: 1px solid #A0C9FD;
          border-radius: 2rem;

          .logo {
            width: 2.5rem;
            height: 2.5rem;
            background: #C9C7C8;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 0.36rem;
          }

          .information {
            flex: 1;

            .id {
              font-size: 0.87rem;
              font-weight: bold;
              color: #FFE204;
            }

            .name {
              font-size: 0.76rem;
              font-weight: 400;
              color: #FFFFFF;
            }
          }

          .sum {
            margin-left: 0.88rem;
            font-size: 0.85rem;
            font-weight: 400;
            color: #FFE204;
          }
        }

      }
    }
  }

}
</style>
