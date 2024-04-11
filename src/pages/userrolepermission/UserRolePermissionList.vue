<template>
  <div class="main-section">
    <div class="header-section">
      <PageHeader
        :breadcrumbs="userListBreadcrumb"
        title="User Role Permission List"
      />
    </div>
    <div class="each-content-container mt-6">
      <DataTable
        :tableData="UserRolePermission"
        :tableFormat="json"
        @add-action="addUser"
        :editAction="editUser"
        :deleteAction="deleteUser"
        title="Add New"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "../../components/PageHeader.vue";
import DataTable from "../../components/DataTable.vue";
import UserRolePermission from "../../dummy/userrolepermission.js";
import json from "../../dummy/userrolepermissionTable.js";
import { useRouter } from "vue-router";

const router = useRouter();

const userListBreadcrumb = [
  {
    name: "Home",
    routeName: "Dashboard",
  },
  {
    name: "UserRolePermission-List",
    routeName: "",
  },
];

const addUser = () => {
  router.push({
    name: "UserRolePermissionAdd",
  });
};

const editUser = (index: number, row: User) => {
  console.log(row);
};

const deleteUser = (index: number, row: User) => {
  console.log(row);
};
</script>
