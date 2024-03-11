<template>
  <div class="main-section">
    <div class="header-section">
      <PageHeader :breadcrumbs="userListBreadcrumb" title="User List" />
    </div>
    <div class="each-content-container mt-6">
      <DataTable
        :tableData="Users"
        :tableFormat="json"
        title="New User"
        @add-action="addAction"
        @edit-action="editAction"
        @delete-action="deleteAction"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "../../components/PageHeader.vue";
import DataTable from "../../components/DataTable.vue";
import Users from "../../dummy/user.js";
import json from "../../dummy/userTable.js";
import { useRouter } from "vue-router";

const router = useRouter();

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

const addAction = () => {
  router.push({
    name: "UserAdd",
  });
};

const editAction = (index: number, row: User) => {
  console.log(row);
};

const deleteAction = (index: number, row: User) => {
  console.log(row);
};
</script>
