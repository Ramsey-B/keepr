<template>
  <div class="">
    <div>
      <button class="btn btn-primary" @click="toggle">Vaults</button>
      <button class="btn btn-primary" @click="toggle">Keeps</button>
    </div>
    <div v-if="bool">
      <vaults></vaults>
    </div>
    <div v-if="!bool">
      <keeps></keeps>
    </div>
  </div>
</template>

<script>
  import vaults from "./Vaults"
  import keeps from "./Keeps"

  export default {
    name: 'Dashboard',
    components: {
      vaults,
      keeps
    },
    data() {
      return {
        bool: true
      }
    },
    computed: {},
    methods: {
      toggle() {
        this.bool = !this.bool
      }
    }
  }

</script>

<style>


</style>
