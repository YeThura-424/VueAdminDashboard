<template>
  <div class="right flex justify-end items-center gap-10 px-5">
    <div class="search_input">
      <el-input
        v-model="header_search"
        class="w-50 m-2"
        placeholder="Type something"
        :prefix-icon="Search"
      />
    </div>
    <div class="theme-toggler">
      <el-button :icon="isDark ? Moon : Sunny" circle @click="toggleDark()" />
    </div>
    <div class="user_avatar">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          />
        </span>
        <template #dropdown>
          <el-dropdown-menu class="header-dropdown">
            <el-dropdown-item class="header-dropdown-item"
              >Profile</el-dropdown-item
            >
            <el-dropdown-item class="header-dropdown-item"
              >Setting</el-dropdown-item
            >
            <el-dropdown-item class="header-dropdown-item">
              <el-button type="danger" class="header-dropdown-button"
                >Logout</el-button
              >
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Search, Sunny, Moon } from "@element-plus/icons-vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "body",
  attribute: "color-scheme",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);

const header_search = ref("");
</script>
