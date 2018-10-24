import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: 
  [
    { path: '/', 
      components: require('./components/Index.vue')
    },{ 
      path: '/home', 
      components: require('./components/Index.vue')
    },{ 
      path: '/shop', 
      components: require('./components/Shop.vue')
    },{ 
      path: '/dashboard', 
      components: require('./components/Dashboard.vue')
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