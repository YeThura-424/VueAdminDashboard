import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layout/DefaultLayout.vue";
import Dashboard from "../pages/Dashboard.vue";
import Product from "../pages/Product.vue";
import UserList from "../pages/user/UserList.vue";
import UserAdd from "../pages/user/UserAdd.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "dashboard",
      component: DefaultLayout,
      children: [
        { path: "/dashboard", name: "Dashboard", component: Dashboard },
        { path: "/product", name: "Product", component: Product },
        { path: "/userlist", name: "UserList", component: UserList },
        { path: "/user/add", name: "UserAdd", component: UserAdd },
      ],
    },
  ],
});

export default router;
