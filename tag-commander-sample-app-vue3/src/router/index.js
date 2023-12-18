import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'Shop',
      component: ShopView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView
    }
  ]
})

export default router
