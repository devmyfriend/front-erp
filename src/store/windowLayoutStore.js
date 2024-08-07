import { defineStore } from "pinia";
import * as productServices from "@/services/productsServices";

export const windowLayoutStore = defineStore("windowLayout", {
  state: () => ({
    btActivo: 1,
  }),
  getters: {
    getBtActivo(state) {
      return state.btActivo;
    },
  },
  actions: {
    async setBtActivo(bt) {
      this.btActivo = bt;
    },
  },
});
