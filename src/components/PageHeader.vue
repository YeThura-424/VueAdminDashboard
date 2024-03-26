<template>
  <el-page-header @back="onBack">
    <template #breadcrumb>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="breadcrumb in props.breadcrumbs">
          <router-link :to="{ name: breadcrumb.routeName }">{{
            breadcrumb.name
          }}</router-link>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template #content>
      <span class="text-large font-600 mr-3"> {{ title }} </span>
    </template>
  </el-page-header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const onBack = () => {
  router.back();
};
const props = defineProps({
  breadcrumbs: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
