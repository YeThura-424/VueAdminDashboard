<template>
  <el-dialog v-model="dialogvisible" :title="title" width="500" align-center>
    <template #body> </template>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogvisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogvisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const dialogvisible = ref(false);

const { title } = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
