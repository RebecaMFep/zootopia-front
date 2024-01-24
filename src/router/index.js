import { createRouter, createWebHistory } from 'vue-router';
import AddView from '@/views/AddView.vue';
import ModifyView from '@/views/ModifyView.vue';
import LoginView from '@/views/LoginView.vue';
import { useAuthStore } from '@/stores/auth'
import ListView from '@/views/ListView.vue'
const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },  
  {
    path: '/Home',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/Add',      
    name: 'Add',
    // component: () => import('../views/AddView.vue'),
    component: AddView,
  },
  {
    path: "/list",
    name: "list",
    // component: () => import('../views/ListView.vue')
    component: ListView,
  },
  {
    path: '/Modify',
    name: 'modify',
    // component: () => import('../views/ModifyView.vue')
    component: ModifyView,
  },

  
  ]
})

    router.beforeEach((to) => {

      const store = useAuthStore()

      if (to.meta.requiresAuth && !store.user.isAuthenticated) {
        return { name: 'login'}
      }
   })


 export default router

