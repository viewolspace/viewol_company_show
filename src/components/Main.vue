<template>
  <div class="section main-page-container">
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="d-flex flex-column align-items-center section-header">
          <img
            class="logo-image"
            :src="company.logoView"
            alt="Logo"
          >
          <div class="name">
            {{ company.name }}
          </div>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center place-container">
        <img
          class="exhibition-logo"
          src="@/images/logo.png"
          alt=""
        >
        <div class="mt-2 welcome">
          欢迎您莅临参观
        </div>
        <div class="location">
          2023年10月10-13日&nbsp;&nbsp;&nbsp;&nbsp;中国国际展览中心（新馆）
        </div>
        <div class="mt-3 mb-4 place d-flex flex-column align-items-center">
          <div class="top">
            {{ company.place }}
          </div>
          <div class="bottom">
            我司展位号
          </div>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center product pt-3 pb-3">
        <div class="title">
          展品
        </div>
        <div class="w-100">
          <swiper
            class="list p-2 pb-3"
            :options="swiperOption"
          >
            <swiper-slide
              v-for="item in product"
              :key="item.id"
              class="item"
              @click.native="toProduct(item.id)"
            >
              <div class="image-container">
                <img
                  :src="item.imageView"
                  :alt="item.name"
                >
              </div>
              <div class="name">
                {{ item.name }}
              </div>
            </swiper-slide>
            <div
              slot="pagination"
              class="swiper-pagination"
            />
          </swiper>
        </div>
      </div>
      <div class="see d-flex flex-column align-items-center pt-3 pb-3">
        <div class="title">
          围观
        </div>
        <div class="avatar-list pt-3">
          <div class="d-flex flex-wrap justify-content-center">
            <img
              v-for="item in see"
              v-show="item.headImgUrl"
              :key="item.id"
              class="avatar"
              :src="item.headImgUrl"
              alt=""
            >
          </div>
        </div>
      </div>
      <div class="praise d-flex flex-column align-items-center pt-3 pb-3">
        <div class="title">
          点赞
        </div>
        <div
          class="mt-3 icon"
          @click="praiseCompany"
        >
          <img
            src="../images/praise.png"
            alt
          >
        </div>
        <div class="mt-2 desc">
          喜欢就点个赞吧
        </div>
        <div class="count">
          ({{ praise.length }}赞)
        </div>
        <div class="mt-2 pl-3 pr-3 text-left people">
          <span
            v-for="item in praise"
            :key="item.userName"
          >{{ item.userName }}, </span>
        </div>
      </div>
      <div class="comment d-flex flex-column align-items-center pt-3 pb-3">
        <div class="title">
          评论
        </div>
        <div class="p-2 pt-0">
          <div
            v-for="item in comment"
            :key="item.headImgUrl"
          >
            <div
              :key="item.headImgUrl"
              class="d-flex mt-3 item"
            >
              <div class="avatar-container">
                <img
                  class="avatar"
                  :src="item.headImgUrl"
                  alt=""
                >
              </div>
              <div class="ml-1 mr-1 pb-3 flex-1 text-left detail">
                <!--              <div class="nickname">{{ item.userName }}</div>-->
                <!--              <div class="date mt-1">{{ item.cTime | date }}</div>-->
                <div class="mt-2 comment-content">
                  {{ item.comment }}
                </div>
              </div>
              <div class="avatar-container" />
            </div>
            <div
              v-if="item.reply"
              class="d-flex mt-3 item reply"
            >
              <div class="avatar-container">
                <img
                  class="avatar"
                  :src="company.logoView"
                  alt=""
                >
              </div>
              <div class="ml-1 mr-1 pb-3 flex-1 text-left detail">
                <div class="mt-2 comment-content">
                  {{ item.reply }}
                </div>
              </div>
              <div class="avatar-container" />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <form @submit.prevent="commentCompany">
          <div class="add-on">
            <input
              v-model="comment_content"
              class="field"
              placeholder="我也要评论"
            >
            <button
              type="submit"
              class="item"
            >
              发送
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Emit, Vue } from 'vue-property-decorator'
import _ from 'lodash'

