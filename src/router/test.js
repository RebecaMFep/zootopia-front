// import { createRouter, createWebHistory } from 'vue-router'
// import LoginView from '../views/LoginView.vue'
 //import { useAuthStore } from '@/stores/auth'
// import AddView from '../views/AddView.vue'
// import Home from '../views/HomeView.vue'
// import ModifyView from '../views/ModifyView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'login',
//       component: LoginView
//     },

//     //{
//       //path: '/login',
//       //name: 'login',
//       //component: LoginView
//     //},
    
//     {
//       path: '/Home',
//       name: 'HomeView',
//       component: () => import('../views/HomeView.vue'),
//     },

//     // {
//     //   path: '/about',
//     //   name: 'about',
//     //   component: () => import('../views/AboutView.vue')
//     // },

//     {
//       path: '/AddView',
//       name: 'addView',
//       component: () => import('../views/AddView.vue')
//     },

//     {
//       path: '/ModifyView',
//       name: 'modifyView',
//       component: () => import('../views/ModifyView.vue')
//     },

  
//   ]
// })