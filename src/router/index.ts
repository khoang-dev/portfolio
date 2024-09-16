import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../page/About.vue')
    },
    {
      path: '/',
      name: '/blog',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: '/project',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: '/reading-list',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: '/contact',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
