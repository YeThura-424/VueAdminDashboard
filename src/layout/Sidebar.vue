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
} from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
const router = useRoute();
const appLayout = useAppLayoutStore();
const activeLink = router.name;
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100vh;
  width: 250px;
}
</style>
