<template>
  <div class="main_container flex absolute w-full h-full">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="layout">
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
</script>
