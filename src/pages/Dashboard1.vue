<template>
  <div class="grid grid-cols-3 gap-7">
    <div class="col-span-1">
      <el-card class="box-card mb-4">
        <div class="best-seller flex">
          <div class="static text-[#2f2b3db3]">
            <h1 class="font-medium text-lg py-2">Congratulation John!</h1>
            <p class="text-xs pb-4">Best seller of the month</p>
            <h1 class="text-[#7367f0] font-2xl pb-2">$48.9K</h1>
            <el-button type="primary">View Sales</el-button>
          </div>
          <div class="avarter h-[140px] relative">
            <img src="/dashboard1.png" alt="" class="w-full h-full" />
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="card-title">
          <h3 class="text-lg">Total Users</h3>
        </div>
        <div class="card-body flex justify-between">
          <span>Last Week</span>
          <p>550</p>
        </div>
      </el-card>
    </div>
    <div class="col-span-2">
      <el-card>
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
      <!-- <el-card class="box-card">
        <ApexChart
          :options="apexchart.options"
          :series="apexchart.series"
          type="bar"
        />
      </el-card> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import {
  IconChartPie,
  IconUsers,
  IconShoppingCart,
  IconCurrencyDollar,
} from "@tabler/icons-vue";

const apexchart = reactive({
  options: {
    chart: {
      id: "vuechart-example",
      stacked: true,
    },
    xaxis: {
      categories: [2020, 2021, 2022, 2023, 2024],
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: 15,
      },
    },
  },
  series: [
    {
      name: "Total Sales",
      data: [80, 60, 65, 85, 70],
    },
    {
      name: "Total Order",
      data: [65, 55, 60, 75, 60],
    },
    {
      name: "Total Profit",
      data: [30, 60, 45, 60, 40],
    },
  ],
});
</script>
