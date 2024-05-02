<template>
  <el-tabs type="border-card">
    <el-tab-pane label="General">
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
            <tr
              v-for="(permission, index) in permissions[0].general"
              :key="index"
            >
              <td>{{ permission.module }}</td>
              <td>
                <el-checkbox
                  v-model="permissionVAl.all[permission.model_value]"
                  @change="checkAllPermissions(permission.model_value)"
                />
              </td>
              <td>
                <el-checkbox
                  v-model="permissionVAl.create[permission.model_value]"
                />
              </td>
              <td>
                <el-checkbox
                  v-model="permissionVAl.read[permission.model_value]"
                />
              </td>
              <td>
                <el-checkbox
                  v-model="permissionVAl.update[permission.model_value]"
                />
              </td>
              <td>
                <el-checkbox
                  v-model="permissionVAl.delete[permission.model_value]"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Authentication">
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
            <tr
              v-for="(permission, index) in permissions[0].authentication"
              :key="index"
            >
              <td>{{ permission.module }}</td>
              <td>
                <el-checkbox
                  v-model="permissionVAl.all[permission.model_value]"
                  @change="checkAllPermissions(permission.model_value)"
                />
              </td>
              <td>
                <el-checkbox
                  v-model="permissionVAl.create[permission.model_value]"
                />
              </td>
              <td>
                <el-checkbox
                  v-model="permissionVAl.read[permission.model_value]"
                />
              </td>
              <td>
                <el-checkbox
                  v-model="permissionVAl.update[permission.model_value]"
                />
              </td>
              <td>
                <el-checkbox
                  v-model="permissionVAl.delete[permission.model_value]"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { reactive, watch } from "vue";
import permissions from "../dummy/permissionModule.js";

const emit = defineEmits(["submitPermissions"]);
console.log(permissions[0].general);
const permissionVAl = reactive({
  all: [],
  create: [],
  read: [],
  update: [],
  delete: [],
});
const checkAllPermissions = (module) => {
  // const permission = permissions[module];
  const isChecked = permissionVAl.all[module];
  permissionVAl.create[module] = isChecked;
  permissionVAl.read[module] = isChecked;
  permissionVAl.update[module] = isChecked;
  permissionVAl.delete[module] = isChecked;
};

emit("submitPermissions", permissionVAl);
</script>
