<template>
    <div v-if="detail.id" class="content">
        <div class="inner">
            <div>
                <img class="title" src="../images/invitation/title.png" alt="">
            </div>
            <div>
                <div class="logo">
                    <img :src="detail.logo" alt="">
                </div>
            </div>
            <div class="name">
                {{detail.name}}
            </div>
            <div class="welcome">
                邀请您莅临参观2019年中国<br>国际消防设备技术交流展
            </div>
            <div class="date">10.16-10.19</div>
            <div class="location">中国国际展览中心(新馆)</div>
            <div class="place">
                <div class="place-inner">
                    {{detail.place}}
                </div>
            </div>
            <div><img class="qr-code" :src="detail.qr" alt=""></div>
            <div class="tip">长按识别二维码</div>
        </div>
    </div>
</template>

<script>
  import { Vue, Component } from 'vue-property-decorator'
  import { State } from 'vuex-class'
  import wxApi from '../helpers/share'

  @Component
  export default class Invitation extends Vue {
    @State('invitation_detail') detail

    mounted () {
      wxApi.wxRegister()
    }
  }
</script>

<style lang="scss" scoped>

    .content {
        text-align: center;
        /*background: red;*/
        background: url("../images/invitation/background.png") no-repeat;
        background-size: 100% auto;
        padding: 1rem 1.8rem;
        height: 100vh;

        .inner {
            background: url("../images/invitation/background-inner.jpg") no-repeat;
            background-size: 100% auto;
            padding: 3.1rem 0;

            .title {
                width: 10.25rem;
            }

            .logo {
                margin-top: 1.84rem;
                display: inline-block;
                background: white;
                width: 3.75rem;
                height: 3.75rem;
                padding: .5rem;
                border-radius: 3.75rem;
                overflow: hidden;
            }

            .name {
                margin-top: 1.25rem;
                font-size: 1rem;
                color: #1c3e5c;
            }

            .welcome {
                margin-top: 1.25rem;
                font-size: .88rem;
                color: #1c3e5c;
            }

            .date {
                margin-top: .88rem;
                font-size: 1rem;
                color: #fe2023;
            }

            .location {
                margin-top: .75rem;
                font-size: 0.81rem;
                color: #2661a7;
            }

            .place {
                margin-top: 1.25rem;
                font-size: 1.56rem;
                color: #ffffff;

                .place-inner {
                    background: url("../images/place.png") no-repeat;
                    background-size: 100%;
                    display: inline-block;
                    width: 12.16rem;
                    height: 4.47rem;
                    line-height: 3.3rem;
                    white-space: nowrap;
                    overflow: hidden;
                    padding: 0 1rem;
                    text-overflow: ellipsis;
                }
            }

            .qr-code {
                margin-top: 1.25rem;
                width: 7rem;
            }

            .tip {
                font-size: 0.69rem;
                line-height: 1.25rem;
                letter-spacing: -0.03rem;
                color: #2661a7;
            }
        }
    }


</style>
