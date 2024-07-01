<script setup>
import VueApexCharts from "vue3-apexcharts";
import { computed } from "vue";
import { IconChevronUp } from "@tabler/icons-vue";

const series = [45, 58, 30, 50];

const chartOptions = computed(() => {
  return {
    chart: {
      parentHeightOffset: 0,
      type: "donut",
    },
    labels: ["Electronic", "Sports", "Decor", "Fashion"],
    colors: ["#28c76f", "#28c76fb3", "#28c76f80", "#d4f4e2"],
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
  <div class="box-card flex justify-between items-start">
    <div class="flex flex-col gap-4">
      <div class="mb-auto">
        <h6 class="text-xl font-medium text-[#434050]">Generated Leads</h6>
        <span class="text-sm">Monthly Report</span>
      </div>

      <div>
        <h5 class="text-2xl mb-1">4,350</h5>
        <div class="text-base flex text-[#28c76f]">
          <IconChevronUp stroke="{2}" :size="20" />
          <span class="text-success font-weight-medium">15.8% </span>
        </div>
      </div>
    </div>
    <div>
      <VueApexCharts
        :options="chartOptions"
        :series="series"
        :height="120"
        :width="120"
      />
    </div>
  </div>
</template>
