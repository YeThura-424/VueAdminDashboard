<template>
  <el-menu
    :default-active="activeLink"
    class="el-menu-vertical-demo"
    :collapse="appLayout.isCollapse"
  >
    <div
      class="sidebar-header flex items-center h-12 border-b border-slate-300 px-2"
      :class="appLayout.isCollapse ? 'justify-center' : 'justify-between'"
    >
      <div class="logo" :class="{ hidden: appLayout.isCollapse }">
        <span class="app-logo"> Vue Admin Template </span>
      </div>
      <div
        class="toggler cursor-pointer"
        @click="appLayout.toggleSidebar(!appLayout.isCollapse)"
      >
        <el-icon><Expand /></el-icon>
      </div>
    </div>

    <el-menu-item index="Dashboard">
      <el-icon><icon-menu /></el-icon>
      <template #title>
        <router-link class="nav-link" :to="{ name: 'Dashboard' }"
          >Dashboard</router-link
        >
      </template>
    </el-menu-item>
    <div class="menu-group" :class="appLayout.isCollapse ? 'hidden' : ''">
      <span class="uppercase">General</span>
    </div>
    <el-sub-menu index="Product">
      <template #title>
        <el-icon><Goods /></el-icon>
        <span>Product</span>
      </template>
      <el-menu-item index="ProductList">
        <el-icon><HelpFilled /></el-icon>
        <router-link :to="{ name: 'ProductList' }" class="nav-link"
          >List</router-link
        >
      </el-menu-item>
      <el-menu-item index="ProductAdd"
        ><el-icon><HelpFilled /></el-icon>
        <router-link :to="{ name: 'ProductAdd' }" class="nav-link"
          >Create</router-link
        >
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="User">
      <template #title>
        <el-icon><User /></el-icon>
        <span>User</span>
      </template>
      <el-menu-item index="UserList">
        <el-icon><HelpFilled /></el-icon>
        <router-link :to="{ name: 'UserList' }" class="nav-link"
          >List</router-link
        >
      </el-menu-item>
      <el-menu-item index="User-List"
        ><el-icon><HelpFilled /></el-icon>
        <router-link :to="{ name: 'UserAdd' }" class="nav-link"
          >Create</router-link
        >
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="Order">
      <template #title>
        <el-icon><ShoppingTrolley /></el-icon>
        <span>Order</span>
      </template>
      <el-menu-item index="OrderList">
        <el-icon><HelpFilled /></el-icon>
        <router-link :to="{ name: 'OrderList' }" class="nav-link"
          >List</router-link
        >
      </el-menu-item>
      <el-menu-item index="OrderDetail"
        ><el-icon><HelpFilled /></el-icon>
        <router-link :to="{ name: 'UserAdd' }" class="nav-link"
          >Detail</router-link
        >
      </el-menu-item>
    </el-sub-menu>

    <div class="menu-group" :class="appLayout.isCollapse ? 'hidden' : ''">
      <span class="uppercase">Authentication</span>
    </div>
    <el-menu-item index="RoleList">
      <el-icon><Lock /></el-icon>
      <template #title>
        <router-link class="nav-link" :to="{ name: 'RoleList' }"
          >Role</router-link
        >
      </template>
    </el-menu-item>
    <el-menu-item index="PermissionList">
      <el-icon><CircleCheck /></el-icon>
      <template #title>
        <router-link class="nav-link" :to="{ name: 'PermissionList' }"
          >Permission</router-link
        >
      </template>
    </el-menu-item>
    <el-sub-menu index="UserRolePermission">
      <template #title>
        <el-icon><Avatar /></el-icon>
        <span>UserRolePermission</span>
      </template>
      <el-menu-item index="UserRolePermissionList">
        <el-icon><HelpFilled /></el-icon>
        <router-link :to="{ name: 'UserRolePermissionList' }" class="nav-link"
          >List</router-link
        >
      </el-menu-item>
      <el-menu-item index="UserRolePermissionAdd"
        ><el-icon><HelpFilled /></el-icon>
        <router-link :to="{ name: 'UserRolePermissionAdd' }" class="nav-link"
          >Create</router-link
        >
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script lang="ts" setup>
import { Expand } from "@element-plus/icons-vue";
import { useAppLayoutStore } from "../store/AppLayout.js";
import {
  Menu as IconMenu,
  User,
  HelpFilled,
  Goods,
  ShoppingTrolley,
  Lock,
  CircleCheck,
  Avatar,
} from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
const router = useRoute();
const appLayout = useAppLayoutStore();
const activeLink = router.name;

console.log(activeLink);
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100vh;
  width: 250px;
}
</style>
