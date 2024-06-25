export default{
  name:'coins',
  path:'/coins',
  component: () => import('@/modules/SAT/coins/views/coins.vue'),
  children:[
      {
          path: '/coins',
          name: 'coins',
          component: () => import('@/modules/SAT/coins/views/coins.vue')
      },
      /* {
        path: '/:catchAll(.*)',
        redirect: '/'
      }, */
  ]
};

