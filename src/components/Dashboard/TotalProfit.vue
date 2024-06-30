<script setup>
import VueApexCharts from "vue3-apexcharts";
import { computed } from "vue";
const series = [
  {
    data: [0, 25, 10, 40, 25, 55],
  },
];

const chartOptions = computed(() => {
  return {
    chart: {
      height: 90,
      type: "line",
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    grid: {
      borderColor: "#e6e5e7",
      strokeDashArray: 6,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } },
      padding: {
        top: -18,
        left: -4,
        right: 7,
        bottom: -10,
      },
    },
    colors: ["#2ac5d9"],
    stroke: { width: 2 },
    tooltip: {
      enabled: false,
      shared: false,
      intersect: true,
      x: { show: false },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { labels: { show: false } },
    markers: {
      size: 3.5,
      fillColor: "#00bad1",
      strokeColors: "transparent",
      strokeWidth: 3.2,
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 5,
          fillColor: "#e3e3e3",
          strokeColor: "#00bad1",
          size: 5,
          shape: "circle",
        },
      ],
      hover: { size: 5.5 },
    },
    responsive: [
      {
        breakpoint: 960,
        options: { chart: { height: 110 } },
      },
    ],
  };
});
</script>

<template>
  <div class="flex justify-between">
    <el-card class="box-card">
      <div class="profit pb-2">
        <h1 class="text-[18px] text-[#8b8a91]">Profit</h1>
        <p class="text-[13px] text-[#aeadafe6]">Last Month</p>
      </div>
      <div class="profile-chart pb-2">
        <VueApexCharts
          type="line"
          :options="chartOptions"
          :series="series"
          :height="90"
        />
      </div>
      <div class="flex gap-1 items-center">
        <h2 class="text-[#8b8a91] text-[24px]">624K</h2>
        <span class="text-[#28c76f] text-[13px]">+8.24%</span>
      </div>
    </el-card>
  </div>
</template>
