import { defineStore } from "pinia";
import { loadZipCode, findZipCode } from "@/services/zipCode/zipCodeService";

export const useZipCode = defineStore("CP", {
  state: () => ({
    zipCodesCollection: [],
    ZipCode: {},
  }),
  getters: {
    getZipCodes(state) {
      return state.zipCodesCollection;
    },
  },
  actions: {
    async loadZipCode() {
      const data = await loadZipCode();
      if (data) {
        this.zipCodesCollection = data;
      }
    },
    async findZipCode(cp) {
      const data = await findZipCode(cp);
      if (data) {
        return data;
      }
      return false;
    },
  },
});
