Vue.use(VueResource)
// Define a base da URL das requisições AJAX será
// a constante API que configuramos
Vue.http.options.root = process.env.API

// import App from './App.vue'
import VueResource from 'vue-resource'
import Vue from 'vue'
// import Home from './views/Inicio.vue'
// import Login from './components/Login.vue'
// import NotFound from './components/NotFound.vue'
// import VueRouter from 'vue-router'
// import Inicio from './views/Inicio'
// import routes from './router/index'
// import page from 'page'

// Vue.use(VueResource)
// Vue.use(VueRouter);
// Vue.router = router
// import './bootstrap'
// Set Vue globally
// window.Vue = Vue
// Load Index
// Vue.component('index', Home)
// const router = new VueRouter({
//   routes // short for `routes: routes`
// })
// const User = {
//   template: `
//     <div class="user">
//       <h2>User {{ $route.params.id }}</h2>
//       <router-view></router-view>
//     </div>
//   `
// }

// const router = new VueRouter({
//   routes: [
//     { path: '/user/:id', component: User }
//   ]
// })
 const app = new Vue({

}).$mount('#app')
app.Vue;
// const app = new Vue({
//   el: '#app'
// });

// Vue.use(require('@websanova/vue-auth'), {
//   auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
//   http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x.js'),
//   router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
//   rolesVar: 'type',
//   loginData: {url: 'user_token', method: 'POST', redirect: '/', fetchUser: false},
//   fetchData: {url: 'auth/user', method: 'GET'},
//   refreshData: {url: 'auth/refresh', method: 'GET', atInit: false}
// })