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
      <div class="grid grid-cols-2 gap-7">
        <TotalProfit />
        <TotalProfit />
      </div>
    </div>
    <div class="col-span-2">
      <Statistics />
      <el-card class="box-card">
        <ApexChart
          :options="apexchart.options"
          :series="apexchart.series"
          type="bar"
        />
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import Statistics from "../components/Dashboard/Statistics.vue";
import TotalProfit from "../components/Dashboard/TotalProfit.vue";

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
