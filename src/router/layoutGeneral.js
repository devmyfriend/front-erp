export default{    
    path:'/window',
    name: 'layContent',
    component: () => import('@/commons/layout/standardLayout.vue'),
/*     children:[
        {
            path: '/productos/',
            name: 'productos123',
            component: () => import('@/modules/products/views/Productos123.vue')
        },
        {
            path: '/productos/formulario/:tipo?/:id?',
            name: 'formProducts',
            component: () => import('@/modules/products/views/formProducts.vue')
        },
    ] */
};