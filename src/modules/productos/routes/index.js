export default{
    name:'productos',
    path:'/productos',
    component: () => import('@/commons/layout/LayoutGeneral.vue'),
    redirect: '/productos/listado/',
    children:[
        {
            path: 'listado/:tipo?',
            name: 'listadoProductos',
            component: () => import('@/modules/productos/views/Productos.vue'),
        },
    ]
};