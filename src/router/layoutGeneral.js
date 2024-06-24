export default{    
    path:'/general',
    name: 'layContent',
    component: () => import('@/commons/layout/standardLayout.vue'),
/*     children:[
        {
            path: '/productos/',
            name: 'productos',
            component: () => import('@/modules/products/views/productos.vue')
        },
        {
            path: '/productos/formulario/:tipo?/:id?',
            name: 'formProducts',
            component: () => import('@/modules/products/views/formProducts.vue')
        },
    ] */
};