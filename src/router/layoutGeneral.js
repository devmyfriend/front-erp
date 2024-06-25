export default{    
    name: 'layContent',
    path:'/general',
    component: () => import('@/commons/layout/standardLayout.vue'),
    children:[
        {
            path: '/coins/',
            name: 'coins',
            component: () => import('@/modules/SAT/coins/views/coins.vue'),
        },
    ]
};