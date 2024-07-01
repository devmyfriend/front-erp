export default{    
    path:'/general',
    name: 'layContent',
    component: () => import('@/commons/layout/standardLayout.vue'),
    children:[
        {
            path: '/monedas/',
            name: 'coins',
            component: () => import('@/modules/SAT/coins/views/coins.vue'),
        },{
            path: '/pagos',
            name: 'payment',
            component: () => import('@/modules/SAT/payment-methods-forms/views/payment-methods-forms.vue')
        },
        {
            path: '/comprobantes',
            name: 'receipts',
            component: () => import('@/modules/SAT/receipt-types/views/receipt-types.vue')
        }
    ]
};