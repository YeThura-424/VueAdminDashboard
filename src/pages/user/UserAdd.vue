<template>
  <div class="main-section">
    <div class="header-section">
      <PageHeader :breadcrumbs="userCreateBreadcrumb" title="User Add" />
    </div>
    <div class="content-section mt-6"></div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "../../components/PageHeader.vue";

const userCreateBreadcrumb = [
  {
    name: "Home",
    routeName: "Dashboard",
  },
  {
    name: "User-List",
    routeName: "UserList",
  },
  {
    name: "User-Create",
    routeName: "",
  },
];
</script>
