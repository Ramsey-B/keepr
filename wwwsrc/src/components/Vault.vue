<template>
  <div class="">
    <h3>{{vault.title}}</h3>
    <div v-for="keep in keeps">
      <h5>{{keep.description}}</h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Vault',
    mounted() {
      this.$store.dispatch("getVaultKeeps", this.vault.id)
    },
    data() {
      return {

      }
    },
    computed: {
      vault() {
        return this.$store.state.vaultModule.activeVault;
      },
      keeps() {
        return this.$store.state.vaultModule.keeps;
      }
    },
    methods: {}
  }

</script>

<style>

</style>
