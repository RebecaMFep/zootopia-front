import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})


  router.beforeEach((to,from) => {

    const store = useAuthStore()

    if (to.meta.requiresAuth && !store.user.isAuthenticated) {
      return { name: 'login'}
    }
  })

export default router
