export default     {
  name: "products",
  path: "/productos/",
  redirect: "/productos/listado/",
  children: [
    {
      path: "listado",
      name: "productsList",
      component: () => import("@/modules/products/views/products.vue"),
    },
    {
        path: "formulario",
        name: "productsForm",
        component: () => import("@/modules/products/views/frmProducts.vue"),
    },
    {
        path: "formulario/:CodigoProducto",
        name: "productsFormEdit",
        component: () => import("@/modules/products/views/frmProducts.vue"),
        props: true,
    },
  ]
};