import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layout/DefaultLayout.vue";
import Dashboard from "../pages/Dashboard1.vue";
import ProductList from "../pages/product/ProductList.vue";
import ProductAdd from "../pages/product/ProductAdd.vue";
import ProductEdit from "../pages/product/ProductEdit.vue";
import UserList from "../pages/user/UserList.vue";
import UserAdd from "../pages/user/UserAdd.vue";
import OrderList from "../pages/order/OrderList.vue";
import RoleList from "../pages/role/RoleList.vue";
import PermissionList from "../pages/permission/PermissionList.vue";
import UserRolePermissionList from "../pages/userrolepermission/UserRolePermissionList.vue";
import UserRolePermissionAdd from "../pages/userrolepermission/UserRolePermissionAdd.vue";
import Login from "../pages/auth/login.vue";
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
        {
          path: "/userrolepermission",
          name: "UserRolePermissionList",
          component: UserRolePermissionList,
        },
        {
          path: "userrolepermission/add",
          name: "UserRolePermissionAdd",
          component: UserRolePermissionAdd,
        },
        {
          path: "/permission",
          name: "PermissionList",
          component: PermissionList,
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});

export default router;
