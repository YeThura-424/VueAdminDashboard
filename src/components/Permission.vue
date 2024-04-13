<template>
  <el-tabs type="border-card">
    <el-tab-pane label="User">
      <div class="permission-module">
        <div class="permission-module-header">
          <ul class="header-wrapper flex justify-between">
            <li class="header-title">Module</li>
            <li class="header-title">Create</li>
            <li class="header-title">Read</li>
            <li class="header-title">Update</li>
            <li class="header-title">Delete</li>
          </ul>
        </div>
        <div class="permission-module-body">
          <ul class="header-wrapper flex justify-between">
            <li class="header-title">Dashboard</li>
            <li class="header-title">Create</li>
            <li class="header-title">Read</li>
            <li class="header-title">Update</li>
            <li class="header-title">Delete</li>
          </ul>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from "vue";

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
