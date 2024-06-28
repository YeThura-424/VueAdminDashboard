<template>
  <div class="grid grid-cols-3 gap-x-5">
    <div class="col-span-2">
      <el-card class="box-card">
        <BarChart :data="salesData" :options="salesOptions" />
      </el-card>
    </div>
    <div class="col-span-1">
      <el-card class="box-card">
        <div class="card-title">
          <h3 class="text-lg">Total Users</h3>
        </div>
        <div class="card-body flex justify-between">
          <span>Last Week</span>
          <p>550</p>
        </div>
      </el-card>
      <el-card class="box-card mt-8">
        <ApexChart
          :options="apexchart.options"
          :series="apexchart.series"
          type="bar"
        />
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ApexChart from "../components/chart/ApexChart.vue";
import BarChart from "../components/chart/BarChart.vue";
import { reactive } from "vue";

const salesData = reactive({
  labels: [
    "January",
    "February",
    "March",
    "Apiral",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Total Sales",
      backgroundColor: "#7367f0",
      data: [40, 20, 12, 50, 65, 80, 15, 66, 80, 115, 45, 30],
    },
    {
      label: "Total Profit",
      backgroundColor: "#736733",
      data: [40, 20, 12, 50, 65, 80, 15, 66, 80, 115, 45, 30],
    },
  ],
});
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
const salesOptions = reactive({
  responsive: true,
});
</script>
