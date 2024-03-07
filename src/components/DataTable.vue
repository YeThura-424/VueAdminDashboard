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
        <el-select v-model="pageSize" placeholder="Select" style="width: 60px">
          <el-option value="5" label="5" />
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
      :data="currentPageData"
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
        Showing {{ startIndex }} to {{ endIndex }} of
        {{ props.tableData.length }} entries
      </div>

      <div class="table-peginator">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="pageSize"
          v-model:current-page="currentPage"
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
const currentPage = ref(1);
const pageSize = ref(10);

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

// Compute start and end index for showing data
const startIndex = computed(() => (currentPage.value - 1) * pageSize.value + 1);
const endIndex = computed(() =>
  Math.min(currentPage.value * pageSize.value, props.tableData.length)
);
const currentPageData = computed(() => {
  // Filter the table data based on the search value
  const filteredData = props.tableData.filter((data) => {
    // Convert user typed value to lower case
    const searchValue = userSearchList.value
      ? userSearchList.value.toLowerCase()
      : "";
    // Check if any column in the data matches the user typed value
    return Object.values(data).some((value) =>
      value.toLowerCase().includes(searchValue)
    );
  });

  // Calculate the start and end index based on the current page and page size
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;

  // Return the sliced data based on pagination
  return filteredData.slice(start, end);
});

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