@Component({
  props: {
    product: { required: true },
    company: { required: true },
    comment: { required: true, default: [] },
    praise: { required: true, default: [] },
    see: { required: true, default: [] }
  },
  filters: {
    date: (date) => {
      const d = new Date(date)
      let month = '' + (d.getMonth() + 1)
      let day = '' + d.getDate()
      const year = d.getFullYear()

      if (month.length < 2) month = '0' + month
      if (day.length < 2) day = '0' + day

      return [year, month, day].join('-')
    }
  }
})
export default class Main extends Vue {
  comment_content = ''
  swiperOption = {
    slidesPerView: 3,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }

  @Emit('praise')
  praiseCompany () {

  }

  @Emit('comment')
  commentCompany () {
    if (!this.comment_content) return
    const data = _.clone(this.comment_content)
    this.comment_content = ''
    return data
  }

  toProduct (id) {
    console.log(id)
    if (window.wx) {
      wx.miniProgram.navigateTo({ url: `/pages/products/detail?id=${id}` })
    }
  }
}
</script>

<style lang="scss" scoped>

.section {
  overflow-y: auto;

  &.main-page-container {
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }

  .place-container {
    margin-top: 0.4rem;
    border: 1.5px solid #A0C9FD;
    padding: 0.8rem 0 0;

    .exhibition-logo {
      width: 6.63rem;
    }

    .welcome {
      font-size: 0.9rem;
      color: #FFFFFF;
    }

    .location {
      margin-top: .2rem;
      font-size: 12px;
      color: #FCFDFD;
    }

    .place {
      .top {
        padding: 3px 0 0.625rem;
        font-size: 1.3rem;
        font-weight: bold;
        color: #0251B6;
        width: 14.13rem;
        background: #FFFFFF;
        border-radius: 1.6rem;
        text-align: center;
      }

      .bottom {
        width: 7.72rem;
        background: #FFE200;
        padding: 2px;
        border: 1px solid #0251B6;
        border-radius: 1rem;
        font-size: 12px;
        color: #0251B6;
        text-align: center;
        transform: translateY(-50%);
      }
    }
  }

  .product {
    margin-top: .4rem;
    background: #A0C9FD;

    .list {
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;

        .image-container {
          display: inline-block;
          width: 5.2rem;
          overflow: hidden;
          height: 5.2rem;
          border-radius: 1rem;
          border: 1px solid #0251B6;
          background: white;

          img {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }
        }

        .name {
          font-size: 12px;
          color: #024397;
          text-align: center;
        }
      }
    }
  }

  .see {
    margin-top: .4rem;
    background: #A0C9FD;

    .avatar-list {
      & > div {
        padding-left: 10px;

        .avatar {
          margin-left: -10px;
        }
      }
    }
  }

  .praise {
    margin-top: .4rem;
    background: #A0C9FD;

    .icon {
      img {
        width: 85px
      }
    }

    .desc {
      font-size: .8125rem;
      color: #024397;
    }

    .count,
    .people {
      font-size: .8125rem;
      color: #024397;
    }
  }

  .comment {
    margin-top: .4rem;
    background: #A0C9FD;

    .item {

      &.reply {
        flex-direction: row-reverse;
      }

      .avatar-container {
        width: 60px;
      }

      .detail {
        border-bottom: 1px solid #0251B6;

        .nickname {
          font-size: .8125rem;
          color: #2B3C4C;
        }

        .date {
          font-size: 12px;
          color: #ABACAC;
        }

        .comment-content {
          font-size: .8125rem;
          color: #024397;
          word-break: break-all;
        }
      }
    }
  }

  .add-on {
    display: flex;
    border-radius: 30px;
    background: #A0C9FD;
    overflow: hidden;
    font-size: 1rem;

    .field {
      background: transparent;
      flex: 1;
      color: #024397;
      font-size: 1rem;
      padding: 10px 20px;
      border: none;

      &::placeholder {
        color: #024397;
        opacity: 0.5;
      }
    }

    .item {
      display: inline-block;
      width: 4rem;
      box-sizing: border-box;
      padding: 0 20px 0 0;
      border: none;
      color: #024397;
      background: transparent;
      font-size: 1rem;
    }
  }
}

.swiper-pagination {
  margin-bottom: -1rem;

  /deep/ .swiper-pagination-bullet {
    width: 0.72rem;
    height: 0.38rem;
    background: #4797FD;
    border-radius: 0;

    &-active {
      background: #0251B6;
    }

  }
}
</style>
