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
import { onMounted, ref, watch, computed } from "vue";

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
const emits = defineEmits(["update:dialogVisible"]);
// const centerDialogVisible = ref(dialogVisible);
const centerDialogVisible = computed({
  get: () => dialogVisible,
  set: (newValue) => {
    console.log(newValue);
    emits("update:dialogVisible", newValue);
  },
});
// Watch changes to dialogVisible prop and update local state
onMounted(() => {
  console.log(dialogVisible, centerDialogVisible.value);
});
// watch(
//   () => dialogVisible,
//   (newValue) => {
//     alert(newValue);
//     centerDialogVisible.value = newValue;
//   }
// );
// Emit an event when local state changes to synchronize with parent component
// const handleUpdateVisible = (newValue: any) => {
//   emits("update:dialogVisible", newValue);
// };
</script>
