import { defineStore } from "pinia";
import { loadZipCode, findZipCode } from "@/services/zipCode/zipCodeService";
import { validateResponse } from "@/utils/validateResponse";
import Swal from "sweetalert2";

export const zipCodeStore = defineStore("CP", {
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
      const response = await validateResponse(loadZipCode());
      if (response.length === 0) {
        this.zipCodesCollection = [];
        return false
      } else {
        this.zipCodesCollection = response;
        return true
      }
    },
    async findZipCode(cp) {
      return validateResponse(findZipCode(cp));
    },
  },
});
