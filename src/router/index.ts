import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/components/buttons',
      name: 'components.buttons',
      component: () => import('../views/components/ButtonsView.vue')
    },
    {
      path: '/components/form',
      name: 'components.form',
      component: () => import('../views/components/FormView.vue')
    }
  ]
})

export default router
