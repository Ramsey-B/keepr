<template>
  <div>
    <div class="row">
      <div class="offset-4 col-4">
        <keeps-list :keep="keep" :tags="tags" :viewable="false"></keeps-list>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2>Related Keeps</h2>
      </div>
      <div class="col-3" v-for="k in keeps">
        <keeps-list :keep="k" :viewable="true"></keeps-list>
      </div>
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
    mounted() {
      this.$store.dispatch("getTags", this.keep.id)
    },
    data() {
      return {

      }
    },
    computed: {
      keep() {
        return this.$store.state.keepsModule.keep
      },
      tags() {
        return this.$store.state.keepsModule.tags
      },
      keeps() {
        return this.$store.state.keepsModule.keeps
      }
    },
    methods: {}
  }

</script>

<style>
</style>