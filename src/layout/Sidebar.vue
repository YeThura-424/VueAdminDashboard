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
    <div class="nav-link-wrapper">
      <el-menu-item index="Dashboard">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          <router-link class="nav-link" :to="{ name: 'Dashboard' }"
            >Dashboard</router-link
          >
        </template>
      </el-menu-item>

      <el-menu-item index="Product">
        <el-icon><icon-menu /></el-icon>
        <template #title
          ><router-link class="nav-link" :to="{ name: 'Product' }"
            >Product</router-link
          ></template
        >
      </el-menu-item>

      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </div>
  </el-menu>
</template>

<script lang="ts" setup>
import { Expand } from "@element-plus/icons-vue";
import { useAppLayoutStore } from "../store/AppLayout.js";
import { Menu as IconMenu, Location } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";

const router = useRoute();
const appLayout = useAppLayoutStore();
const activeLink = router.name;
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100vh;
}
</style>
