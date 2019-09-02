<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import { Action, Mutation } from 'vuex-class'

  @Component
  export default class App extends Vue {
    @Mutation('SET_BASIC_INFO') setBasicInfo
    @Action('getCompanyInformation') getCompanyInformation
    @Action('getActivityDetail') getActivityDetail
    @Action('getCompanyAndQr') getCompanyAndQr
    @Action('getProductList') getProductList

    async mounted () {
      const {name} = this.$route
      switch (name) {
        case 'invitation':
          const {company_id} = this.$route.query
          this.getCompanyAndQr(company_id)
          break
        case 'activity':
          const {activity_id} = this.$route.query
          await this.getActivityDetail(activity_id)
          break
        default:
          await this.processMain()
          break
      }
    }

    async processMain () {
      const {company_id, user_id, expo_id = 2} = this.$route.query
      this.setBasicInfo({
        company_id, user_id, expo_id
      })

      await this.getProductList()
      const {showInfo} = await this.getCompanyInformation()
      if (!showInfo) this.$router.replace({name: 'detail'})
    }

  }
</script>

<style lang="scss" scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100vh;
    }
</style>
