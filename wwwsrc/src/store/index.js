import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from '../router'
var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//i-de-trippin.herokuapp.com/' : '//localhost:5000/api';

vue.use(vuex)

var server = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  withCredentials: true
})

export default new vuex.Store({
  state: {},
  mutations: {},
  actions: {
    register({ dispatch, commit }, payload) {
      server.post('/account/register', payload)
        .then(newUser => {
          router.push('/')
          commit('setUser', newUser)
        })
        .catch(res => {
          console.log(res.data)
        })
    },
  }
})