<template>
  <div class="introduce-container">
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
          投票开始：{{ startTime }}
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
          投票结束倒计时：<span class="remain">{{ countdown }}</span>
        </div>
      </div>
    </div>
    <div class="desc-container">
      <div class="title">
        活动介绍
      </div>
      <div class="content">
        <div>
          <div class="paragraph">
            由中国消防协会主办的第十九届中国国际消防设备技术交流展览会于2023年10月10日至13日在北京中国国际展览中心新馆隆重举行。
          </div>
          <div class="paragraph">
            中国消防协会本着“引领产业优化升级，强化国家战略科技力量”主旨，在展览会期间推出了中国国际消防展创新产品评选活动。目前活动申报工作已开始，欢迎新老朋友踊跃报名。
          </div>
          <div class="paragraph">
            本届消防创新产品评选活动，定位为“引领和代表全国质量型开发的核心、探索全球创新供给的先行”。组委会面向国内外消防领域，广泛征集、评审行业新技术、新产品、新装备，并以消防创新成果技术交流会及创新评比颁奖典礼形式，促进、推广消防创新产品进一步的研发和运用。
          </div>
          <div class="paragraph">
            本届消防创新产品活动，把握创新产品的国际化、多元化和实用化，注重创新产品的展现力、推动力和影响力，突出创新产品的“高科”“高新”等创新亮点，在着力于扶持并鼓励创新型消防企业的同时，本着“每个企业都是创新阵地，每类项目都是创新空间”理念，提升展商创新产品的申报条件、评选标准、审定规格。
          </div>
          <div class="paragraph">
            中国消防协会将组织行业专家团队，对参加创新产品评选的企业，以演讲、展示、实操展演等多种形式，进行严格规范的审核。对参加评审和评审入选的创新产品，制定名录手册，借助专业媒体重点宣传、定向传播、强力推荐。通过创新产品审定的优秀企业，可参与2023年消防展开幕式环节的中国消防创新评比颁奖典礼，并有机会在创新成果技术交流高峰论坛及消协会组织其它开放型论坛中发表演讲（通过审核资格的企业均可自行申报）。
          </div>
        </div>
      </div>
    </div>
    <div class="desc-container">
      <div class="title">
        评选规则
      </div>
      <div class="content">
        <div>
          <div class="star-container">
            <img
              src="@/images/innovation/icon_star.png"
              alt=""
            >
            <div class="start">
              <b>网络投票结果将作为本届创新产品评选的重要参考项</b>
            </div>
          </div>

          <div class="star-container">
            <img
              src="@/images/innovation/icon_star.png"
              alt=""
            >
            <div>
              <div class="star">
                <b>网络投票结果前十名的产品（企业）</b>
              </div>
              <div>作为参加下届展会展位优先协调的参考依据</div>
              <div>作为消防企业信用等级评价的重要依据</div>
              <div>作为中国消防协会团体标准的重要参考内容</div>
              <div>作为中国消防协会科学技术创新奖评选的重要推荐</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="desc-container">
      <div class="title">
        活动流程
      </div>
      <div class="content">
        <div>
          <div class="phase">
            <div class="sub-title">
              第一阶段：报名阶段
            </div>
            <div class="item">
              <div class="key">
                报名时间：
              </div>
              5月8日-6月27日
            </div>
            <div class="item">
              <div class="key">
                报名方式：
              </div>
              展会官网—展商登录—信息申报—申请创新产品
            </div>
          </div>
          <div class="phase">
            <div class="sub-title">
              第二阶段：投票阶段
            </div>
            <div class="item">
              <div class="key">
                投票时间：
              </div>
              <div>6月15日-7月10日（10日24：00结束投票）</div>
            </div>
            <div class="item">
              <div class="key">
                投票规则：
              </div>
              <div>每个微信每天可投1票，只能为一个企业的一个技术产品投1票</div>
            </div>
            <div class="item">
              <div class="key">
                投票声明：
              </div>
              系统会自动检测并提示投票无效
            </div>
          </div>
          <div class="phase">
            <div class="sub-title">
              第三阶段：专家评审
            </div>
            <div class="item">
              <div class="key">
                评审时间：
              </div>
              7月下旬（具体时间地点待定）
            </div>
          </div>
          <div class="phase">
            <div class="sub-title">
              第四阶段：授牌公布
            </div>
            <div class="item">
              <div class="key">
                颁奖时间：
              </div>
              10月12日开幕式现场
            </div>
            <div class="item">
              <div class="key">
                颁奖地点：
              </div>
              中国国际展览中心（新馆）南登录厅
            </div>
          </div>
          <div class="tip">
            本活动最终解释权归主办方所有
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import * as ProductAPI from '@/api/product'
import moment from 'moment'

export default @Component({})
class Introduce extends Vue {
  now = moment()
  startTime = '2023-06-15 00:00:00'
  endTime = '2023-07-10 23:59:59'

  summary = {
    pro: 0,
    vote: 0,
    join: 0
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
    this.startCountDown()
  }

  async getProductSummary () {
    this.summary = await ProductAPI.getSummary()
  }

  startCountDown () {
    setInterval(() => { this.now = moment() }, 1000)
  }
}
</script>

<style lang="scss" scoped>

.introduce-container {
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

        .remain {
          color: #FFE204;
        }
      }
    }
  }

  .desc-container {
    background: #A0C9FD;
    padding: 0.39rem 0.8rem 1.38rem;
    border: 1px solid #A0C9FD;
    margin-bottom: 0.6rem;
    width: 100%;

    .title {
      margin-left: 0.75rem;
      width: 7.81rem;
      height: 1.02rem;
      background: #0156C1;
      border-radius: 1rem;
      font-size: 12px;
      font-weight: 400;
      color: #FFE200;
      letter-spacing: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .content {
      margin-top: -0.5rem;
      font-size: 12px;
      font-weight: 400;
      color: #024397;
      border: 1px solid #0251B6;
      border-radius: 1rem;
      padding: 1.58rem 0.8rem 1.11rem;

      .paragraph {
        text-align: justify;
        line-height: 1.5;
        text-indent: 24px;
      }

      .star-container {
        display: flex;

        &:not(:first-child) {
          margin-top: 1rem;
        }

        img {
          width: 1.06rem;
          height: 1.06rem;
          margin-right: 0.64rem;
        }
      }

      .phase {
        &:not(:first-child) {
          margin-top: 0.75rem;
        }

        .sub-title {
          font-size: 12px;
          height: 1rem;
          padding: 0 0.5rem;
          line-height: 1rem;
          background: #FFDE00;
          border-radius: .5rem;
          font-weight: bold;
          color: #024397;
          display: inline-block;
        }

        .item {
          display: flex;

          .key {
            padding-left: 0.5rem;
            width: 68px;
            flex: none;
          }
        }
      }

      .tip {
        text-align: center;
        margin-top: 1.5rem;
      }
    }
  }
}
</style>
