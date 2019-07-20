<template>
    <div>
        <main></main>
    </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import Main from '../components/Main'

  @Component({
    components: {
      Main
    }
  })
  export default class Show extends Vue {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
