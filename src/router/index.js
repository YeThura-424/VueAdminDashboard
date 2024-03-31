import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layout/DefaultLayout.vue";
import Dashboard from "../pages/Dashboard.vue";
import ProductList from "../pages/product/ProductList.vue";
import ProductAdd from "../pages/product/ProductAdd.vue";
import ProductEdit from "../pages/product/ProductEdit.vue";
import UserList from "../pages/user/UserList.vue";
import UserAdd from "../pages/user/UserAdd.vue";
import OrderList from "../pages/order/OrderList.vue";
import RoleList from "../pages/role/RoleList.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "dashboard",
      component: DefaultLayout,
      children: [
        { path: "/dashboard", name: "Dashboard", component: Dashboard },
        { path: "/productlist", name: "ProductList", component: ProductList },
        { path: "/product/add", name: "ProductAdd", component: ProductAdd },
        {
          path: "/product/edit/:{id}",
          name: "ProductEdit",
          component: ProductEdit,
        },
        { path: "/userlist", name: "UserList", component: UserList },
        { path: "/user/add", name: "UserAdd", component: UserAdd },
        { path: "/order", name: "OrderList", component: OrderList },
        { path: "/role", name: "RoleList", component: RoleList },
      ],
    },
  ],
});

export default router;
