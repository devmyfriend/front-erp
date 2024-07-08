export default{
    name:'layWindow',
    path:'/window',
    component: () => import('@/commons/layout/windowLayout.vue'),
    children:[
        {
            path: '/productos/',
            name: 'productos',
            component: () => import('@/modules/products/views/products.vue')
        },
        {
            path: '/productos/formulario/:tipo?',
            name: 'formProducts',
            component: () => import('@/modules/products/views/frmProducts.vue')
        },
        {
            path: '/zipcode/',
            name: 'zipcode',
            component: () => import('@/modules/zipcode/views/zipCode.vue')
        },
    ]
};