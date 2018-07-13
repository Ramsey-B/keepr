<template>
  <div class="container-fluid">
    <div class="keeps row">
      <div v-for="keep in keeps" class="col-4">
        <keeps-list :keep="keep" :viewable="true"></keeps-list>
      </div>
    </div>
  </div>
</template>

<script>
  import keepsList from './KeepsList'

  export default {
    name: 'Home',
    components: {
      keepsList
    },
    mounted() {
      this.$store.dispatch("getKeeps")
    },
    data() {
      return {

      }
    },
    computed: {
      keeps() {
        return this.$store.state.keepsModule.keeps
      }
    },
    methods: {}
  }

</script>

<style>
</style>