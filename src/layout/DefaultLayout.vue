<template>
  <div class="main_container flex absolute w-full h-full">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div :class="appLayout.isCollapse ? 'layout-expand' : 'layout'">
      <div class="nav-header">
        <Header />
      </div>
      <div class="contant"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import { useAppLayoutStore } from "../store/AppLayout.js";

const appLayout = useAppLayoutStore();
</script>
