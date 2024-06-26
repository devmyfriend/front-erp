export default{    
    name: 'layContent',
    path:'/general',
    component: () => import('@/commons/layout/standardLayout.vue'),
    children:[
        {
            path: '/coins/',
            name: 'coins',
            component: () => import('@/modules/SAT/coins/views/coins.vue'),
        },{
            path: '/payment',
            name: 'payment',
            component: () => import('@/modules/SAT/payment-methods-forms/views/payment-methods-forms.vue')
        }
    ]
};