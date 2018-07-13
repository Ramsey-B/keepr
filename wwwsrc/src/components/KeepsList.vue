<template>
  <div class="card text-center">
    <div class="container">
      <img class="card-img-top" :src="keep.img">
      <div class="buttons">
        <button v-if="viewable" class="btn btn-success" @click="selectKeep(keep)">view</button>
        <button type="button" v-if="user.id" class="btn btn-primary" data-toggle="modal" data-target="#keepModal" @click="activeKeep(keep)">keep</button>
        <button v-if="user.id == keep.authorId && !keep.public" class="btn btn-warning" @click="public(keep)">public</button>
        <button v-if="user.id == keep.authorId && keep.public" class="btn btn-warning" @click="public(keep)">private</button>
        <button v-if="activeVault.id" class="btn btn-danger" @click="deleteShare(keep)">Delete</button>
      </div>
    </div>
    <h5 class="card-title">{{keep.description}}</h5>
    <div class="d-flex flex-row justify-content-center">
      <p class="mr-3 card-text">Author: {{keep.author}}</p>
      <p class="mr-3 card-text">Views: {{keep.views}}</p>
      <p class="mr-3 card-text">Keeps: {{keep.keeps}}</p>
    </div>
    <div v-for="(tag, i) in tags">
      <span>
        <p>{{tag.tag}}</p>
        <p v-if="i < tags.length-1">,</p>
      </span>
    </div>
    <div class="modal fade" id="keepModal" tabindex="-1" role="dialog" aria-labelledby="keepModalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">{{currentKeep.description}}</h5>
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
            <button v-if="vault.id" class="btn btn-primary btn-primary" data-dismiss="modal" @click="addShare(currentKeep)">Submit</button>
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
      },
      tags: {
        type: Array
      }
    },
    mounted() {
      if (!this.user.id) {
        this.$store.dispatch("authenticate")
      }
      this.$store.dispatch("getVaults")
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
      },
      activeVault() {
        return this.$store.state.vaultModule.activeVault
      },
      currentKeep() {
        return this.$store.state.keepsModule.activeKeep
      }
    },
    methods: {
      deleteShare(keep) {
        if (!this.viewable) {
          this.$router.push({ name: "Dashboard" })
        }
        this.checkLogin()
        keep.vaultId = this.activeVault.id
        this.$store.dispatch("deleteShare", keep)
      },
      public(keep) {
        this.checkLogin()
        keep.public = !keep.public
        this.$store.dispatch("editKeep", keep)
      },
      selectKeep(keep) {
        this.$store.dispatch("selectKeep", keep)
      },
      addShare(keep) {
        this.checkLogin()
        var share = {
          vaultId: this.vault.id,
          keepId: this.currentKeep.id
        }
        this.$store.dispatch("addShare", share)
      },
      checkLogin() {
        if (!this.user.id) {
          this.$router.push({ name: "Login" })
        }
      },
      activeKeep(keep) {
        this.$store.dispatch("activeKeep", keep)
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