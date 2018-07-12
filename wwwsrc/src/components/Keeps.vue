<template>
  <div class="">
    <div>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
        Create Keep
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                    <span v-for="(tag, i) in tags" class="ml-3">{{tag.tag}} <a @click="removeTag(i)" class="remove-tag">X</a></span>
                  </div>
                  <form v-on:submit.prevent="addTag">
                    <input type="text" placeholder="Add Tag" v-model="tag.tag">
                    <button type="submit" class="btn btn-primary btn-primary">Add Tag</button>
                  </form>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button class="btn btn-primary btn-primary" @click="createKeep" data-dismiss="modal">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="keeps">
      <div v-for="keep in keeps">
        <h4>{{keep.description}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Keeps',
    mounted() {
      this.$store.dispatch("getUserKeeps")
    },
    data() {
      return {
        tags: [],
        tag: {
          tag: ''
        },
        newKeep: {
          img: '',
          description: ''
        }
      }
    },
    computed: {
      keeps() {
        return this.$store.state.userKeeps
      }
    },
    methods: {
      addTag() {
        var newTag = {
          tag: this.tag.tag
        }
        this.tags.push(newTag)
        this.tag.tag = ''
      },
      createKeep() {
        this.$store.dispatch("createKeep", this.newKeep)
        this.$store.dispatch("addTags", this.tags)
      },
      removeTag(i) {
        this.tags.splice(i, 1)
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