<template>
  <div class="main-section">
    <div class="header-section">
      <PageHeader :breadcrumbs="productCreateBreadcrumb" title="Product Add" />
    </div>
    <div class="grid grid-cols-3 gap-4 mt-6">
      <div class="user-info col-span-2">
        <div class="user-info-title pb-4">
          <span>Product Information</span>
        </div>
        <el-form :model="productForm" label-width="auto" label-position="top">
          <div class="grid grid-cols-2 gap-x-5">
            <el-form-item label="Name" class="col-span-2">
              <el-input v-model="productForm.name" />
            </el-form-item>
            <el-form-item label="SKU">
              <el-input v-model="productForm.sku" />
            </el-form-item>
            <el-form-item label="Barcode">
              <el-input v-model="productForm.barcode" />
            </el-form-item>
            <el-form-item label="Description" class="col-span-2">
              <el-input v-model="productForm.description" />
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="user-login">
        <div class="user-login-info-title pb-4">
          <span>Pricing</span>
        </div>
        <el-form :model="productForm" label-width="auto" label-position="top">
          <el-form-item label="Best Price">
            <el-input v-model="productForm.bestprice" />
          </el-form-item>
          <el-form-item label="Discount Price">
            <el-input v-model="productForm.discount" />
          </el-form-item>

          <el-checkbox label="Charge Tax on this product" value="tax" />

          <el-form-item label="In Stock">
            <el-switch v-model="productForm.inStock" />
          </el-form-item>
        </el-form>
      </div>
      <div class="user-address col-span-3">
        <div class="user-address-title pb-4">
          <span>Media</span>
        </div>
        <FileUpload />
      </div>
      <div class="form-acion col-span-3 place-self-end">
        <el-button type="info" :icon="Close">Cancel</el-button>
        <el-button type="primary" :icon="FolderAdd" @click="createUser"
          >Save</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "../../components/PageHeader.vue";
import { reactive } from "vue";
import { FolderAdd, Close } from "@element-plus/icons-vue";
import FileUpload from "../../components/FileUpload.vue";
const productForm = reactive({
  name: "",
  sku: "",
  barcode: "",
  description: "",
  bestprice: "",
  discount: "",
  inStock: false,
  password: "",
  confirmPassowrd: "",
  isActive: false,
  houseno: "",
  street: "",
  ward: "",
  township: "",
  town: "",
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
    name: "Product-List",
    routeName: "ProductList",
  },
  {
    name: "Product-Create",
    routeName: "",
  },
];
</script>
