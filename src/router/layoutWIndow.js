export default{
    name:'layWindow',
    path:'/window',
    component: () => import('@/commons/layout/windowLayout.vue'),
    children:[
        {
            path: '/productos/',
            name: 'productos123',
            component: () => import('@/modules/productos/views/Productos123.vue')
        },
        {
            path: '/productos/formulario/:tipo?',
            name: 'formProducts',
            component: () => import('@/modules/productos/views/formProducts.vue')
        },
    ]
};