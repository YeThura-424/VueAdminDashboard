<template>
  <div class="main-section">
    <div class="header-section">
      <PageHeader :breadcrumbs="productListBreadcrumb" title="Product List" />
    </div>
    <div class="each-content-container mt-6">
      <DataTable
        :tableData="Products"
        :tableFormat="json"
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
</script>
