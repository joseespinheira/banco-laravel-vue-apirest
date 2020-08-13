import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Depositar from '../views/Depositar.vue'
import Sacar from '../views/Sacar.vue'
import Saldo from '../views/Saldo.vue'
import Extrato from '../views/Extrato.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/depositar',
    name: 'Depositar',
    component: Depositar
  },
  {
    path: '/sacar',
    name: 'Sacar',
    component: Sacar
  },
  {
    path: '/saldo',
    name: 'Saldo',
    component: Saldo
  },
  {
    path: '/extrato',
    name: 'Extrato',
    component: Extrato
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
