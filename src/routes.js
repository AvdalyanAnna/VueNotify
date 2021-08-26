// default

import Vue from 'vue'
import Router from 'vue-router'

// pages
import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import Notify from '@/pages/NotifyPage'

Vue.use(Router)

// Routering
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/notify',
      name: 'Notify',
      component: Notify
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]

})
export default router
