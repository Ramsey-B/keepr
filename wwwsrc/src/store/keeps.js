import axios from 'axios'
import router from '../router'
import userModule from './user';
var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//i-de-trippin.herokuapp.com/' : '//localhost:5000/api';

var server = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  withCredentials: true
})

export default {
  state: {
    keeps: [],
    userKeeps: [],
  },
  mutations: {
    setKeeps(state, keeps) {
      state.keeps = keeps
    },
    setUserKeeps(state, keeps) {
      state.userKeeps = keeps
    },
  },
  actions: {
    getKeeps({ commit, dispatch }) {
      server.get('/keep')
        .then(res => {
          commit("setKeeps", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getVaultKeeps({ commit, dispatch }, id) {
      server.get('vault/' +id)
        .then(res => {
          commit("setKeeps", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getUserKeeps({ commit, dispatch, rootState }) {
      server.get('/keep/user/' + rootState.userModule.user.id)
        .then(res => {
          commit("setUserKeeps", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}