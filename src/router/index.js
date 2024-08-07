import { createRouter, createWebHistory } from "vue-router";
import Loging from "@/modules/loging/views/Loging.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import productosRouter from "@/modules/products/routes/index";
import layoutWIndow from "./layoutWIndow";
import layoutGeneral from "./layoutGeneral";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: Loging,
    },
    {
      path: "/Menu",
      name: "Menu",
      component: () => import("@/components/MenuTemporal.vue"),
    },
    {
      path: "/helloword",
      name: "HelloWord",
      component: HelloWorld,
    },
    {
      path: "/",
      component: () => import("@/commons/layout/mainLayout.vue"),
      children: [
        {
          path: "/window",
          ...layoutWIndow,
        },
        {
          path: "/general",
          ...layoutGeneral,
        },
      ],
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/login",
    },
  ],
});

export default router;
