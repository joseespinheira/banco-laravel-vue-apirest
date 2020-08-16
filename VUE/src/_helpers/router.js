import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage'
import LoginPage from '../login/LoginPage'
import DepositarPage from '../pages/depositar/DepositarPage'
import DepositadoPage from '../pages/depositar/DepositadoPage'
import SacarPage from '../pages/sacar/SacarPage'
import SacadoPage from '../pages/sacar/SacadoPage'
import SaldoPage from '../pages/saldo/SaldoPage'
import ExtratoPage from '../pages/extrato/ExtratoPage'
import CadastroPage from '../cadastro/CadastroPage'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/depositar', component: DepositarPage },
    { path: '/depositado', component: DepositadoPage },
    { path: '/sacar', component: SacarPage },
    { path: '/sacado', component: SacadoPage },
    { path: '/saldo', component: SaldoPage },
    { path: '/extrato', component: ExtratoPage },
    { path: '/cadastro', component: CadastroPage },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login','/cadastro'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
// console.log('authRequired');
// console.log(authRequired);
// console.log(loggedIn);
  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})