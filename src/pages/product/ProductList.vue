<template>
  <div class="main-section">
    <div class="header-section">
      <PageHeader :breadcrumbs="productListBreadcrumb" title="Product List" />
    </div>
    <div class="each-content-container mt-6">
      <DataTable
        :tableData="Products"
        :tableFormat="json"
        @add-action="addProduct"
        :editAction="editProduct"
        :deleteAction="deleteProduct"
        title="New Product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "../../components/PageHeader.vue";
import DataTable from "../../components/DataTable.vue";
import Products from "../../dummy/product.js";
import json from "../../dummy/productTable.js";
import { useRouter } from "vue-router";

const router = useRouter();

const addProduct = () => {
  router.push({
    name: "ProductAdd",
  });
};
const productListBreadcrumb = [
  {
    name: "Home",
    routeName: "Dashboard",
  },
  {
    name: "Product-List",
    routeName: "",
  },
];

const editProduct = (index: number, row: Object) => {
  console.log(index, row);
};

const deleteProduct = (index: number, row: Object) => {
  console.log(index, row);
};
</script>
