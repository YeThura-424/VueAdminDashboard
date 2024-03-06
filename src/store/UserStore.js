import { defineStore } from "pinia";

export const useUserStoreStore = defineStore("UserStore", {
  state: () => ({
    users: [],
  }),
  getters: {},
  actions: {},
});
