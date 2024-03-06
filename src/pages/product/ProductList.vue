<template>
  <div class="main-section">
    <div class="header-section">
      <PageHeader :breadcrumbs="productListBreadcrumb" title="Product List" />
    </div>
    <div class="content-section mt-6">
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
        <div class="tableFooter flex justify-between items-center py-4">
          <div class="total-table-data">Showing 1 to 5 of 5 entries</div>

          <div class="table-peginator">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="tableData.length"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "../../components/PageHeader.vue";
import { Search, CirclePlus } from "@element-plus/icons-vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const userSearchList = ref();
const tableEntriesCount = ref(10);
// table data search function
const filterTableData = computed(() =>
  tableData.filter((data) => {
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
const productListBreadcrumb = [
  {
    name: "Home",
    routeName: "Dashboard",
  },
  {
    name: "Product-List",
    routeName: "",
  },
];
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
