<template>
    <div class="section">
        <div class="container">
            <div class="d-flex justify-content-center">
                <div class="d-flex align-items-center logo">
                    <img :src="company.logoView" alt="Logo"/>
                </div>
            </div>
            <div class="text-center company">
                <div class="name">{{company.name}}</div>
                <div class="line">
                    <img class="w-100" src="../images/line.png" alt/>
                </div>
                <div class="mt-2 welcome">
                    谢谢您莅临参观2019年中国
                    <br/>
                    国际消防设备技术交流展
                </div>
                <div class="mt-2 duration">10.16-10.19</div>
                <div class="mt-2 location">中国国际展览中心(新馆)</div>
                <div class="mt-3 mb-4 place">{{company.place}}</div>
            </div>
            <div class="text-center product pt-3 pb-3">
                <div class="title">展品</div>
                <swiper class="list p-2 pb-3" :options="swiperOption">
                    <swiper-slide class="item" v-for="item in product" :key="item.id" @click.native="toProduct(item.id)">
                        <div class="image-container">
                            <img :src="item.imageView" :alt="item.name"/>
                        </div>
                        <div class="name">{{item.name}}</div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <div class="see text-center pt-3 pb-3">
                <div class="title">围观</div>
                <div class="avatar-list pt-3">
                    <div class="d-flex flex-wrap justify-content-center">
                        <img v-for="item in see" v-if="item.headImgUrl" :key="item.id" class="avatar" :src="item.headImgUrl" alt=""/>
                    </div>
                </div>
            </div>
            <div class="praise text-center pt-3 pb-3">
                <div class="title">点赞</div>
                <div class="mt-3 icon" @click="praiseCompany">
                    <img src="../images/praise.png" alt/>
                </div>
                <div class="mt-2 desc">喜欢就点个赞吧</div>
                <div class="mt-1 count">({{praise.length}}赞)</div>
                <div class="mt-2 pl-3 pr-3 text-left people">
                    <span v-for="item in praise">{{item.userName}}, </span>
                </div>
            </div>
            <div class="comment text-center pt-3 pb-3">
                <div class="title">评论</div>
                <div class="p-2 pt-0">
                    <div class="d-flex mt-3 item" v-for="item in comment">
                        <div class="avatar-container">
                            <img class="avatar" src="https://wx.qlogo.cn/mmopen/vi_32/PyGEJ181Q2jpGiaW4LHcf9t39ktKYZglibD36VybMcjKL0rqiavgZXarwqZ1ly98B7ib4jhslHn4O4EkibILeHY3JwQ/132" alt=""/>
                        </div>
                        <div class="ml-3 mr-2 pb-3 flex-fill text-left detail">
                            <div class="nickname">{{item.userName}}</div>
                            <div class="date mt-1">{{item.cTime | date}}</div>
                            <div class="mt-2 comment-content">{{item.comment}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <form @submit.prevent="commentCompany">
                <div class="add-on">
                    <input class="field" placeholder="我也要评论" v-model="comment_content">
                    <button type="submit" class="item">发送</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
  import { Component, Emit, Vue } from 'vue-property-decorator'
  import _ from 'lodash'

  @Component({
    props: {
      product: {required: true},
      company: {required: true},
      comment: {required: true, default: []},
      praise: {required: true, default: []},
      see: {required: true, default: []}
    },
    filters: {
      date: (date) => {
        let d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear()

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
      let data = _.clone(this.comment_content)
      this.comment_content = ''
      return data
    }

    toProduct (id) {
      console.log(id)
      if (window.wx) {
        wx.miniProgram.navigateTo({url: `/pages/products/detail?id=${id}`})
      }
    }
  }
</script>

<style lang="scss" scoped>
    .section {
        overflow-y: scroll;

        .company {
            background: white;
            border-bottom: 1px solid #B0CBE6;

            .name {
                color: #233C5A;
                font-size: 1rem;
            }

            .content {
                color: #2C4058;
                font-size: .9375rem;
            }

            .welcome {
                color: #233C5A;
                font-size: .875rem;
            }

            .duration {
                color: #FE0000;
                font-size: 1rem;
            }

            .location {
                color: #2661A7;
                font-size: .8125rem;
            }

            .place {
                background: url(../images/place.png) no-repeat;
                background-size: auto 100%;
                background-position-x: center;
                color: white;
                font-size: 1.3125rem;
                padding: 16px 0 36px;
            }
        }

        .product {
            border-bottom: 1px solid #B0CBE6;
            background: #E6EEF7;

            .list {
                .item {
                    .image-container {
                        display: inline-block;
                        height: 90px;
                        width: 90px;
                        border-radius: 4px;
                        border: 1px solid #B0CBE6;
                        background: white;

                        img {
                            height: 100%;
                        }
                    }

                    .name {
                        font-size: .8125rem;
                        color: #2B3C4C;
                    }
                }
            }
        }

        .see {
            background: rgba(255, 255, 255, .1);

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
            background: white;

            .icon {
                img {
                    width: 85px
                }
            }

            .desc {
                font-size: .8125rem;
                color: #2B3C4C;
            }

            .count,
            .people {
                font-size: .8125rem;
                color: #879CB3;
            }
        }

        .comment {
            background: rgba(255, 255, 255, .1);

            .avatar-container {
                width: 60px;
            }

            .detail {
                border-bottom: 1px solid #93B0D0;

                .nickname {
                    font-size: .8125rem;
                    color: #2B3C4C;
                }

                .date {
                    font-size: 12px;
                    color: #ABACAC;
                }

                .comment-content {
                    font-size: .9375rem;
                    color: #2B3C4C;
                }
            }
        }


        .add-on {
            display: flex;
            border-radius: 30px;
            background: white;
            overflow: hidden;
            font-size: 1rem;

            .field {
                flex: 1;
                font-size: 1rem;
                padding: 10px 20px;
                border: none;
            }

            .item {
                display: inline-block;
                width: 4rem;
                box-sizing: border-box;
                padding: 0 20px 0 0;
                border: none;
                background: transparent;
                font-size: 1rem;
            }
        }
    }

    .swiper-pagination {
        margin-bottom: -1rem;
    }
</style>
