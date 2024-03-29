import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Partners from '@/views/Partners.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // {
  //   path: '/partners',
  //   name: 'partners',
  //   component: Partners
  // },
  // {
  //   path: '/contacts',
  //   name: 'contacts',
  //   component: Contacts
  // },
  // {
  //   path: '/events',
  //   name: 'events',
  //   component: Events
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
