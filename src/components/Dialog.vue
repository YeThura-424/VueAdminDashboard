<template>
  <el-dialog
    v-model="centerDialogVisible"
    :title="title"
    width="500"
    align-center
  >
    <template #body> </template>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const { title, dialogVisible } = defineProps({
  title: {
    type: String,
    required: true,
  },
  dialogVisible: {
    type: Boolean,
    required: true,
  },
});

const centerDialogVisible = ref(dialogVisible);
</script>
