import { createRouter, createWebHistory } from 'vue-router';
import AddViewVue from '@/views/AddView.vue';
import ModifyViewVue from '@/views/ModifyView.vue';
import LoginViewVue from '@/views/LoginView.vue';
const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
  {
    path: '/',
    name: 'login',
    component: LoginViewVue,
  },  
  {
    path: '/home',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/Add',      
    name: 'Add',
    // component: () => import('../views/AddView.vue'),
    component: AddViewVue,
  },
  {
    path: "/list",
    name: "list",
    component: () => import('../views/ListView.vue')
  },
  {
    path: '/Modify',
    name: 'modify',
    // component: () => import('../views/ModifyView.vue')
    component: ModifyViewVue,
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

