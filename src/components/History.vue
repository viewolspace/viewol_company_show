<template>
    <div class="section">
        <div class="d-flex justify-content-center">
            <div class="d-flex align-items-center logo">
                <img :src="company.logoView" alt="Logo">
            </div>
        </div>
        <div class="container text-center pl-3 pr-3">
            <div class="mt-3 item-title">
                <span class="arrow"></span>
                <span class="arrow"></span>
                <span class="pl-3 pr-3">发展历程</span>
                <span class="arrow flip"></span>
                <span class="arrow flip"></span>
            </div>
            <div class="progresses mt-4">
                <div class="d-flex item" v-for="item in progresses" :key="item.times">
                    <div class="date">{{item.times}}</div>
                    <div class="point ml-2 mr-2"><span></span></div>
                    <div class="content text-left pb-3">
                        <div class="event" v-if="false">
                            公司成立
                        </div>
                        <div class="desc">
                            {{item.des}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="arrow-container">
            <div class="arrow"></div>
        </div>
    </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    props: {
      company: {required: true},
      show: {required: true, default: []}
    }
  })
  export default class History extends Vue {

    get progresses () {
      return this.show.progresses.reverse()
    }

  }
</script>

<style lang="scss" scoped>
    .section {
        .progresses {
            .item {
                .date {
                    padding-top: 2px;
                    font-size: 1rem;
                    font-weight: 500;
                    color: #2661A7;
                }

                .point {
                    position: relative;
                    padding-top: 3px;

                    span {
                        display: inline-block;
                        width: 1rem;
                        height: 1rem;
                        box-sizing: border-box;
                        border: 0.2rem solid #2661A7;
                        border-radius: 50%;
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        left: calc(50% - 1px);
                        top: 1rem;
                        bottom: 0;
                        border-left: 2px dashed #2661A7;
                    }
                }

                .content {
                    .event {
                        font-size: 1rem;
                        font-weight: 500;
                        color: #233C5A;
                    }

                    .desc {
                        margin-top: 15px;
                        position: relative;
                        padding: .6rem;
                        background: rgba(168, 196, 225, 0.37);
                        font-size: .94rem;
                        line-height: 1.4rem;
                        color: #2661A7;

                        &::after {
                            content: "";
                            position: absolute;
                            left: 20px;
                            top: -10px;
                            width: 0;
                            height: 0;
                            border-style: solid;
                            border-width: 0 10px 10px 10px;
                            border-color: transparent transparent rgba(168, 196, 225, 0.37) transparent;
                        }
                    }
                }

            }
        }
    }
</style>
