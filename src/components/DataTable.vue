<template>
  <div class="table-container">
    <div class="table-search-action flex justify-between items-center">
      <div class="actions" v-if="addAble">
        <el-button type="primary" :icon="CirclePlus" @click="addAction">{{
          title
        }}</el-button>
      </div>
      <div class="total-entries">
        <span class="pr-2">Show</span>
        <el-select v-model="pageSize" placeholder="Select" style="width: 60px">
          <!-- to get the value as number (:value) -->
          <el-option :value="5" label="5" />
          <el-option :value="10" label="10" />
          <el-option :value="20" label="20" />
          <el-option :value="30" label="30" />
        </el-select>
        <span class="pl-2">Entries</span>
      </div>
      <div class="search">
        <el-input
          v-model="userSearchList"
          style="width: 240px"
          placeholder="Please Input"
          :suffix-icon="Search"
        />
      </div>
    </div>
    <el-table
      :data="currentPageData"
      style="width: 100%"
      stripe
      table-layout="auto"
    >
      <el-table-column
        v-for="header in tableFormat.headers"
        :prop="header.tableValue"
        :label="header.label"
      />
      <el-table-column v-if="tableFormat.action.length > 0">
        <template #header> Actions </template>
        <template #default="scope">
          <el-button
            v-for="(buttonAction, index) in tableFormat.action"
            :key="index"
            size="small"
            :type="buttonAction.type"
            @click="handleAction(index, scope.row)"
            >{{ buttonAction.name }}</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="tableFooter flex justify-between items-center py-4">
      <div class="total-table-data">
        Showing {{ startIndex }} to {{ endIndex }} of
        {{ tableData.length }} entries
      </div>

      <div class="table-peginator">
        <el-pagination
          background
          v-model:page-size="pageSize"
          v-model:current-page="currentPage"
          layout="prev, pager, next"
          :pager-count="5"
          :total="tableData.length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    <!-- dialog -->
    <el-dialog
      v-model="centerDialogVisible"
      :title="title"
      width="500"
      align-center
    >
      <span>Open the dialog from the center from the screen</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { Search, CirclePlus } from "@element-plus/icons-vue";
import { ref, computed } from "vue";

const userSearchList = ref();
const currentPage = ref(1);
const pageSize = ref(10);
const centerDialogVisible = ref(false);
const { addAble, title, tableData, tableFormat, editAction, deleteAction } =
  defineProps({
    addAble: {
      type: Boolean,
      required: false,
      default: true,
    },
    title: {
      type: String,
      required: true,
    },
    tableData: {
      type: Object,
      required: true,
    },
    tableFormat: {
      type: Object,
      required: true,
    },
    editAction: {
      type: Function,
      default: () => {},
      required: true,
    },
    deleteAction: {
      type: Function,
      default: () => {},
    },
  });
const emits = defineEmits(["add-action"]);

// Compute start and end index for showing data
const startIndex = computed(() => (currentPage.value - 1) * pageSize.value + 1);
const endIndex = computed(() =>
  Math.min(currentPage.value * pageSize.value, tableData.length)
);
const currentPageData = computed(() => {
  // Filter the table data based on the search value
  const filteredData = tableData.filter((data: any) => {
    // Convert user typed value to lower case
    const searchValue = userSearchList.value
      ? userSearchList.value.toLowerCase()
      : "";
    // Check if any column in the data matches the user typed value
    return Object.values(data).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchValue);
      }
      // If value is not a string, return false
      return false;
    });
  });

  // Calculate the start and end index based on the current page and page size
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;

  // Return the sliced data based on pagination
  return filteredData.slice(start, end);
});
const handleSizeChange = (pageSize: number) => {
  pageSize = pageSize;
};
const handleCurrentChange = (currentPage: number) => {
  currentPage = currentPage;
};
const addAction = () => {
  centerDialogVisible.value = true;
  emits("add-action");
};

// edit or delete action as needed
const handleAction = (index: number, row: any) => {
  const action = tableFormat.action[index];
  if (action.action === "edit") {
    editAction(index, row);
  } else if (action.action === "delete") {
    deleteAction(index, row);
  }
};
</script>
