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
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: () => import('@/components/MenuTemporal.vue')
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
      path: '/',
      component: () => import('@/commons/layout/mainLayout.vue'),
      children: [
        {
          path: '/window',
          name: 'layWindow',
          component: () => import('@/commons/layout/windowLayout.vue'),
          children: [
            {
              path: '/productos/',
              name: 'productos123',
              component: () => import('@/modules/productos/views/Productos123.vue')
            },
            {
              path: '/productos/formulario/:tipo?/:id?',
              name: 'formProducts',
              component: () => import('@/modules/productos/views/formProducts.vue')
            },
          ]
        },
        {
          path: '/general',
          name: 'layContent',
          component: () => import('@/commons/layout/standardLayout.vue')
        }
      ],
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/login'
    },
  ]
})

export default router
