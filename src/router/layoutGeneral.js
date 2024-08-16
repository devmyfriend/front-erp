import productsRoutes from "@/modules/products/routes/index"
import catalogsRoutes from "@/router/catalogsRoutes";
export default {
  path: "/",
  name: "layContent",
  component: () => import("@/commons/layout/standardLayout.vue"),
  children: [
    {
      ...catalogsRoutes,
    },
    {
      ...productsRoutes,
    }
  ],
};
