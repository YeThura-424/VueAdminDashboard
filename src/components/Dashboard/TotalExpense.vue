<script setup>
import VueApexCharts from "vue3-apexcharts";
import { computed } from "vue";
const series = [78];

const chartOptions = computed(() => {
  return {
    chart: {
      sparkline: { enabled: true },
      parentHeightOffset: 0,
      type: "radialBar",
    },
    colors: ["#f28e2e"],
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: -90,
        endAngle: 90,
        hollow: { size: "65%" },
        track: {
          strokeWidth: "45%",
          background: "#f2f2f2",
        },
        dataLabels: {
          name: { show: false },
          value: {
            fontSize: "22px",
            color: undefined,
            fontWeight: 600,
            offsetY: -5,
          },
        },
      },
    },
    grid: {
      show: false,
      padding: { bottom: 5 },
    },
    stroke: { lineCap: "round" },
    labels: ["Progress"],
    responsive: [
      {
        breakpoint: 1442,
        options: {
          chart: { height: 120 },
          plotOptions: {
            radialBar: {
              dataLabels: { value: { fontSize: "18px" } },
              hollow: { size: "60%" },
            },
          },
        },
      },
      {
        breakpoint: 1025,
        options: {
          chart: { height: 136 },
          plotOptions: {
            radialBar: {
              hollow: { size: "65%" },
              dataLabels: { value: { fontSize: "18px" } },
            },
          },
        },
      },
      {
        breakpoint: 769,
        options: {
          chart: { height: 120 },
          plotOptions: { radialBar: { hollow: { size: "55%" } } },
        },
      },
      {
        breakpoint: 426,
        options: {
          chart: { height: 145 },
          plotOptions: { radialBar: { hollow: { size: "65%" } } },
          dataLabels: { value: { offsetY: 0 } },
        },
      },
      {
        breakpoint: 376,
        options: {
          chart: { height: 105 },
          plotOptions: { radialBar: { hollow: { size: "60%" } } },
        },
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
          type="radialBar"
          :options="chartOptions"
          :series="series"
          :height="145"
        />
      </div>
      <div class="mt-4 text-center">
        <!-- <h2 class="text-[#8b8a91] text-[24px]">624K</h2> -->
        <span class="text-[#acaab1] text-[13px]"> $21k Expenses </span>
        <p class="text-[#acaab1] text-[13px] truncate">more than last month</p>
      </div>
    </el-card>
  </div>
</template>
