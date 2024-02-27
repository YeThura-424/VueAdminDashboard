import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layout/DefaultLayout.vue";
import Dashboard from "../pages/Dashboard.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "dashboard",
      component: DefaultLayout,
      children: [
        { path: "/dashboard", name: "Dashboard", component: Dashboard },
      ],
    },
  ],
});

export default router;
