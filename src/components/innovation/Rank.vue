<template>
  <div class="rank-container">
    <div class="count">
      <div class="item">
        <div class="number">
          {{ summary.vote }}
        </div>
        <div class="desc">
          总票数
        </div>
      </div>
      <div class="divide" />
      <div class="item">
        <div class="number">
          {{ summary.pro }}
        </div>
        <div class="desc">
          产品数
        </div>
      </div>
      <div class="divide" />
      <div class="item">
        <div class="number">
          {{ summary.join }}
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
          投票截止：{{ endTime }}
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
          投票结束倒计时：<span class="highlight">{{ countdown }}</span>
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
          v-model="keywords"
          type="text"
          placeholder="请输入产品编号 名称"
        >
        <a @click="toVotePage({keywords})">搜索</a>
      </div>
    </div>
    <div class="category-container">
      <div
        v-for="(item,key) in categoryList"
        :key="key"
        class="item"
        @click="toVotePage({category:key})"
      >
        {{ item }}
      </div>
    </div>
    <div class="rank-list-container">
      <div class="title">
        排行榜
      </div>
      <div
        v-if="topProducts.length"
        class="rank-list-top"
      >
        <router-link
          v-for="(item,index) in topProducts"
          :key="item.productId"
          :to="{name:'innovation_vote_product',params:{id:item.productId}}"
          class="item"
        >
          <img
            v-if="index===0"
            class="rank-logo"
            src="@/images/innovation/rank_1.png"
            alt=""
          >
          <img
            v-if="index===1"
            class="rank-logo"
            src="@/images/innovation/rank_2.png"
            alt=""
          >
          <img
            v-if="index===2"
            class="rank-logo"
            src="@/images/innovation/rank_3.png"
            alt=""
          >
          <div>
            <div class="id">
              ID {{ item.productId }}
            </div>
            <div class="name">
              {{ item.productName }}
            </div>
            <div class="company">
              {{ item.company }}
            </div>
            <div class="sum">
              {{ item.vNum }} 票
            </div>
          </div>
        </router-link>
      </div>
      <div
        v-if="bottomProducts.length"
        class="rank-list-bottom"
      >
        <router-link
          v-for="(item, index) in bottomProducts"
          :key="item.productId"
          :to="{name:'innovation_vote_product',params:{id:item.productId}}"
          class="item"
        >
          <div class="rank-no">
            {{ index + 4 }}
          </div>
          <div class="detail">
            <img
              class="logo"
              :src="item.v_logo"
              alt=""
            >
            <div class="information">
              <div class="id">
                ID {{ item.productId }}
              </div>
              <div class="name">
                {{ item.productName }}
              </div>
            </div>
            <div class="sum">
              {{ item.vNum }} 票
            </div>
          </div>
        </router-link>
        <div
          class="more"
          @click="more=!more"
        >
          <img
            :class="{'show':more}"
            src="@/images/innovation/icon_more.png"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import moment from 'moment'
import * as ProductAPI from '@/api/product'

export default @Component({})
class Rank extends Vue {
  now = moment()
  startTime = '2021-06-15 00:00:00'
  endTime = '2021-07-10 23:59:59'
  keywords = ''
  more = false
  categoryList = {
    1: '全部',
    2: '智慧消防',
    3: '灭火系统和消防器具',
    4: '应急救援装备及职业健康',
    5: '火灾防护及逃生自救',
    6: '消防科研及火灾事故'
  }

  summary = {
    pro: 0,
    vote: 0,
    join: 0
  }

  products = []

  get topProducts () {
    return this.products.slice(0, 3)
  }

  get bottomProducts () {
    return this.products.slice(3, this.more ? 100 : 10)
  }

  get countdown () {
    const now = this.now
    const start = moment(this.startTime)
    const end = moment(this.endTime)
    if (this.now.isBefore(start)) {
      return '投票还未开始'
    }

    if (this.now.isAfter(end)) {
      return '投票已经结束'
    }
    const remain = end.diff(now, 'seconds') // 1
    const days = remain / 3600 / 24
    const day = Math.floor(days)
    const hours = (days - day) * 24
    const hour = Math.floor(hours)
    const minutes = (hours - hour) * 60
    const minute = Math.floor(minutes)
    const seconds = (minutes - minute) * 60
    const second = Math.floor(seconds)
    return day + '天' + _.padStart(String(hour), '0') + '小时' + _.padStart(String(minute), '0') + '分钟' + _.padStart(String(second), '0') + '秒'
  }

  mounted () {
    this.getProductSummary()
    this.getIdeaProductList()
    this.startCountDown()
  }

  async getProductSummary () {
    this.summary = await ProductAPI.getSummary()
  }

  async getIdeaProductList () {
    const { result } = await ProductAPI.getIdeaList({ pageIndex: 1, num: 99 })
    this.products = result
  }

  startCountDown () {
    setInterval(() => { this.now = moment() }, 1000)
  }

  toVotePage (query) {
    this.$router.push({ name: 'innovation_vote', query })
  }
}
</script>

<style lang="scss" scoped>
.rank-container {
  display: flex;
  flex-direction: column;
  align-items: center;

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
        white-space: nowrap;
        font-weight: 400;
        color: #FFFFFF;

        .highlight {
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
    margin-top: 0.5rem;
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
      max-width: 49%;
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
    width: 100%;
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
        width: 100%;
        height: 7.28rem;
        background: #0259C7;
        border: 1px solid #A0C9FD;
        border-radius: 4rem;

        &:not(:first-child) {
          margin-top: 1rem;
        }

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
      width: 100%;
      margin-top: 0.58rem;
      position: relative;
      background: #0259C7;
      border: 1px solid #A0C9FD;
      padding: 1.5rem .69rem 1.5rem .98rem;
      margin-bottom: 1rem;

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
        margin-bottom: 2px;
        display: flex;
        align-items: center;

        .rank-no {
          font-size: 0.87rem;
          font-weight: 500;
          color: #FFE204;
          width: 1.5rem;
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

      .more {
        position: absolute;
        bottom: -1rem;
        left: 50%;
        transform: translateX(-50%);

        img {
          width: 1rem;
          background: #FFFFFF;
          border-radius: 1rem;
          overflow: hidden;

          &.show {
            transform: rotate(180deg);
          }
        }
      }
    }
  }

}
</style>
