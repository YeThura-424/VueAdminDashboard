<template>
  <div class="main_container flex absolute w-full h-full">
    <div :class="appLayout.isCollapse ? 'sidebar sidebar-collapse' : 'sidebar'">
      <Sidebar />
    </div>
    <div :class="appLayout.isCollapse ? 'layout-expand' : 'layout'">
      <div class="nav-header">
        <Header />
      </div>
      <div class="main-contant">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
// import Sidebar from "./NewSideBar.vue";
import Header from "./Header.vue";
import { useAppLayoutStore } from "@/store/AppLayout.js";

const appLayout = useAppLayoutStore();
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
