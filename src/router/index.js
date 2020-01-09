import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

const routes = [
  { path: '/404', component: () => import('@/views/404') },
  {
    path: '/',
    component: Layout,
    redirect: { name: 'Launchpad' },
    children: [
      {
        path: 'launchpad',
        name: 'Launchpad',
        alias: '/',
        component: () => import('@/views/launchpad/index'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },
  { path: '*', redirect: '/404' }
]

export default new Router({
  // mode: 'history',
  routes
})
