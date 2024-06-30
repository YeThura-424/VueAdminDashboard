<script setup>
import VueApexCharts from "vue3-apexcharts";
import { computed } from "vue";
const series = [45, 58, 30, 50];

const chartOptions = computed(() => {
  return {
    chart: {
      parentHeightOffset: 0,
      type: "donut",
    },
    labels: ["Electronic", "Sports", "Decor", "Fashion"],
    colors: ["#28c76f", "#28c76fb3", "#28c76f80", "#28c76f"],
    stroke: { width: 0 },
    dataLabels: {
      enabled: false,
      formatter(val) {
        return `${parseInt(val)}%`;
      },
    },
    legend: { show: false },
    tooltip: { theme: false },
    grid: {
      padding: {
        top: 15,
        right: -20,
        left: -20,
      },
    },
    states: { hover: { filter: { type: "none" } } },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            value: {
              fontSize: "1.375rem",
              fontFamily: "Public Sans",
              color: undefined,
              fontWeight: 600,
              offsetY: -15,
              formatter(val) {
                return `${parseInt(val)}%`;
              },
            },
            name: {
              offsetY: 20,
              fontFamily: "Public Sans",
            },
            total: {
              show: true,
              showAlways: true,
              color: "#373d3f",
              fontSize: ".8125rem",
              label: "Total",
              fontFamily: "Public Sans",
              formatter() {
                return "184";
              },
            },
          },
        },
      },
    },
  };
});
</script>

<template>
  <div class="box-card flex justify-between">
    <div class="flex flex-col">
      <div class="mb-auto">
        <h6 class="text-xl text-nowrap">Generated Leads</h6>
        <span class="text-sm">Monthly Report</span>
      </div>

      <div>
        <h5 class="text-h5 mb-1">4,350</h5>
        <div class="text-sm">
          <VIcon
            icon="tabler-chevron-up"
            size="24"
            color="success"
            class="me-1"
          />
          <span class="text-success font-weight-medium">15.8% </span>
        </div>
      </div>
    </div>
    <div>
      <VueApexCharts
        :options="chartOptions"
        :series="series"
        :height="147"
        :width="130"
      />
    </div>
  </div>
</template>
