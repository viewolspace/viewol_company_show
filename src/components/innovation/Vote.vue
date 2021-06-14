<template>
  <div class="vote-container">
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
          v-model="condition.keywords"
          type="text"
          placeholder="请输入产品编号 名称"
        >
        <a @click="getIdeaProductList()">搜索</a>
      </div>
      <div class="more">
        <router-link
          class="action"
          :to="{name:'innovation_introduce'}"
        >
          查看介绍
        </router-link>
        <router-link
          class="action"
          :to="{name:'innovation_rank'}"
        >
          查看排行
        </router-link>
      </div>
    </div>
    <div class="category-container">
      <div
        class="item"
        :class="{'active':condition.category === ''}"
        @click="changeCategory('')"
      >
        全部
      </div>
      <div
        v-for="item in categoryList"
        :key="item"
        class="item"
        :class="{'active':condition.category === item}"
        @click="changeCategory(item)"
      >
        {{ item }}
      </div>
    </div>
    <div class="search-result-container">
      <div
        v-for="item in products"
        :key="item.productId"
        class="item"
      >
        <div class="id">
          ID {{ item.productId }}
        </div>
        <img
          class="image"
          :src="item.productPic"
          alt=""
        >
        <div class="sum">
          {{ item.vNum }}票
        </div>
        <div class="desc">
          {{ item.productName }}
        </div>
        <div>
          <router-link
            class="vote"
            :to="{name:'innovation_vote_product',params:{id:item.productId}}"
          >
            投票
          </router-link>
        </div>
      </div>
      <div
        v-if="products.length ===1"
        class="item empty"
      />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import * as ProductAPI from '@/api/product'
import moment from 'moment'

export default @Component({})
class Vote extends Vue {
  now = moment()
  startTime = '2021-06-15 00:00:00'
  endTime = '2021-07-10 23:59:59'

  categoryList = [
    '智慧消防', '灭火系统和消防器具', '应急救援装备及职业健康', '火灾防护及逃生自救', '消防科研及火灾事故'
  ]

  condition = {
    keywords: '',
    category: ''
  }

  summary = {
    pro: 0,
    vote: 0,
    join: 0
  }

  products = []

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
    this.getDefaultCondition()
    this.getProductSummary()
    this.getIdeaProductList()
    this.startCountDown()
  }

  getDefaultCondition () {
    const { keywords, category } = this.$route.query
    if (keywords) { this.condition.keywords = keywords }
    if (category) { this.condition.category = category }
  }

  changeCategory (category) {
    this.condition.category = category
    this.getIdeaProductList()
  }

  async getProductSummary () {
    this.summary = await ProductAPI.getSummary()
  }

  async getIdeaProductList () {
    const { result } = await ProductAPI.getIdeaList({
      name: this.condition.keywords,
      categoryId: this.condition.category,
      pageIndex: 1,
      num: 20
    })
    this.products = result
  }

  startCountDown () {
    setInterval(() => { this.now = moment() }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.vote-container {
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

      .action {
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
        text-decoration: none;
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

      &.empty {
        background: transparent;
        border: none;
      }

      .id {
        width: 5.39rem;
        height: 1.14rem;
        line-height: 1.14rem;
        background: #0251B6;
        border: 1px solid #A0C9FD;
        border-radius: 1rem;
        font-size: 0.76rem;
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
        object-fit: cover;
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
        text-align: center;
      }

      .vote {
        display: inline-block;
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
        text-decoration: none;
        text-align: center;
      }
    }
  }
}
</style>
