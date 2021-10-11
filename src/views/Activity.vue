<template>
  <div
    v-if="info"
    class="activity-page-container"
  >
    <img
      class="nav"
      src="@/images/nav.png"
      alt=""
    >
    <div class="divide" />
    <div class="title-container">
      <div class="title">
        {{ info.mc }}
      </div>
      <div class="sub-title">
        智慧消防 引领未来
      </div>
      <div class="enterprise">
        <div v-if="info.companyName">
          主办 {{ info.companyName }}
        </div>
        <div v-if="info.cb">
          承办 {{ info.cb }}
        </div>
        <div v-if="info.xb">
          协办 {{ info.xb }}
        </div>
        <div v-if="info.tyzc">
          特约支持 {{ info.tyzc }}
        </div>
      </div>
      <div class="host">
        主持人 {{ info.zcr }}
      </div>
    </div>
    <div class="divide" />
    <div class="content">
      <div class="position">
        <div>地点 {{ info.dd }}</div>
        <div>规模：{{ info.gm }}</div>
      </div>
      <div class="list">
        <div
          v-for="(item, $index) in info.list"
          :key="$index"
          class="item"
          :class="{'expand':show[$index]}"
        >
          <div class="time">
            {{ item.sj }}
          </div>
          <div class="topic">
            <div>题目 {{ item.tm }}</div>
            <div>单位 {{ item.dw }}</div>
          </div>
          <transition
            name="expand"
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
          >
            <div v-if="show[$index]">
              <div
                v-if="item.zcrjs"
                class="more-detail"
              >
                <div class="more-detail-title">
                  主持人 {{ item.zcr }}
                </div>
                <div class="more-detail-info">
                  {{ item.zcrjs }}
                </div>
              </div>
              <div
                v-if="item.zjgy"
                class="more-detail"
              >
                <div class="more-detail-title">
                  主讲概要
                </div>
                <div class="more-detail-info">
                  {{ item.zjgy }}
                </div>
              </div>
            </div>
          </transition>
          <a
            v-if="item.zjgy || item.zcrjs"
            class="more-icon"
            @click="toggleShow($index)"
          >
            <img
              class="more"
              src="@/images/more.png"
              alt=""
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class Activity extends Vue {
  @State('activity_detail') info

  show = []

  @Watch('info')
  handleInfoChange () {
    Vue.set(this, 'show', this.info.list.map(() => false))
  }

  toggleShow (index) {
    this.$set(this.show, index, !this.show[index])
  }

  enter (element) {
    element.style.width = getComputedStyle(element).width
    element.style.position = 'absolute'
    element.style.visibility = 'hidden'
    element.style.height = 'auto'
    const height = getComputedStyle(element).height
    element.style.width = null
    element.style.position = null
    element.style.visibility = null
    element.style.height = 0
    getComputedStyle(element).height
    requestAnimationFrame(() => {
      element.style.height = height
    })
  }

  afterEnter (element) {
    element.style.height = 'auto'
  }

  leave (element) {
    element.style.height = getComputedStyle(element).height
    getComputedStyle(element).height
    requestAnimationFrame(() => {
      element.style.height = 0
    })
  }
}
</script>

<style>
html {
  font-size: 16px;
}
</style>
<style scoped lang="scss">

.activity-page-container {
  display: flex;
  flex-direction: column;
  background: #98c3fb;
  padding-bottom: 4rem;

  img.nav {
    width: 100%;
  }

  .divide {
    height: 0.23rem;
    background: #d72316;
  }

  .title-container {
    background: #0251b6;
    padding-top: 1.2rem;
  }

  .title {
    font-size: 1.15rem;
    font-weight: 800;
    color: #ffffff;
    padding: 0 1.4rem;
    text-align: justify;
    text-align-last: justify;
  }

  .sub-title {
    margin-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: 400;
    color: #ffe200;
    line-height: 0.81rem;
    padding: 0 1.4rem 0 0;
    position: relative;
    text-align: right;

    &:before {
      content: '';
      position: absolute;
      width: 14.05rem;
      height: 0.5px;
      background: #ffe200;
      left: 0;
      top: 50%;
    }
  }

  .enterprise {
    margin-top: 0.45rem;
    padding-left: 2.17rem;
    padding-bottom: 0.75rem;
    font-size: 0.91rem;
    font-weight: 400;
    color: #e5ebf3;
    line-height: 1.41rem;
    border-bottom: 0.5px solid #ffe200;
  }

  .host {
    font-size: 0.91rem;
    font-weight: 400;
    color: #e5ebf3;
    line-height: 1.41rem;
    padding: 0.85rem 2.22rem;
  }

  .content {
    padding: 0 0.8rem;
  }

  .position {
    padding: 0.7rem 1.36rem;
    font-size: 0.91rem;
    font-weight: 500;
    color: #0251b6;
    line-height: 1.41rem;
  }

  .item {
    background: #0251b6;
    border-radius: 0.5rem;
    padding-bottom: 0.2rem;
    margin-bottom: 2.4rem;
    height: 5.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: height 500ms;

    &.expand {
      height: auto;
      margin-bottom: 1rem;
    }
  }

  .time {
    width: 100%;
    font-size: 0.98rem;
    font-weight: 500;
    color: #ffe200;
    padding: 0.7rem 1.14rem;
    box-sizing: border-box;
  }

  .topic {
    width: 21.36rem;
    box-sizing: border-box;
    font-size: 0.91rem;
    font-weight: 400;
    color: #022148;
    line-height: 1.41rem;
    background: #a0c9fd;
    border: 0.5px solid #0251b6;
    border-radius: 0.5rem;
    margin: 0 0.25rem;
    padding: 0.8rem 1rem;
  }

  .more-detail {
    margin-top: 0.23rem;
  }

  .more-detail-title {
    font-size: 0.91rem;
    font-weight: 500;
    height: 6.11rem;
    color: #ffffff;
    line-height: 1.41rem;
    background: #4181d2;
    border-radius: 0.5rem;
    padding: 0.64rem 1.33rem;
  }

  .more-detail-info {
    margin: -3.5rem 0.25rem 0;
    padding: 0.8rem 1rem;
    font-size: 0.76rem;
    font-weight: 400;
    color: #022148;
    line-height: 1.3rem;
    background: #a0c9fd;
    border: 0.5px solid #0251b6;
    border-radius: 0.5rem;
  }

  .more-icon {
    position: relative;
    width: 100%;
  }

  img.more {
    display: flex;
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 0;
    left: 50%;
    transition: all 500ms;
    transform: translate(-50%, -50%);
  }

  .item.expand img.more {
    transform: translate(-50%, -50%) rotate(180deg);
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
