<template>
    <div v-html="activity_detail"></div>
</template>

<script>
  import { Vue, Component } from 'vue-property-decorator'
  import { State } from 'vuex-class'

  @Component
  export default class Activity extends Vue {
    @State('activity_detail') activity_detail
  }
</script>

<style scoped>

</style>
