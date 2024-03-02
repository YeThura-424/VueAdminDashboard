<template>
  <div class="main-section">
    <div class="header-section">
      <PageHeader />
    </div>
    <div class="content-section mt-6">
      <div class="table-container">
        <div class="table-search-action flex justify-between">
          <div class="actions">
            <el-button type="primary" :icon="CirclePlus">Add User</el-button>
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
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
          <el-table-column>
            <template #header> Actions </template>
            <template #default="scope">
              <el-button
                size="small"
                @click="handleEdit(scope.$index, scope.row)"
                >Edit</el-button
              >
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="table-peginator pt-6 flex justify-end">
          <el-pagination background layout="prev, pager, next" :total="50" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "../../components/PageHeader.vue";
import { Search, CirclePlus } from "@element-plus/icons-vue";
import { ref, computed } from "vue";

const userSearchList = ref();
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !userSearchList.value ||
      data.name.toLowerCase().includes(userSearchList.value.toLowerCase())
  )
);
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Jerry",
    address: "No. 189, Stren St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Fin",
    address: "No. 189, Wooden St, New York",
  },
  {
    date: "2016-05-01",
    name: "Ryan",
    address: "No. 189, Grove St, Califonia",
  },
];

const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};
</script>
