<template>
  <el-dialog
    v-model="centerDialogVisible"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    :title="title"
    width="500"
    align-center
    @close="hide"
  >
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
import { defineProps, ref, watch, defineEmits } from "vue";

const centerDialogVisible = ref(false);
const emit = defineEmits(["close"]);

const props = defineProps({
  show: {
    type: Boolean,
  },
  title: {
    type: String,
    required: true,
  },
});
watch(
  () => props.show,
  (newValue, oldValue) => {
    centerDialogVisible.value = newValue;
  }
);

function hide() {
  centerDialogVisible.value = false;
  emit("close", false);
}
</script>
