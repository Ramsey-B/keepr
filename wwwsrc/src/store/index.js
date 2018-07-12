import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import userModule from './user';
var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//i-de-trippin.herokuapp.com/' : '//localhost:5000/api';

vue.use(vuex)

var server = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  withCredentials: true
})

export default new vuex.Store({
  modules:{
    userModule
  },
  state: {
    user: {},
    keeps: [],
    vaults: [],
    userKeeps: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setKeeps(state, keeps) {
      state.keeps = keeps
    },
    setVaults(state, vaults) {
      state.vaults = vaults
    },
    setNewVault(state, vault) {
      state.vaults.unshift(vault)
    },
    setUserKeeps(state, keeps) {
      state.userKeeps = keeps
    }
  },
  actions: {
    register({ dispatch, commit }, payload) {
      server.post('/account/register', payload)
        .then(newUser => {
          router.push({name: "Home"})
          commit('setUser', newUser)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login({ dispatch, commit }, user) {
      server.post('/account/login', user)
        .then(newUser => {
          router.push({name: "Home"})
          commit("setUser", newUser)
        })
        .catch(err => {
          console.log(err)
        })
    },
    authenticate({ commit, dispatch }, bool) {
      server.get('/account/authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({name: "Home"})
        })
        .catch(res => {
          router.push({name: "Login"})
          console.log(res)
        })
    },
    signOut({ commit, dispatch, state }){
      server.delete('account/' + state.user.id)
        .then(res => {
          debugger
        })
        .catch(err => {
          console.log(err)
        })
    },
    getVaults({ commit, dispatch, state}) {
      server.get('/vault/user/' + state.user.id)
        .then(res => {
          commit("setVaults", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    createVault({ commit, dispatch }, vault) {
      server.post('/vault', vault)
        .then(res => {
          commit("setNewVault", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getKeeps({ commit, dispatch }) {
      server.get('/keep')
        .then(res => {
          commit("setKeeps", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getUserKeeps({ commit, dispatch, state }) {
      server.get('/keep/user/' +state.user.id)
        .then(res => {
          commit("setUserKeeps", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})