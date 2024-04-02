<template>
  <div class="main-section">
    <div class="header-section">
      <PageHeader :breadcrumbs="userListBreadcrumb" title="User List" />
    </div>
    <div class="each-content-container mt-6">
      <DataTable
        :tableData="Users"
        :tableFormat="json"
        @add-action="addUser"
        :editAction="editUser"
        :deleteAction="deleteUser"
        title="New User"
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

const addUser = () => {
  router.push({
    name: "UserAdd",
  });
};

const editUser = (index: number, row: User) => {
  console.log(row);
};

const deleteUser = (index: number, row: User) => {
  console.log(row);
};
</script>
