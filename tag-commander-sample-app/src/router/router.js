import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/IndexPage.vue';
import Shop from '../components/ShopPage.vue';
import Dashboard from '../components/Dashboard/Dashboard.vue';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/home', component: Home },
      { path: '/shop', component: Shop },
      { path: '/dashboard', component: Dashboard }
    ]
  });
}