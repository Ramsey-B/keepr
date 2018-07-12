<template>
  <div class="">

  </div>
</template>

<script>
  export default {
    name: 'Home',
    mounted() {
      this.$store.dispatch("getKeeps")
    },
    data() {
      return {

      }
    },
    computed: {},
    methods: {}
  }

</script>

<style>


</style>
