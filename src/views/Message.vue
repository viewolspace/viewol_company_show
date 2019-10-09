<template>
    <div class="message-container">
        <div class="text-center d-flex justify-content-center align-items-center">
            <div class="">
                <div><img class="icon" :src="icon" alt=""></div>
                <div class="message" v-if="message">{{message}}</div>
                <div class="sub-message" v-if="sub_message">{{sub_message}}</div>
                <div class="action" v-if="action"><a @click="handlerAction">{{action}}</a></div>
            </div>
        </div>
    </div>
</template>

<script>
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import icon_fail_sign_up from '@/images/message/icon_fail_sign_up.png'
  import icon_success_sign_up from '@/images/message/icon_success_sign_up.png'
  import icon_success_check_in from '@/images/message/icon_success_check_in.png'

  @Component
  export default class Message extends Vue {
    @Prop({required: true}) type

    icon = null
    sub_message = null
    message = null
    action = null
    router_name = null

    mounted () {
      switch (this.type) {
        case 'fail_sign_up':
          this.icon = icon_fail_sign_up
          this.sub_message = '您还未报名'
          this.action = '前往报名'
          this.router_name = ''
          break
        case 'success_sign_up':
          this.icon = icon_success_sign_up
          this.message = '报名成功'
          break
        case 'success_check_in':
          this.icon = icon_success_check_in
          this.message = '签到成功'
          break
        default:
          break
      }
    }

    handlerAction () {
      this.$router.replace({
        name: 'sign-in'
      })
    }
  }
</script>

<style lang="scss" scoped>
    .message-container {
        height: 100vh;
        background: url("../images/message/background.png") 100%;
        padding: 1rem;

        & > div {
            background: rgba(255, 255, 255, .7);
            height: 100%;

            .icon {
                width: 10rem;
            }


            .message {
                margin-top: 2rem;
                font-size: 1.3rem;
            }

            .sub-message {
                margin-top: 1.5rem;
                font-size: 1.1rem;
                color: #829cb5;
            }

            .action {
                margin-top: 2rem;
                font-size: 1.1rem;
                background: #2661a7;
                color: white;
                padding: .3rem 1rem;
                border-radius: 1rem;
            }

        }

    }
</style>
