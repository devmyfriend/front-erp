export default{
    name:'productos',
    path:'/productos',
    redirect: '/productos/listado/',
    children:[
        {
            path: 'listado/:tipo?',
            name: 'listadoProductos',
            component: () => import('@/modules/products/views/products.vue'),
        },
        {
            path: 'formulario/:tipo?/:id?',
            name: 'formularioProductos',
            component: () => import('@/modules/products/views/frmProducts.vue'),
        },
    ]
};