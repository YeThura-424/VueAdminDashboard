<template>
  <div class="main-section">
    <div class="header-section">
      <PageHeader :breadcrumbs="userListBreadcrumb" title="User List" />
    </div>
    <div class="content-section mt-6">
      <DataTable :tableData="Users" :tableFormat="json" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "../../components/PageHeader.vue";
import DataTable from "../../components/DataTable.vue";
import Users from "../../dummy/user.js";
import json from "../../dummy/userTable.js";

const userListBreadcrumb = [
  {
    name: "Home",
    routeName: "Dashboard",
  },
  {
    name: "User-List",
    routeName: "",
  },
];
</script>
