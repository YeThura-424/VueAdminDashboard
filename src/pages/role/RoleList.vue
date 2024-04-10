<template>
  <div class="main-section">
    <div class="header-section">
      <PageHeader :breadcrumbs="productListBreadcrumb" title="Role List" />
    </div>
    <div class="each-content-container mt-6">
      <DataTable
        :tableData="Roles"
        :tableFormat="json"
        @add-action="addRole"
        :editAction="editProduct"
        :deleteAction="deleteProduct"
        title="New Role"
      />
    </div>
    <Dialog title="Add New Role" :show="dialogVisible" @close="updateShow">
      <template #body>
        <h1>Hello Bro</h1>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "../../components/PageHeader.vue";
import DataTable from "../../components/DataTable.vue";
import Roles from "../../dummy/role.js";
import json from "../../dummy/roleTable.js";
import { useRouter } from "vue-router";
import { ref } from "vue";
import Dialog from "../../components/Dialog.vue";
const router = useRouter();

const dialogVisible = ref(false);

const addRole = () => {
  dialogVisible.value = true;
};
const productListBreadcrumb = [
  {
    name: "Home",
    routeName: "Dashboard",
  },
  {
    name: "Role-List",
    routeName: "",
  },
];

const updateShow = (newValue: boolean) => {
  dialogVisible.value = newValue;
};

const editProduct = (index: number, row: Object) => {
  router.push({
    name: "ProductEdit",
    params: row.sku,
  });
};

const deleteProduct = (index: number, row: Object) => {
  console.log(index, row);
};
</script>
