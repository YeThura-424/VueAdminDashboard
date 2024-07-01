<script setup>
import VueApexCharts from "vue3-apexcharts";
import { computed, ref } from "vue";

const revenueYear = ref(2024);
const series = {
  bar: [
    {
      name: "Earning",
      data: [270, 210, 180, 200, 250, 280, 250, 270, 150],
    },
    {
      name: "Expense",
      data: [-140, -160, -180, -150, -100, -60, -80, -100, -180],
    },
  ],
  line: [
    {
      name: "Last Month",
      data: [20, 10, 30, 16, 24, 5, 40, 23, 28, 5, 30],
    },
    {
      name: "This Month",
      data: [50, 40, 60, 46, 54, 35, 70, 53, 58, 35, 60],
    },
  ],
};

const chartOptions = computed(() => {
  return {
    bar: {
      chart: {
        parentHeightOffset: 0,
        stacked: true,
        type: "bar",
        toolbar: { show: false },
      },
      tooltip: { enabled: false },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          borderRadius: 8,
          startingShape: "rounded",
          endingShape: "rounded",
        },
      },
      colors: ["#7367f0", "#ff9f43"],
      dataLabels: { enabled: false },
      stroke: {
        curve: "smooth",
        width: 6,
        lineCap: "round",
        colors: "#ddd",
      },
      legend: {
        show: true,
        horizontalAlign: "right",
        position: "top",
        fontFamily: "Public Sans",
        markers: {
          height: 12,
          width: 12,
          radius: 12,
          offsetX: -3,
          offsetY: 2,
        },
        labels: { colors: "#000" },
        itemMargin: { horizontal: 5 },
      },
      grid: {
        show: false,
        padding: {
          bottom: -8,
          top: 20,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        labels: {
          style: {
            fontSize: "14px",
            colors: "inherit",
            fontFamily: "Public Sans",
          },
        },
        axisTicks: { show: false },
        axisBorder: { show: false },
      },
      yaxis: {
        labels: {
          offsetX: -16,
          style: {
            fontSize: "14px",
            colors: ["#000"],
            fontFamily: "Public Sans",
          },
        },
        min: -200,
        max: 300,
        tickAmount: 5,
      },
      responsive: [
        {
          breakpoint: 1700,
          options: { plotOptions: { bar: { columnWidth: "43%" } } },
        },
        {
          breakpoint: 1441,
          options: { plotOptions: { bar: { columnWidth: "40%" } } },
        },
        {
          breakpoint: 1280,
          options: { plotOptions: { bar: { columnWidth: "38%" } } },
        },
        {
          breakpoint: 1025,
          options: {
            plotOptions: { bar: { columnWidth: "70%" } },
            chart: { height: 390 },
          },
        },
        {
          breakpoint: 991,
          options: { plotOptions: { bar: { columnWidth: "38%" } } },
        },
        {
          breakpoint: 850,
          options: { plotOptions: { bar: { columnWidth: "48%" } } },
        },
        {
          breakpoint: 449,
          options: {
            plotOptions: { bar: { columnWidth: "70%" } },
            chart: { height: 360 },
            xaxis: { labels: { offsetY: -5 } },
          },
        },
        {
          breakpoint: 394,
          options: { plotOptions: { bar: { columnWidth: "88%" } } },
        },
      ],
      states: {
        hover: { filter: { type: "none" } },
        active: { filter: { type: "none" } },
      },
    },
    line: {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        type: "line",
      },
      stroke: {
        curve: "smooth",
        dashArray: [5, 0],
        width: [1, 2],
      },
      legend: { show: false },
      colors: ["#fff", "#7367f0"],
      grid: {
        show: false,
        color: "#90A4AE",
        padding: {
          top: -30,
          bottom: -15,
          left: 25,
        },
      },
      markers: { size: 0 },
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false },
      },
      yaxis: { show: false },
      tooltip: { enabled: false },
    },
  };
});
</script>

<template>
  <div class="grid grid-cols-3 pb-4">
    <div class="col-span-2">
      <div class="pe-2 pb-2">
        <h6 class="text-base -mb-8">Revenue Report</h6>

        <VueApexCharts
          :options="chartOptions.bar"
          :series="series.bar"
          height="365"
        />
      </div>
    </div>

    <div class="col-span-1">
      <div
        class="flex flex-col justify-between items-center text-center ps-2 h-full"
      >
        <el-select
          v-model="revenueYear"
          placeholder="Select"
          style="width: 80px"
        >
          <el-option
            v-for="(item, index) in [
              '2024',
              '2023',
              '2022',
              '2021',
              '2020',
              '2019',
            ]"
            :key="index"
            :label="item"
            :value="item"
          />
        </el-select>

        <div class="flex flex-col mt-6">
          <h5 class="font-weight-semibold text-xl">$25,825</h5>
          <p>
            <span class="font-semibold me-1">Budget:</span>
            <span>56,800</span>
          </p>
        </div>

        <VueApexCharts
          :options="chartOptions.line"
          :series="series.line"
          height="100"
        />

        <el-button type="primary" class="mt-4"> Increase Budget </el-button>
      </div>
    </div>
  </div>
</template>
