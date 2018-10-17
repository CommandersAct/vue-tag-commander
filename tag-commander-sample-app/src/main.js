import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: 
  [
    { path: '/', 
      component: require('./components/Index.vue')
    },{ 
      path: '/home', 
      component: require('./components/Index.vue')
    },{ 
      path: '/shop', 
      component: require('./components/Shop.vue')
    },{ 
      path: '/dashboard', 
      component: require('./components/Dashboard.vue')
    },{
      path : '*',
      redirect:'/'
    }
  ]
})

import App from './App.vue'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})