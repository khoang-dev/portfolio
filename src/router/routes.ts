import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../page/About.vue')
  },
  // {
  //   path: '/',
  //   name: '/blog',
  //   component: () => import('../views/AboutView.vue')
  // },
  // {
  //   path: '/',
  //   name: '/project',
  //   component: () => import('../views/AboutView.vue')
  // },
  // {
  //   path: '/',
  //   name: '/reading-list',
  //   component: () => import('../views/AboutView.vue')
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../page/Contact.vue')
  }
]

export default routes
