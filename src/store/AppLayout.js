import { defineStore } from "pinia";

export const useAppLayoutStore = defineStore("AppLayout", {
  state: () => ({
    isCollapse: false,
    // isDark: false,
  }),
  getters: {},
  actions: {
    toggleSidebar(collapse) {
      this.isCollapse = collapse;
    },
    // toggleTheme(theme) {
    //   this.isDark = theme;
    // },
  },
});
