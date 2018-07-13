<template>
  <div class="row">
    <div class="offset-4 col-4">
      <keeps-list :keep="keep" :viewable="false"></keeps-list>
    </div>
  </div>
</template>

<script>
  import keepsList from './KeepsList'

  export default {
    name: 'Keep',
    components: {
      keepsList
    },
    data() {
      return {

      }
    },
    computed: {
      keep() {
        return this.$store.state.keepsModule.keep
      }
    },
    methods: {}
  }

</script>

<style>
</style>