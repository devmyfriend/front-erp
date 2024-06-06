export default{
    name:'productos',
    path:'/productos',
    redirect: '/productos/listado/',
    children:[
        {
            path: 'listado/:tipo?',
            name: 'listadoProductos',
            component: () => import('@/modules/productos/views/Productos.vue'),
        },
        {
            path: 'formulario/:tipo?/:id?',
            name: 'formularioProductos',
            component: () => import('@/modules/productos/views/frmProductos.vue'),
        },
    ]
};