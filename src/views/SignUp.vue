<template>
    <div class="section">
        <div>
            <div class="item d-flex align-items-center">
                <div class="icon"><img src="../images/sign_up/icon_name.png" alt=""></div>
                <div class="flex-grow-1"><input class="input" type="text" placeholder="姓名"></div>
            </div>
            <div class="item d-flex align-items-center">
                <div class="icon"><img src="../images/sign_up/icon_sex.png" alt=""></div>
                <div class="flex-grow-1"><input class="input" type="text" placeholder="性别"></div>
            </div>
            <div class="item d-flex align-items-center">
                <div class="icon"><img src="../images/sign_up/icon_company.png" alt=""></div>
                <div class="flex-grow-1"><input class="input" type="text" placeholder="单位"></div>
            </div>
            <div class="item d-flex align-items-center">
                <div class="icon"><img src="../images/sign_up/icon_address.png" alt=""></div>
                <div class="flex-grow-1"><input class="input" type="text" placeholder="地址"></div>
            </div>
            <div class="item d-flex align-items-center">
                <div class="icon"><img src="../images/sign_up/icon_position.png" alt=""></div>
                <div class="flex-grow-1"><input class="input" type="text" placeholder="职位"></div>
            </div>
            <div class="item d-flex align-items-center">
                <div class="icon"><img src="../images/sign_up/icon_phone.png" alt=""></div>
                <div class="flex-grow-1"><input class="input" type="text" placeholder="电话"></div>
            </div>
            <div class="item d-flex align-items-center">
                <div class="icon"><img src="../images/sign_up/icon_mail.png" alt=""></div>
                <div class="flex-grow-1"><input class="input" type="text" placeholder="邮箱"></div>
            </div>
            <div>
                <textarea class="input" placeholder="您的意见/建议"></textarea>
            </div>
            <div class="text-center">
                <a class="commit">提交</a>
            </div>
        </div>
    </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class SignUp extends Vue {

  }
</script>

<style lang="scss" scoped>
    .section {
        /*background: url("../images/background.png");*/
        height: 100vh;
        /*padding: 1rem;*/
        /*background-size: 100% auto;*/

        & > div {
            background: rgba(255, 255, 255, .99);
            padding: 1rem;
            height: 100%;

            .item {
                padding: 1rem 0;

                border-bottom: 1px solid #F3F2F9;

                .icon {
                    text-align: center;
                    width: 3rem;
                    height: 1.5rem;

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
