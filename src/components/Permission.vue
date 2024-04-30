<template>
  <el-tabs type="border-card">
    <el-tab-pane label="User">
      <div class="permission-module">
        <table id="permission-table">
          <thead>
            <th>Module</th>
            <th>Check All</th>
            <th>Create</th>
            <th>Read</th>
            <th>Update</th>
            <th>Delete</th>
          </thead>
          <tbody>
            <tr>
              <td>Dashboard</td>
              <td><el-checkbox v-model="form.create" /></td>
              <td><el-checkbox v-model="form.create" /></td>
              <td><el-checkbox v-model="form.read" /></td>
              <td><el-checkbox v-model="form.update" /></td>
              <td><el-checkbox v-model="form.delete" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";

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
const form = reactive({
  create: false,
  read: false,
  update: false,
  delete: false,
});
</script>
