<template>
  <el-upload
    action="#"
    list-type="picture-card"
    :auto-upload="false"
    :on-change="handleChange"
    :on-remove="handleRemove"
    multiple
  >
    <el-icon><Plus /></el-icon>

    <template #file="{ file }">
      <div>
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <el-icon><zoom-in /></el-icon>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <el-icon><Download /></el-icon>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <el-icon><Delete /></el-icon>
          </span>
        </span>
      </div>
    </template>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Delete, Download, Plus, ZoomIn } from "@element-plus/icons-vue";
import type { UploadProps, UploadFile } from "element-plus";

// import type { UploadFile } from "element-plus";

const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);
// const imageArray: any = ref([]);

const emit = defineEmits(["upload-photo"]);

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!;
  dialogVisible.value = true;
};

const handleDownload = (file: UploadFile) => {
  console.log(file);
};
const handleRemove = (file: UploadFile) => {
  console.log(file);
};
const handleChange: UploadProps["onChange"] = (files) => {
  const imgArr: any = [];
  imgArr.push = files;
  emit("upload-photo", imgArr);
};
</script>
