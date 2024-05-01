<template>
  <el-tabs type="border-card" @update="submitPermissions">
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
            <tr v-for="(permission, index) in permissions" :key="index">
              <td>{{ permission.module }}</td>
              <td><el-checkbox v-model="permissionVAl.all[index]" /></td>
              <td><el-checkbox v-model="permissionVAl.create[index]" /></td>
              <td><el-checkbox v-model="permissionVAl.read[index]" /></td>
              <td><el-checkbox v-model="permissionVAl.update[index]" /></td>
              <td><el-checkbox v-model="permissionVAl.delete[index]" /></td>
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
import permissions from "../dummy/permissionModule.js";
const emit = defineEmits(["submitPermissions"]);

const permissionVAl = reactive({
  all: [],
  create: [],
  read: [],
  update: [],
  delete: [],
});

const submitPermissions = () => {
  emit("submitPermissions", permissionVAl);
};
</script>
