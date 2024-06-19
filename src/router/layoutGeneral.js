export default{    
    path:'/window',
    name: 'layContent',
    component: () => import('@/commons/layout/standardLayout.vue'),
/*     children:[
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
    ] */
};