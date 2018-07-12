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
    keeps: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setKeeps(state, keeps) {
      state.keeps = keeps
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
    getKeeps({ commit, dispatch }) {
      server.get('/keep')
        .then(res => {
          commit("setKeeps", res.data)
        })
    }
  }
})