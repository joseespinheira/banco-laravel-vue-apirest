// import Vue from 'vue'
// import VueRouter, { RouteConfig } from 'vue-router'

// // Pages
// import Home from '../views/acesso/Home.vue'
// import Register from '../views/acesso/Register.vue'
// import Login from '../views/acesso/Login.vue'
// import Dashboard from '../views/acesso/user/Dashboard.vue'
// import AdminDashboard from '../views/acesso/admin/Dashboard.vue'
// Vue.router = router
// import Inicio from '../views/Inicio.vue'
// import Depositar from '../views/Depositar.vue'
// import Sacar from '../views/Sacar.vue'
// import Saldo from '../views/Saldo.vue'
// import Extrato from '../views/Extrato.vue'

// Vue.use(VueRouter)

// const routes: Array<RouteConfig> = [
//   {
//     path: '/d',
//     name: 'Home',
//     component: Home,
//     meta: {
//       auth: undefined
//     }
//   },
//   {
//     path: '/',
//     name: 'Inicio',
//     component: Inicio
//   },
//   {
//     path: '/depositar',
//     name: 'Depositar',
//     component: Depositar
//   },
//   {
//     path: '/sacar',
//     name: 'Sacar',
//     component: Sacar
//   },
//   {
//     path: '/saldo',
//     name: 'Saldo',
//     component: Saldo
//   },
//   {
//     path: '/extrato',
//     name: 'Extrato',
//     component: Extrato
//   },
//   // {
//   //   path: '/about',
//   //   name: 'About',
//   //   // route level code-splitting
//   //   // this generates a separate chunk (about.[hash].js) for this route
//   //   // which is lazy-loaded when the route is visited.
//   //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   // }

//   {
//     path: '/register',
//     name: 'register',
//     component: Register,
//     meta: {
//       auth: false
//     }
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: Login,
//     meta: {
//       auth: false
//     }
//   },
//   // USER ROUTES
//   {
//     path: '/dashboard',
//     name: 'dashboard',
//     component: Dashboard,
//     meta: {
//       auth: true
//     }
//   },
//   // ADMIN ROUTES
//   {
//     path: '/admin',
//     name: 'admin.dashboard',
//     component: AdminDashboard,
//     meta: {
//       auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
//     }
//   },
// ]


// import App from '../App'
// import VueRouter from 'vue-router'
// import process from '../config/dev.env';
import Login from '../components/Login.vue'
// import NotFound from '../components/NotFound.vue'
import Inicio from '../views/Inicio'

const routes = [
  {
    path: '/',
    component: Inicio
    // redirect: '/login'
  },
  // { path: '*', component: NotFound },
  // {
  //   path: '/signup',
  //   component: SignUp,
  //   meta: {auth: true}
  // },
  {
    path: '/login',
    component: Login,
    meta: {auth: false}
  }
]
// const routes = new VueRouter({
//   mode: 'history',
//   route
// })

export default routes