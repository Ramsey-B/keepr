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
    vaults: [],
    activeVault: {}
  },
  mutations: {
    setVaults(state, vaults) {
      state.vaults = vaults
    },
    setNewVault(state, vault) {
      state.vaults.unshift(vault)
    },
    setActiveVault(state, vault) {
      state.activeVault = vault
    }
  },
  actions: {
    getVaults({ commit, dispatch, rootState }) {
      server.get('/vault/user/' + rootState.userModule.user.id)
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
    selectVault({ commit, dispatch }, vault){
      commit("setActiveVault", vault)
      router.push({ name: 'Vault', params: {id: vault.id}})
    }
  }
}