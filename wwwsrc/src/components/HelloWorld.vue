<template>
  <div class="user jumbotron jumbotron-fluid bgImg">
    <div class="row justify-content-center">
    <div class="col-6 card">
    <div class="login" v-if="showLogin">
      <h1>Login</h1>
      <form v-on:submit.prevent="login" class="form">
        <input class="input" type="email" name="email" placeholder=" e-mail" id="email" v-model="user.email">
        <input class="input" type="password" name="password" placeholder=" password" id="name" v-model="user.password">
        <button class="btn btn-primary btn-success" type="submit">Login</button>
      </form>
      <br>
      <div>
         <p>Click to start <button class="btn btn-success" @click="demoLogin">Demo</button></p>
      </div>
      <br>
      <p class="user">Not a user?
        <em @click="toggle"><button type="button" class="btn btn-danger">Register</button></em>
      </p>
    </div>
    <div class="register" v-if="!showLogin">
      <h1>Register</h1>
      <form v-on:submit.prevent="register">
        <input class="input" type="email" name="email" placeholder=" e-mail" id="email" v-model="user.Email">
        <input class="input" type="text" name="name" placeholder="name" id="name" v-model="user.Username">
        <input class="input" type="password" name="password" placeholder="password" id="name" v-model="user.Password">
        <button class="btn btn-primary btn-danger" type="submit">Register</button>
      </form>
      <br>
      <div>
      </div>
      <br>
      <p>Already a user?
        <em @click="toggle"><button class="btn btn-primary btn-success" type="submit">Login</button></em>
      </p>
    </div>
  </div>
</div>
  </div>
</template>

<script>
  export default {
    name: '',
    // created() {
    //   this.$store.dispatch('authenticate', true)
    // },
    mounted(){
      this.$store.dispatch('authenticate')
    },
    data() {
      return {
        user: {
          Email: '',
          Username: '',
          Password: ''
        }, 
        demo: { //If you use the demologin code for your own server, be sure to register a user that matches these credentials.
          email: "demo@demo.com",
          displayName: "Demo",
          password: "12345"
        },
        showLogin: true
      }
    },
    computed: {
      currentUser() {
        return this.$store.state.user
      }
    },
    methods: {
      demoLogin(){
        this.$store.dispatch('login', this.demo)
      },
      login() {
        this.$store.dispatch('login', this.user)
      },
      register() {
        this.$store.dispatch('register', this.user)
      },
      toggle() {
        this.showLogin = !this.showLogin
      }
    }
  }
</script>
<style scoped>

</style>
