export default {
  name: "catalogs",
  path: "/catalogos/",
  redirect: "/catalogos/dashboard/",
  children: [
    {
      path: "",
      name: "catalogsDashboard",
      component: () => import("@/commons/dashboards/catalogsDashboard.vue"),
    },
    {
      path: "monedas",
      name: "coins",
      component: () => import("@/modules/SAT/coins/views/coins.vue"),
    },
    {
      path: "pagos",
      name: "payment",
      component: () =>
        import(
          "@/modules/SAT/payment-methods-forms/views/payment-methods-forms.vue"),
    },
    {
      path: "comprobantes",
      name: "receipts",
      component: () =>
        import("@/modules/SAT/receipt-types/views/receipt-types.vue"),
    },
    {
      path: "paises",
      name: "countries",
      component: () => import("@/modules/SAT/countries/views/countries.vue"),
    },
    {
      path: "impuestos",
      name: "taxesSAT",
      component: () => import("@/modules/SAT/tax/views/taxes.vue"),
    },
    {
      path: "zipcode",
      name: "zipcode",
      component: () => import("@/modules/SAT/zipcode/views/zipCode.vue"),
    },
    {
      path: "familias",
      name: "families",
      component: () => import("@/modules/families/views/families.vue"),
    },
    {
      path: "subfamilias",
      name: "subfamilies",
      component: () => import("@/modules/subfamilies/views/subfamilies.vue"),
    },
    {
      path: "lineas",
      name: "lines",
      component: () => import("@/modules/lines/views/lines.vue"),
    },
  ],
};