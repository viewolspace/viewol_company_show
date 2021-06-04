<template>
  <div v-if="progresses&&progresses.length">
    <div class="container text-center pl-3 pr-3">
      <div class="d-flex flex-column align-items-center section-header full">
        <div class="d-flex align-items-center">
          <img
            class="logo-image"
            :src="company.logoView"
            alt="Logo"
          >
        </div>
        <div class="main-title">
          发展历程
        </div>
        <div class="sub-title">
          development path
        </div>
      </div>
      <div class="progresses">
        <div
          v-for="(item, index) in progresses"
          :key="index"
          class="d-flex item"
        >
          <div class="date">
            {{ item.times }}
          </div>
          <div class="point ml-2 mr-2">
            <span />
          </div>
          <div class="content text-left pb-3 flex-1">
            <div class="desc">
              {{ item.des }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    company: { required: true },
    show: { required: true, default: { progresses: [] } }
  }
})
export default class History extends Vue {
  get progresses () {
    return this.show && this.show.progresses ? this.show.progresses.reverse() : []
  }
}
</script>

<style lang="scss" scoped>
.progresses {
  margin-top: 0.4rem;
  padding: 1rem 0.7rem;
  background: #A0C9FD;

  .item {
    margin: 0.5rem 0;

    &:last-child {
      .point::after {
        bottom: 0;
      }
    }

    .date {
      font-size: 1.04rem;
      font-weight: bold;
      color: #0251B6;
    }

    .point {
      position: relative;
      width: 1.5rem;

      span {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        box-sizing: border-box;
        border: 0.2rem solid #0251B6;
        background: #CEE3FD;
        position: absolute;
        z-index: 9;
        left: 0;
        border-radius: 50%;
      }

      &::after {
        content: "";
        position: absolute;
        left: 0.5rem;
        top: 1rem;
        bottom: -1rem;
        border-left: 2px solid #0251B6;
      }
    }

    .content {
      .event {
        font-size: 1rem;
        font-weight: 500;
        color: #233C5A;
      }

      .desc {
        position: relative;
        padding: .8rem;
        font-size: .94rem;
        line-height: 1.4rem;
        color: #2661A7;
        background: #CEE3FD;
        border-radius: 0.9375rem;
      }
    }

  }
}
</style>
