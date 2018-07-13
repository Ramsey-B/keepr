<template>
  <div class="keeps row">
    <div v-for="keep in keeps" class="col-4">
      <div class="card">
        <div class="container">
          <img class="card-img-top" :src="keep.img">
          <div class="buttons">
            <button class="keep btn btn-primary">view</button>
            <button class="keep btn btn-primary">keep</button>
            <a>share</a>
            <button v-if="name == 'vault' || name == 'keeps'" class="btn btn-danger" @click="deleteShare(keep.id)">Delete</button>
          </div>
        </div>
        <h5 class="card-title">{{keep.description}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'KeepsList',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    mounted() {
      
    },
    data() {
      return {

      }
    },
    computed: {
      keeps() {
        return this.$store.state.keepsModule.userKeeps
      },
      user() {
        return this.$store.state.userModule.user
      }
    },
    methods: {
      deleteShare(keepId) {
        this.$store.dispatch("deleteShare", keepId)
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
    left: 25%;
    cursor: pointer;
    border-radius: 5px;
    margin: auto;
    display:  none;
  }

  .container:hover .buttons{
    display: inline-block;
  }
</style>