<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="appLayout.isCollapse"
    @open="handleOpen"
    @close="handleClose"
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
    <router-link :to="{ name: 'Dashboard' }">
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <template #title>Dashboard</template>
      </el-menu-item>
    </router-link>
    <router-link :to="{ name: 'Product' }">
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Product</template>
      </el-menu-item>
    </router-link>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { Expand } from "@element-plus/icons-vue";
import { useAppLayoutStore } from "../store/AppLayout.js";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const appLayout = useAppLayoutStore();
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100vh;
}
</style>
