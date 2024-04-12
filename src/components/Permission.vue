<template>
  <el-tabs type="border-card">
    <el-tab-pane label="User">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="module" label="Module" width="180" />
        <el-table-column label="All" width="180">
          <template #default>
            <el-checkbox
              v-model="checkAll"
              :indeterminate="isIndeterminate"
              @change="handleCheckAllChange"
            ></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="create" label="Create" />
        <el-table-column prop="read" label="Read" />
        <el-table-column prop="update" label="Update" />
        <el-table-column prop="delete" label="Delete" />
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref(["Shanghai", "Beijing"]);
const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cities : [];
  isIndeterminate.value = false;
};
const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};

const tableData = [
  {
    module: "Product",
    all: true,
    create: true,
    read: true,
    update: true,
    delete: true,
  },
  {
    module: "User",
    all: true,
    create: true,
    read: true,
    update: true,
    delete: true,
  },
  {
    module: "Order",
    all: true,
    create: true,
    read: true,
    update: true,
    delete: true,
  },
  {
    module: "Role",
    all: true,
    create: true,
    read: true,
    update: true,
    delete: true,
  },
  {
    module: "Permission",
    all: true,
    create: true,
    read: true,
    update: true,
    delete: true,
  },
  {
    module: "UserRolePermission",
    all: true,
    create: true,
    read: true,
    update: true,
    delete: true,
  },
];
</script>
