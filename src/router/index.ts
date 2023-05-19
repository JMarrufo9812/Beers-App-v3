import { createRouter, createWebHistory } from 'vue-router'
import routeNames from '@/router/routes'
// import { useAuthStore } from '@/store/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: routeNames.main.name,
      component: () => import('@/views/HomeView.vue'),
    },
    // {
    //   path: '/about',
    //   name: routeNames.about.name,
    //   component: () => import('@/views/AboutView.vue'),
    // },
    // {
    //   path: '/quasar',
    //   name: routeNames.quasar.name,
    //   component: () => import('@/views/QuasarTestView.vue'),
    // },
    // {
    //   path: '/pinia',
    //   name: routeNames.pinia.name,
    //   component: () => import('@/views/StoreTestView.vue'),
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: routeNames.notFound.name,
    //   redirect: { name: routeNames.main.name },
    // },
  ],
})

// router.beforeEach((to) => {
//   const authStore = useAuthStore()
//   if (to.query['x-api-key']) {
//     console.log(to.query['x-api-key'])
//     authStore.setToken(to.query['x-api-key'])
//   }
// })

export default router
