<template>
  <el-dialog v-model="centerDialogVisible" :close-on-press-escape="false" :close-on-click-modal="false" :title="title"
    :width="width" align-center @close="hide">
    <slot name="body"></slot>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="hide">Cancel</el-button>
        <el-button type="primary" @click="hide"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";

const centerDialogVisible = ref(false);
const emit = defineEmits(["dismiss"]);

const props = defineProps({
  show: {
    type: Boolean,
  },
  title: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: "500",
    required: false,
  },
});
watch(
  () => props.show,
  (newValue) => {
    centerDialogVisible.value = newValue;
  }
);

function hide() {
  centerDialogVisible.value = false;
  emit("dismiss", false);
}
</script>
