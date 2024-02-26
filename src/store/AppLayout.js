import { defineStore } from "pinia";

export const useAppLayoutStore = defineStore("AppLayout", {
  state: () => ({
    isCollapse: false,
  }),
  getters: {},
  actions: {
    toggleSidebar(collapse) {
      this.isCollapse = collapse;
    },
  },
});
