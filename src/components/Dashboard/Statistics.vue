<script setup>
import {
  IconChartPie,
  IconUsers,
  IconShoppingCart,
  IconCurrencyDollar,
} from "@tabler/icons-vue";
const statistics = [
  {
    title: "Sales",
    stats: "230k",
    icon: "tabler-chart-pie-2",
    color: "primary",
  },
  {
    title: "Customers",
    stats: "8.549k",
    icon: "tabler-users",
    color: "info",
  },
  {
    title: "Products",
    stats: "1.423k",
    icon: "tabler-shopping-cart",
    color: "error",
  },
  {
    title: "Revenue",
    stats: "$9745",
    icon: "tabler-currency-dollar",
    color: "success",
  },
];
</script>

<template>
  <el-card class="box-card mb-4">
    <div class="statistics h-[140px] flex flex-col justify-between">
      <div class="statistics-header flex justify-between items-end">
        <h1 class="text-lg">Statistics</h1>
        <p class="text-sm text-[#2f2b3d66]">updated 1 month ago</p>
      </div>
      <div class="statistics-body flex justify-between items-center">
        <div class="statistics-sales flex gap-5 items-center">
          <div
            class="w-10 h-10 text-[#7367f0] bg-[#e8e6fc] flex items-center justify-center rounded-lg"
          >
            <IconChartPie :size="24" stroke-width="1" />
          </div>
          <div>
            <h1 class="text-lg">230k</h1>
            <span class="text-sm">Sales</span>
          </div>
        </div>
        <div class="statistics-customers flex gap-5 items-center">
          <div
            class="w-10 h-10 text-[#00bad1] bg-[#d6f4f7] flex items-center justify-center rounded-lg"
          >
            <IconUsers :size="24" stroke-width="1" />
          </div>
          <div>
            <h1 class="text-lg">230k</h1>
            <span class="text-sm">Sales</span>
          </div>
        </div>
        <div class="statistics-products flex gap-5 items-center">
          <div
            class="w-10 h-10 text-[#ff4c51] bg-[#ddd9dc] flex items-center justify-center rounded-lg"
          >
            <IconShoppingCart :size="24" stroke-width="1" />
          </div>
          <div>
            <h1 class="text-lg">230k</h1>
            <span class="text-sm">Sales</span>
          </div>
        </div>
        <div class="statistics-revenue flex gap-5 items-center">
          <div
            class="w-10 h-10 text-[#28c76f] bg-[#bfd6cb] flex items-center justify-center rounded-lg"
          >
            <IconCurrencyDollar :size="24" stroke-width="1" />
          </div>
          <div>
            <h1 class="text-lg">230k</h1>
            <span class="text-sm">Sales</span>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>
