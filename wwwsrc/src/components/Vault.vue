<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h2>{{vault.title}}</h2>
      </div>
    </div>
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
    name: 'Vault',
    components: {
      keepsList
    },
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
        return this.$store.state.keepsModule.keeps;
      }
    },
    methods: {}
  }

</script>

<style>
</style>