import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
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
