<template>
  <el-tabs type="border-card">
    <el-tab-pane label="User">
      <div class="permission-module">
        <table id="permission-table">
          <thead>
            <th>Module</th>
            <th>Create</th>
            <th>Read</th>
            <th>Update</th>
            <th>Delete</th>
          </thead>
          <tbody>
            <tr>
              <td>Dashboard</td>
              <td><el-checkbox v-model="form.create" size="large" /></td>
              <td><el-checkbox v-model="form.read" size="large" /></td>
              <td><el-checkbox v-model="form.update" size="large" /></td>
              <td><el-checkbox v-model="form.delete" size="large" /></td>
            </tr>
            <tr>
              <td>Product</td>
              <td><el-checkbox v-model="form.create" size="large" /></td>
              <td><el-checkbox v-model="form.read" size="large" /></td>
              <td><el-checkbox v-model="form.update" size="large" /></td>
              <td><el-checkbox v-model="form.delete" size="large" /></td>
            </tr>
            <tr>
              <td>Order</td>
              <td><el-checkbox v-model="form.create" size="large" /></td>
              <td><el-checkbox v-model="form.read" size="large" /></td>
              <td><el-checkbox v-model="form.update" size="large" /></td>
              <td><el-checkbox v-model="form.delete" size="large" /></td>
            </tr>
            <tr>
              <td>Customer</td>
              <td><el-checkbox v-model="form.create" size="large" /></td>
              <td><el-checkbox v-model="form.read" size="large" /></td>
              <td><el-checkbox v-model="form.update" size="large" /></td>
              <td><el-checkbox v-model="form.delete" size="large" /></td>
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
import { reactive } from "vue";

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
const form = reactive({
  create: false,
  read: false,
  update: false,
  delete: false,
});
</script>
