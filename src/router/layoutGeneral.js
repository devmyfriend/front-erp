import productsRoutes from "@/modules/products/routes/index"
import catalogsRoutes from "@/router/catalogsRoutes";
import organizationRoutes from "@/router/organizationRoutes";
export default {
  path: "/",
  name: "layContent",
  component: () => import("@/commons/layout/standardLayout.vue"),
  children: [
    {
      ...catalogsRoutes,
    },
    {
      ...organizationRoutes,
    },
    {
      ...productsRoutes,
    }
  ],
};
