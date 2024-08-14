import { defineStore } from "pinia";
import { loadZipCode, searchZipCode } from "@/services/zipCodeService";

export const useZipCode = defineStore("CP", {
  state: () => ({
    ZipCodeList: [],
    ZipCode: {},
  }),
  getters: {
    getZipCodes(state) {
      return state.ZipCodeList;
    },
  },
  actions: {
    async loadZipCode() {
      const data = await loadZipCode();
      if (data) {
        this.ZipCodeList = data;
      }
    },
    async searchZipCode(cp) {
      const data = await searchZipCode(cp);
      if (data) {
        return data;
      }
      return false;
    },
  },
});
