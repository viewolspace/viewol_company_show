<template>
    <div class="section d-flex flex-column">
        <div class="flex-grow-1 container d-flex align-items-center">
            <div class="content flex-grow-1">
                <div class="d-flex align-items-center">
                    <div class="label">电话</div>
                    <div class="flex-grow-1">
                        <input :class="{'error':error}" type="text" v-model="phone" placeholder="输入手机号">
                    </div>
                </div>
                <div class="text-center">
                    <a class="commit" @click="checkInAction">签到</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { Action } from 'vuex-class'

  @Component
  export default class CheckIn extends Vue {
    @Prop({required: true}) bbsId

    @Action('checkIn') postCheckIn

    phone = ''
    error = false

    mounted () {
      document.title = '签到'
    }

    async checkInAction () {
      this.error = false
      if (!this.validatePhone()) {
        this.error = true
        return
      }
      try {
        await this.postCheckIn({
          bbsId: this.bbsId,
          phone: this.phone
        })
        this.showMessage('success_check_in')
      } catch (e) {
        this.showMessage('fail_sign_up')
      }
    }

    validatePhone () {
      const {phone} = this
      return phone && /^1[0-9]{10}$/.test(phone)
    }

    showMessage (type) {
      this.$router.push({
        name: 'message',
        query: {
          type,
          bbsId: this.bbsId
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
    .section {
        .container {
            height: 100%;
            background: white;

            .content {
                padding: .8rem;

                .label {
                    font-size: 1.2rem;
                    padding-right: 1rem;
                    color: #002D84;
                }

                input {
                    color: #799EB9;
                    font-size: 1.2rem;
                    padding: .5rem;
                    border-radius: .2rem;
                    width: 100%;
                    background: #F2F2FB;
                    border: 1px solid transparent;

                    ::placeholder {
                        color: #799EB9;
                    }

                    &.error {
                        border-color: #FF2600;
                    }
                }

                .commit {
                    margin-top: 4rem;
                    background: #FF2600;
                    color: white;
                    width: 8rem;
                    padding: .3rem;
                    display: inline-block;
                    border-radius: 2rem;
                }
            }


        }
    }
</style>
