<template>
  <Bar id="my-chart-id" :options="props.options" :data="props.data" />
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

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

interface data {
  labels: string[];
  datasets: {
    label: string;
    backgroundColor: string;
    data: number[];
  }[];
}

const props = defineProps({
  data: {
    type: Object as () => data,
    required: true,
  },
  options: {
    type: Object,
    required: true,
  },
});
</script>
