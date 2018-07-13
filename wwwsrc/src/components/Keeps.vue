<template>
  <div class="container-fluid">
    <div>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createKeepModal">
        Create Keep
      </button>

      <!-- Modal -->
      <div class="modal fade" id="createKeepModal" tabindex="-1" role="dialog" aria-labelledby="createKeepModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Create Keep</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form v-on:submit.prevent="createKeep">
                <input type="url" placeholder="Image Url" v-model="newKeep.img">
                <input class="input" type="text" name="description" placeholder="Description" id="description" v-model="newKeep.description">
                <div class="mt-3">
                  <div class="d-flex flex-row">
                    <span v-for="(tag, i) in tags" class="ml-3">{{tag.tagName}}
                      <a @click="removeTag(i)" class="remove-tag">X</a>
                    </span>
                  </div>
                  <form v-on:submit.prevent="addTag">
                    <input type="text" placeholder="Add Tag" v-model="tag.tagName">
                    <button type="submit" class="btn btn-primary btn-primary">Add Tag</button>
                  </form>
                </div>
              </form>
              <p id="error"></p>
            </div>
            <div class="modal-footer">
              <select v-model="vault">
                <option disabled value=''>Select a Vault</option>
                <option v-for="vault in vaults" :key="vault.id" :value="vault">{{vault.title}}</option>
              </select>
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button class="btn btn-primary btn-primary" @click="createKeep" data-dismiss="modal">Submit</button>
            </div>
          </div>
        </div>
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
  import keepsList from './KeepsList.vue'

  export default {
    name: 'Keeps',
    components: {
      keepsList
    },
    mounted() {
      this.$store.dispatch("getUserKeeps")
    },
    data() {
      return {
        tags: [],
        tag: {
          tagName: ''
        },
        newKeep: {
          img: '',
          description: ''
        },
        vault: {}
      }
    },
    computed: {
      keeps() {
        return this.$store.state.keepsModule.userKeeps
      },
      vaults() {
        return this.$store.state.vaultModule.vaults
      }
    },
    methods: {
      addTag() {
        var newTag = {
          tagName: this.tag.tagName
        }
        this.tags.push(newTag)
        this.tag.tagName = ''
      },
      createKeep() {
        if (!this.vault.id) {
          this.error("Please select a vault")
        }
        this.newKeep.vaultId = this.vault.id
        this.newKeep.tags = this.tags
        this.$store.dispatch("createKeep", this.newKeep)
      },
      removeTag(i) {
        this.tags.splice(i, 1)
      },
      error(str) {
        document.getElementById("error").innerText = str
        setTimeout(() => {
          document.getElementById("error").innerText = ""
        }, 5000)
      }
    }
  }

</script>

<style>
  .remove-tag {
    color: red;
    cursor: pointer;
  }
</style>