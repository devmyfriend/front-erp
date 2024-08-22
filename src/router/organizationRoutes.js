export default {
    name: "organization",
    path: "/organizacion/",
    redirect: "/organizacion/dashboard/",
    children: [
      {
        path: "",
        name: "organizationDashboard",
        component: () => import("@/commons/dashboards/organizationDashboard.vue"),
      },
      {
        path: "empresas",
        name: "businessEntitiesList",
        component: () => import("@/modules/businessEntity/views/businessEntity.vue"),
      },
      {
        path: "empresas/formulario",
        name: "businessEntitiesForm",
        component: () => import("@/modules/businessEntity/views/businessEntityForm.vue"),
      },
    ],
  };