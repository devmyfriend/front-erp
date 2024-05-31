import { createRouter, createWebHistory } from 'vue-router'
import Loging from '@/modules/loging/views/Loging.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import BusinessEntity from '@/modules/businessentity/views/BusinessEntity.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView
    },
    {
      path:'/login',
      name:'login',
      component: Loging
    },
    {
      path:'/businessentity',
      name: 'businessentity',
      component: ()=> import('../modules/businessentity/views/BusinessEntity.vue')
    },
    {
      path:'/helloword',
      name: 'HelloWord',
      component: () => import('../components/HelloWorld.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
