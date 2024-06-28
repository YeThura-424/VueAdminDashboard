<template>
  <div>
    <apexchart
      :width="width"
      :type="type"
      :options="options"
      :series="series"
      :height="height"
    ></apexchart>
  </div>
</template>
<script setup lang="ts">
const { type, series, width, height, options } = defineProps({
  type: {
    type: String,
    default: "line",
    required: false,
  },
  series: {
    type: Array,
    required: true,
  },
  width: {
    type: Number || String,
    default: "100%",
    required: false,
  },
  height: {
    type: Number || String,
    default: "auto",
    required: false,
  },
  options: {
    type: Object,
    required: true,
  },
});
</script>
