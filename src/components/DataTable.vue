<template>
  <div class="table-container">
    <div class="table-search-action flex justify-between items-center">
      <div class="actions">
        <el-button type="primary" :icon="CirclePlus" @click="addUser"
          >Add User</el-button
        >
      </div>
      <div class="total-entries">
        <span class="pr-2">Show</span>
        <el-select
          v-model="tableEntriesCount"
          placeholder="Select"
          style="width: 60px"
        >
          <el-option value="10" selected label="10" />
          <el-option value="20" label="20" />
          <el-option value="30" label="30" />
        </el-select>
        <span class="pl-2">Entries</span>
      </div>
      <div class="search">
        <el-input
          v-model="userSearchList"
          style="width: 240px"
          size="large"
          placeholder="Please Input"
          :suffix-icon="Search"
        />
      </div>
    </div>
    <el-table
      :data="filterTableData"
      style="width: 100%"
      stripe
      table-layout="fixed"
    >
      <el-table-column
        v-for="header in props.tableFormat.headers"
        :prop="header.tableValue"
        :label="header.label"
      />
      <el-table-column v-if="props.tableFormat.action.length > 0">
        <template #header> Actions </template>
        <template #default="scope">
          <el-button
            v-for="buttonAction in props.tableFormat.action"
            size="small"
            :type="buttonAction.type"
            >{{ buttonAction.name }}</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="tableFooter flex justify-between items-center py-4">
      <div class="total-table-data">
        Showing 1 to {{ props.tableData.length }} of 5 entries
      </div>

      <div class="table-peginator">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="10"
          :pager-count="5"
          :total="props.tableData.length"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search, CirclePlus } from "@element-plus/icons-vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
// import Users from "../dummy/user.js";

const router = useRouter();
const userSearchList = ref();
const tableEntriesCount = ref(10);

const props = defineProps({
  tableData: {
    type: Object,
    required: true,
  },
  tableFormat: {
    type: Object,
    required: true,
  },
});
// table data search function
const filterTableData = computed(() =>
  props.tableData.filter((data) => {
    // convert user typed value to lower case
    const searchValue = userSearchList.value
      ? userSearchList.value.toLowerCase()
      : "";
    // check if any column in the data matchs user typed value
    return Object.values(data).some((value) =>
      value.toLowerCase().includes(searchValue)
    );
  })
);

const addUser = () => {
  router.push({
    name: "UserAdd",
  });
};

const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};
</script>
