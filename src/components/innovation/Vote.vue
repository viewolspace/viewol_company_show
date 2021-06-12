<template>
  <div class="vote-container">
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
          排名
        </div>
      </div>
      <div class="divide" />
      <div class="item">
        <div class="number">
          231
        </div>
        <div class="desc">
          票数
        </div>
      </div>
      <div class="divide" />
      <div class="item">
        <div class="number">
          636333
        </div>
        <div class="desc">
          距上一名
        </div>
      </div>
    </div>
    <div class="production-container">
      <img
        class="logo"
        src=""
        alt=""
      >
      <div class="information">
        <div>
          产品ID：<span class="highlight">9048</span>
        </div>
        <div>产品名称：城市级消防物联网平台</div>
        <div>型号： zhilusaas 1.0</div>
        <div>参选：智慧消防技术产品</div>
        <div>
          企业名称：深圳知路科技有限公司
        </div>
      </div>
    </div>
    <div class="image-container">
      <img
        src=""
        alt=""
        class="production-image"
      >
    </div>
    <div class="action-container">
      <div>
        以应用支撑平台为中心，建设消防监管部门/消防救援机构的城市级综合管理平台，下辖五个子平台为联网单位、维保单位、设备制造商、保险机构和社会公众提供相关业务数据应用服务。
      </div>
      <div class="actions">
        <button>投票</button>
        <button>为我拉票</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

export default @Component({})
class Vote extends Vue {

}
</script>

<style lang="scss" scoped>
.vote-container {
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

  .production-container {
    margin-top: -1.5rem;
    background: #0251B6;
    width: 100%;
    border: 1px solid #A0C9FD;
    display: flex;
    padding: 2.81rem 0 1.55rem 1.52rem;

    .logo {
      width: 3.14rem;
      height: 3.14rem;
      background: #EEEEEE;
      border-radius: 0.75rem;
      margin-right: 1rem;
      overflow: hidden;
    }

    .information {
      font-size: 0.76rem;
      font-weight: 400;
      color: #FFFFFF;

      .highlight {
        color: #FFE204;
      }
    }
  }

  .image-container {
    width: 100%;
    display: flex;
    flex-direction: column;

    .production-image {
      margin-top: 0.31rem;
      width: 100%;
      background: #767676;
      border: 1px solid #A0C9FD;
      overflow: hidden;
    }
  }

  .action-container {
    margin-top: 0.31rem;
    width: 100%;
    background: #0251B6;
    border: 1px solid #A0C9FD;
    padding: 1.03rem 1.28rem 2.48rem;
    font-size: 0.76rem;
    font-weight: 400;

    color: #FFFFFF;

    .actions {
      margin-top: 3.14rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        margin-top: 1.22rem;
        width: 10.39rem;
        height: 1.8rem;
        border: 1px solid #FCD003;
        background: linear-gradient(0deg, #0251B6 0%, #0168EC 49%, #0251B6 100%);
        box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.29);
        border-radius: 1rem;
        font-size: 0.87rem;
        font-weight: 500;
        color: #FFE200;
      }
    }

  }
}
</style>
