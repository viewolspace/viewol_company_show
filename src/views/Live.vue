<template>
  <div class="content-container">
    <div class="banner-container">
      <img
        src="@/images/live/banner.png"
        alt=""
      >
    </div>
    <div
      v-for="(item,index) in contents"
      :key="index"
      class="item"
    >
      <a
        :href="item.url"
        class=" d-flex align-items-center justify-content-between"
      >
        <span
          class="d-flex"
          :class="{'align-items-center':index === 0, 'align-items-end':index !== 0}"
        >
          <span
            class="title"
            :class="{'title-max':index === 0}"
          >
            {{ item.title }}
          </span>
          <span
            v-if="item.english"
            class="english"
          >
            {{ item.english }}
          </span>
          <span
            v-if="item.date"
            class="date"
          > {{ item.date }}</span>
        </span>
        <img
          class="arrow"
          src="@/images/live/right.png"
          alt=""
        >
      </a>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

export default @Component({})
class Live extends Vue {
  contents = [
    {
      title: '开幕式',
      english: 'VIDEO PICTURES',
      url: 'https://as.alltuu.com/album/1303406104/'
    },
    {
      title: '第三届智慧消防生态建设论坛',
      date: '10日',
      url: 'https://as.alltuu.com/album/1670230779/'
    },
    {
      title: '第三届智慧消防生态建设论坛',
      date: '11日',
      url: 'https://as.alltuu.com/album/1526351517/'
    },
    {
      title: '建筑消防安全论坛',
      url: 'https://as.alltuu.com/album/1445421246/'

    },
    {
      title: '新能源消防安全论坛',
      url: 'https://as.alltuu.com/album/1670232319/'
    },
    {
      title: '新时代 新挑战 新方案防火论坛',
      url: 'https://as.alltuu.com/album/1222610773/'
    }
  ]
}
</script>

<style lang="scss" scoped>
.content-container {
  min-height: 100vh;
  background: url("../images/live/bacground.png") no-repeat;
  background-size: auto 100%;
}

.banner-container {
  padding: 0.5rem;
  margin-bottom: 0.5rem;

  img {
    width: 100%;
  }
}

.item {
  margin-bottom: 0.5rem;
  padding: 1rem 1rem;
  background: #9FC9FD;

  a {
    padding: 1rem 1.5rem;
    background: #0151B5;
    border-radius: 1rem;

    .title {
      font-size: 1.3rem;
      color: #FFE100;

      &-max {
        font-size: 1.5rem;
      }
    }

    .english, .date {
      color: #FFFFFF;
      font-size: 0.94rem;
    }

    .date{
      margin-left: 0.2rem;
    }

    .english {
      margin-left: 3rem;
    }

    .arrow {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
