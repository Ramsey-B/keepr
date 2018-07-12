import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import userModule from './user';
import keepsModule from './keeps'
import vaultModule from './vault'
var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//i-de-trippin.herokuapp.com/' : '//localhost:5000/api';

vue.use(vuex)

var server = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  withCredentials: true
})

export default new vuex.Store({
  modules: {
    userModule,
    keepsModule,
    vaultModule
  }
})