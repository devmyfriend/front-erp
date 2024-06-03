import { createRouter, createWebHistory } from 'vue-router'
import Loging from '@/modules/loging/views/Loging.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import productosRouter from '@/modules/productos/routes/index'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login'
      /* component: HomeView */
    },
    {
      path:'/login',
      name:'login',
      component: Loging
    },
    {
      path:'/helloword',
      name: 'HelloWord',
      component: HelloWorld
    },
    {
      path:'/productos',
      ... productosRouter
    },
    {
      path: '/test/:tipo?&:id?',
      name: 'test',
      component: () => import('@/components/Test.vue')
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/login'
    }
  ]
})

export default router
