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
    @Action('getProductList') getProductList

    async mounted () {
      let uri = window.location.search.substring(1)
      let params = new URLSearchParams(uri)
      const company_id = params.get('company_id')
      const user_id = params.get('user_id')
      const expo_id = params.get('expo_id') || 1

      this.setBasicInfo({
        user_id, company_id, expo_id
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
