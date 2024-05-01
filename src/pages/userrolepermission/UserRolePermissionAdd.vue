<template>
  <div class="main-section">
    <div class="header-section">
      <PageHeader
        :breadcrumbs="productCreateBreadcrumb"
        title="User Role Permission Add"
      />
    </div>
    <div class="mt-6">
      <div class="flex flex-col gap-y-4">
        <div class="each-content-container user-info col-span-2">
          <div class="user-info-title pb-4">
            <span>User and Role</span>
          </div>
          <el-form :model="productForm" label-width="auto" label-position="top">
            <div class="grid grid-cols-2 gap-x-5">
              <el-form-item label="User">
                <el-select
                  v-model="productForm.vendor"
                  placeholder="please select user"
                >
                  <el-option label="Ryan" value="ryan" />
                  <el-option label="John" value="john" />
                  <el-option label="Selena" value="selena" />
                </el-select>
              </el-form-item>
              <el-form-item label="Role">
                <el-select
                  v-model="productForm.vendor"
                  placeholder="please select role"
                >
                  <el-option label="Admin" value="admin" />
                  <el-option label="Super Admin" value="superadmin" />
                  <el-option label="Manager" value="manager" />
                </el-select>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="each-content-container user-address col-span-2">
          <div class="user-address-title pb-4">
            <span>Permissions</span>
          </div>
          <Permission @submitPermission="handlePermission" />
        </div>
        <div class="form-acion col-span-3 place-self-end">
          <el-button type="info" :icon="Close">Cancel</el-button>
          <el-button type="primary" :icon="FolderAdd" @click="createUser"
            >Save</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "../../components/PageHeader.vue";
import { reactive } from "vue";
import { FolderAdd, Close } from "@element-plus/icons-vue";
import Permission from "../../components/Permission.vue";
const productForm = reactive({
  name: "",
  sku: "",
  barcode: "",
  description: "",
  bestprice: "",
  discount: "",
  inStock: false,
  variantsname: "",
  variantsvalue: "",
  vendor: [],
  category: "",
  collection: "",
  status: "",
  tag: "",
});

const createUser = () => {
  console.log(productForm);
};
const productCreateBreadcrumb = [
  {
    name: "Home",
    routeName: "Dashboard",
  },
  {
    name: "UserRolePermission-List",
    routeName: "UserRolePermissionList",
  },
  {
    name: "UserRolePermission-Create",
    routeName: "",
  },
];
const handlePermission = (permissionVal) => {
  console.log(permissionVal);
};
</script>
