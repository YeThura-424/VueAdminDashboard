<template>
  <div class="grid grid-cols-3 gap-x-5">
    <div class="col-span-2">
      <el-card class="box-card">
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
      </el-card>
    </div>
    <div class="col-span-1">
      <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{ "List item " + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { reactive } from "vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = reactive({
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
  datasets: [{ data: [40, 20, 12, 50, 65, 80, 15, 66, 80, 115, 45, 30] }],
});

const chartOptions = reactive({
  responsive: true,
});
</script>
