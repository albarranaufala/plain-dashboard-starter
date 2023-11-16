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
      path: '/components/dropdown',
      name: 'components.dropdown',
      component: () => import('../views/components/DropdownView.vue')
    },
    {
      path: '/components/form',
      name: 'components.form',
      component: () => import('../views/components/FormView.vue')
    },
    {
      path: '/components/modal',
      name: 'components.modal',
      component: () => import('../views/components/ModalView.vue')
    },
    {
      path: '/components/table',
      name: 'components.table',
      component: () => import('../views/components/TableView.vue')
    }
  ]
})

export default router
