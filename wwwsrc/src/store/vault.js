import axios from 'axios'
import router from '../router'
import userModule from './user';
var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//ramsey-keepr.herokuapp.com/' : '//localhost:5000/api';

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
    },
    removeVault(state, vault) {
      var i = state.vaults.findIndex(v => {
        return v.id == vault.id
      })
      state.vaults.splice(i, 1)
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
    selectVault({ commit, dispatch, rootState }, vault){
      commit("setActiveVault", vault)
      dispatch("getVaultKeeps", vault.id)
      router.push({ name: 'Vault', params: {id: vault.id}})
    },
    deleteVault({ commit, dispatch }, vault) {
      server.delete('/vault/' +vault.id)
        .then(res => {
          commit("removeVault", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}