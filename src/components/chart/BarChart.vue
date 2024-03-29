<template>
  <el-card class="box-card">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </el-card>
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
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#7367f0",
      data: [40, 20, 12, 50, 65, 80, 15, 66, 80, 115, 45, 30],
    },
    {
      label: "Data Two",
      backgroundColor: "#736733",
      data: [40, 20, 12, 50, 65, 80, 15, 66, 80, 115, 45, 30],
    },
  ],
});

const chartOptions = reactive({
  responsive: true,
});
</script>
