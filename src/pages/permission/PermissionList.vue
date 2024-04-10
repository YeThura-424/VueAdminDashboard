<template>
  <div class="main-section">
    <div class="header-section">
      <PageHeader
        :breadcrumbs="productListBreadcrumb"
        title="Permission List"
      />
    </div>
    <div class="each-content-container mt-6">
      <DataTable
        :tableData="Permissions"
        :tableFormat="json"
        @add-action="addPermission"
        :editAction="editProduct"
        :deleteAction="deleteProduct"
        title="New Permission"
      />
    </div>
    <Dialog
      title="Add New Permission"
      :show="dialogVisible"
      @dismiss="updateShow"
    >
      <template #body>
        <el-form
          label-position="top"
          label-width="auto"
          :model="permissionForm"
          style="max-width: 600px"
        >
          <el-form-item label="Name">
            <el-input v-model="permissionForm.name" />
          </el-form-item>
          <el-form-item label="Slug">
            <el-input v-model="permissionForm.slug" />
          </el-form-item>
        </el-form>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "../../components/PageHeader.vue";
import DataTable from "../../components/DataTable.vue";
import Permissions from "../../dummy/permission.js";
import json from "../../dummy/permissionTable.js";
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
import Dialog from "../../components/Dialog.vue";
const router = useRouter();

const dialogVisible = ref(false);

const addPermission = () => {
  dialogVisible.value = true;
};

const permissionForm = reactive({
  name: "",
  slug: "",
});
const productListBreadcrumb = [
  {
    name: "Home",
    routeName: "Dashboard",
  },
  {
    name: "Permission-List",
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
