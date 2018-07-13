<template>
  <div class="card text-center">
    <div class="container">
      <img class="card-img-top" :src="keep.img">
      <div class="buttons">
        <button v-if="viewable" class="btn btn-success" @click="selectKeep(keep)">view</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#keepModal">keep</button>
        <button class="btn btn-danger" @click="deleteShare(keep)">Delete</button>
      </div>
    </div>
    <h5 class="card-title">{{keep.description}}</h5>
    <p class="card-text">Author: {{keep.author}}</p>
    <div class="modal fade" id="keepModal" tabindex="-1" role="dialog" aria-labelledby="keepModalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Keep</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h4>Select a Vault!</h4>
            <select v-model="vault">
              <option disabled value=''>Select a Vault</option>
              <option v-for="vault in vaults" :key="vault.id" :value="vault">{{vault.title}}</option>
            </select>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            <button v-if="vault.id" class="btn btn-primary btn-primary" data-dismiss="modal" @click="addShare">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'KeepsList',
    props: {
      keep: {
        type: Object,
        required: true
      },
      viewable: {
        type: Boolean,
        required: true
      }
    },
    mounted() {

    },
    data() {
      return {
        vault: {}
      }
    },
    computed: {
      user() {
        return this.$store.state.userModule.user
      },
      vaults() {
        return this.$store.state.vaultModule.vaults
      }
    },
    methods: {
      deleteShare(keep) {
        if(!this.viewable) {
          this.$router.push({name: "Dashboard"})
        }
        this.$store.dispatch("deleteShare", keep)
      },
      public(keep) {
        keep.public = !keep.public
        this.$store.dispatch("public", keep)
      },
      selectKeep(keep) {
        this.$store.dispatch("selectKeep", keep)
      },
      addShare() {
        var share = {
          vaultId: this.vault.id,
          keepId: this.keep.id
        }
        this.$store.dispatch("addShare", share)
      }
    }
  }

</script>

<style>
  .container {
    position: relative;
    width: 100%;
  }

  .container .buttons {
    position: absolute;
    top: 80%;
    left: 10%;
    cursor: pointer;
    border-radius: 5px;
    margin: auto;
    display: none;
  }

  .container:hover .buttons {
    display: inline-block;
  }
</style>