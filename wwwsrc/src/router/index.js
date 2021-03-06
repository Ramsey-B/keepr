import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import Vault from '@/components/Vault'
import Keep from '@/components/Keep'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/vault/:id',
      name: 'Vault',
      component: Vault
    },
    {
      path: '/keep/:keepId',
      name: 'Keep',
      component: Keep
    }
  ]
})
