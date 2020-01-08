import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  { path: '/404', component: () => import('@/views/404') },
  {
    path: '/',
    component: () => import('@/views/dashboard/index')
  },
  { path: '*', redirect: '/404' }
]

const router = new Router({
  // mode: 'history',
  routes
})

export default router
