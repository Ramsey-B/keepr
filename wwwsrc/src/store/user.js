import axios from 'axios'
import router from '../router'
var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//ramsey-keepr.herokuapp.com/' : '//localhost:5000/api';

var server = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  withCredentials: true
})

export default {
  state: {
    user: {}
  },
  actions: {
    register({ dispatch, commit }, payload) {
      server.post('/account/register', payload)
        .then(res => {
          router.push({ name: "Home" })
          commit('setUser', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login({ dispatch, commit }, user) {
      server.post('/account/login', user)
        .then(res => {
          router.push({ name: "Home" })
          commit("setUser", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    authenticate({ commit, dispatch }, bool) {
      server.get('/account/authenticate')
        .then(res => {
          commit('setUser', res.data)
        })
        .catch(res => {
          console.log(res)
        })
    },
    signOut({ commit, dispatch, state }) {
      server.delete('account/' + state.user.id)
        .then(res => {
          commit("setUser", {})
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  }
}