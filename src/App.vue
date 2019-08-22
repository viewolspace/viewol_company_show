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
    @Action('getProductList') getProductList

    async mounted () {
      const {company_id, user_id, expo_id = 2, activity_id} = this.$route.query
      if (!activity_id) {
        this.setBasicInfo({
          company_id, user_id, expo_id
        })

        await this.getProductList()
        const {showInfo} = await this.getCompanyInformation()
        if (!showInfo) this.$router.replace({name: 'detail'})
      } else {
        await this.getActivityDetail(activity_id)
      }
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
