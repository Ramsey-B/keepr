import axios from 'axios'
import router from '../router'
import userModule from './user';
var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//ramsey-keepr.herokuapp.com/api' : '//localhost:5000/api';

var server = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  withCredentials: true
})

export default {
  state: {
    keeps: [],
    userKeeps: [],
    tags: [],
    activeKeep: {}
  },
  mutations: {
    setKeeps(state, keeps) {
      state.keeps = keeps
    },
    setUserKeeps(state, keeps) {
      state.userKeeps = keeps
    },
    setNewKeep(state, keep) {
      state.userKeeps.unshift(keep)
    },
    setTags(state, tags) {
      state.tags = tags
    },
    removeKeep(state, id) {
      var i = state.userKeeps.findIndex(keep => {
        return keep.id == id
      })
      state.userKeeps.splice(i, 1)
    },
    setKeep(state, keep) {
      var i = state.userKeeps.findIndex(k => {
        return keep.id == k.id
      })
      if (i > -1) {
        state.userKeeps.splice(i, 1, keep)
      }
      state.keep = keep
    },
    setActiveKeep(state, keep) {
      state.activeKeep = keep
    }
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
      server.get('/keep/vault/' + id)
        .then(res => {
          commit("setUserKeeps", res.data)
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
    createKeep({ commit, dispatch, rootState }, keep) {
      keep.author = rootState.userModule.user.username
      server.post('/keep/' + keep.vaultId, keep)
        .then(res => {
          commit("setNewKeep", res.data)
          debugger
          server.post('/keep/tag/' + res.data.id, keep.tags)
            .then(tags => {
              commit("setTags", tags.data)
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteShare({ commit, dispatch }, share) {
      server.delete('/keep/share/' + share.vaultId + '/' + share.id)
        .then(res => {
          commit("removeKeep", share.id)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editKeep({ commit, dispatch }, keep) {
      server.put('/keep/' + keep.id, keep)
        .then(res => {
          commit("setKeep", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    selectKeep({ commit, dispatch }, keep) {
      server.get('/keep/' + keep.id)
        .then(res => {
          commit("setKeep", res.data)
          router.push({ name: "Keep", params: { keepId: res.data.id } })
        })
        .catch(err => {
          console.log(err)
        })
    },
    addShare({ commit, dispatch }, share) {
      server.post("/keep/add/" + share.keepId, share)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getTags({ commit, dispatch }, keepId) {
      server.get('/keep/tags/' + keepId)
        .then(res => {
          commit("setTags", res.data)
          dispatch("getRelated", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    search({ dispatch, commit }, query) {
      server.get('/keep/query/' + query)
        .then(res => {
          commit("setKeeps", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getRelated({ dispatch, commit }, tags) {
      if (tags.length < 1) {
        server.post('/keep/query', tags)
          .then(res => {
            commit("setKeeps", res.data)
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    activeKeep({ dispatch, commit }, keep) {
      commit("setActiveKeep", keep)
    }
  }
}