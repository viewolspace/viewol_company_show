<template>
    <div class="section">
        <div class="container">
            <div class="item d-flex align-items-center" :class="{'error':error.name}">
                <div class="icon"><img src="../images/sign_up/icon_name.png" alt=""></div>
                <div class="flex-grow-1"><input v-model="form.name" class="input" type="text" placeholder="姓名"></div>
                <div class="require"><img src="../images/sign_up/icon_important.png" alt=""></div>
            </div>
            <div class="item d-flex align-items-center">
                <div class="icon"><img src="../images/sign_up/icon_sex.png" alt=""></div>
                <div class="flex-grow-1"><input v-model="form.sex" class="input" type="text" placeholder="性别"></div>
            </div>
            <div class="item d-flex align-items-center" :class="{'error':error.name}">
                <div class="icon"><img src="../images/sign_up/icon_company.png" alt=""></div>
                <div class="flex-grow-1"><input v-model="form.company" class="input" type="text" placeholder="单位"></div>
                <div class="require"><img src="../images/sign_up/icon_important.png" alt=""></div>
            </div>
            <div class="item d-flex align-items-center">
                <div class="icon"><img src="../images/sign_up/icon_address.png" alt=""></div>
                <div class="flex-grow-1"><input v-model="form.address" class="input" type="text" placeholder="地址"></div>
            </div>
            <div class="item d-flex align-items-center" :class="{'error':error.position}">
                <div class="icon"><img src="../images/sign_up/icon_position.png" alt=""></div>
                <div class="flex-grow-1"><input v-model="form.position" class="input" type="text" placeholder="职位"></div>
                <div class="require"><img src="../images/sign_up/icon_important.png" alt=""></div>
            </div>
            <div class="item d-flex align-items-center" :class="{'error':error.phone}">
                <div class="icon"><img src="../images/sign_up/icon_phone.png" alt=""></div>
                <div class="flex-grow-1"><input v-model="form.phone" class="input" type="text" placeholder="电话"></div>
                <div class="require"><img src="../images/sign_up/icon_important.png" alt=""></div>
            </div>
            <div class="item d-flex align-items-center" :class="{'error':error.email}">
                <div class="icon"><img src="../images/sign_up/icon_mail.png" alt=""></div>
                <div class="flex-grow-1"><input v-model="form.email" class="input" type="text" placeholder="邮箱"></div>
            </div>
            <div>
                <textarea class="input" v-model="form.idea" placeholder="您的意见/建议"></textarea>
            </div>
            <div class="text-center">
                <a class="commit" @click="signUpAction()">提交</a>
            </div>
        </div>
    </div>
</template>

<script>
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { Action } from 'vuex-class'

  @Component
  export default class SignUp extends Vue {
    @Prop({required: true}) bbsId

    @Action('signUp') postSignUp
    error = {}
    form = {
      name: '',
      sex: '',
      company: '',
      address: '',
      position: '',
      phone: '',
      email: '',
      idea: ''
    }

    mounted () {
      document.title = '报名'
    }

    async signUpAction () {
      if (!this.validateForm()) return
      try {
        await this.postSignUp(Object.assign({bbsId: this.bbsId}, this.form))
        this.$router.push({
          name: 'message',
          query: {type: 'success_sign_up'}
        })
      } catch (e) {
        alert(e)
      }
    }

    validateForm () {
      this.error = {}
      const {name, company, position} = this.form

      if (!name) this.error['name'] = true
      if (!company) this.error['company'] = true
      if (!position) this.error['position'] = true
      if (!this.validatePhone()) this.error['phone'] = true
      if (!this.validateEmail()) this.error['email'] = true
      return Object.keys(this.error).length === 0
    }

    validatePhone () {
      const {phone} = this.form
      return phone && /^1[0-9]{10}$/.test(phone)
    }

    validateEmail () {
      const {email} = this.form
      if (email) return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)
      return true
    }

  }
</script>

<style lang="scss" scoped>
    .section {
        .container {
            background: rgba(255, 255, 255, .99);
            padding-left: 1rem;
            padding-right: 1rem;
            /*height: 100%;*/

            .item {
                padding: 1rem 0;
                border-bottom: 1px solid #F3F2F9;

                &.error {
                    border-bottom-color: #FF2600;
                }

                .icon {
                    text-align: center;
                    width: 3rem;
                    height: 1.5rem;

                    img {
                        height: 100%;
                    }
                }

                .require {
                    height: 1rem;

                    img {
                        height: 100%;
                    }
                }
            }

            .input {
                font-size: 1rem;
                color: #AEACBA;
                font-weight: bold;
                width: 100%;
                background: transparent;
                border: none;
                box-shadow: none;

                &::placeholder {
                    font-size: 1rem;
                    color: #AEACBA;
                    font-weight: bold;
                }

            }

            textarea.input {
                margin: 1rem 0;
                padding: .5rem;
                height: 6rem;
                background: #F3F2F9;
            }
        }

        .commit {
            background: #FF2600;
            color: white;
            width: 8rem;
            padding: .3rem;
            display: inline-block;
            border-radius: 2rem;
        }
    }
</style>
