import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article/:id',
    name: 'View',
    component: () => import('../components/Shared/View.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
