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
    </div>
  </div>
</template>

<script lang="ts" setup>
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

const salesOptions = reactive({
  responsive: true,
});
</script>
