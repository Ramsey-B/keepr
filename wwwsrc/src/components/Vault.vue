<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h2>{{vault.title}}</h2>
      </div>
    </div>
    <keeps-list :name="'vault'"></keeps-list>
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