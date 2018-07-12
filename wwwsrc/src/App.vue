<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary top-header format">
      <a class="navbar-left">
        <router-link :to="{ name: 'Home'}" class="navbar-brand">
          <a>Home</a>
        </router-link>
        <router-link :to="{ name: 'Dashboard'}" class="navbar-brand">
          <a>Vaults</a>
        </router-link>
      </a>
      <button type="button" class="navbar-brand btn btn-outline-light" @click="login" v-if="!(user.id)">Sign In/Login</button>
      <div v-if="user.id" class="d-flex flex-column">
        <a class="navbar-brand">User: {{user.username}}</a>
        <button class="navbar-brand btn btn-outline-light" @click="signOut">Sign out</button>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch("authenticate")
    },
    computed: {
      user() {
        return this.$store.state.userModule.user
      }
    },
    methods: {
      login() {
        this.$router.push({name: "Login"})
      },
      signOut() {
        this.$store.dispatch("signOut")
      }
    }
  }
</script>

<style>
  
</style>