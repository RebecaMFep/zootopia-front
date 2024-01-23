import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '@/stores/auth'
=======
import Home from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue'
>>>>>>> 65ab954615e8fac050eb5a8bb411af0050836609

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },

    //{
      //path: '/login',
      //name: 'login',
      //component: LoginView
    //},
    
    {
<<<<<<< HEAD
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
=======
      path: '/Home',
      name: 'HomeView',
      
      component: () => import('../views/HomeView.vue'),
>>>>>>> 65ab954615e8fac050eb5a8bb411af0050836609
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
