import { defineStore } from "pinia";
import { loadCfdi } from "@/services/cfdiService";

export const useCfdi = defineStore("cfdi", {
  state: () => ({
    CfdiList: [],
    filteredCfdiList: [],
    Cfdi: {},
  }),
  getters: {
    getCfdi(state) {
      return state.filteredCfdiList.length > 0 ? state.filteredCfdiList : state.CfdiList;
    },
  },
  actions: {
    async loadCfdi() {
      const data = await loadCfdi();
      if (data) {
        this.CfdiList = data.flatMap(item => item.cfdi);
        this.filteredCfdiList = this.CfdiList;
      }
    },
    filterCfdi(cfdiClave) {
      if (cfdiClave) {
        this.filteredCfdiList = this.CfdiList.filter(cfdi => cfdi.ClaveUsoCFDI.toUpperCase().includes(cfdiClave));
      } else {
        this.filteredCfdiList = this.CfdiList;
      }
    },
  },
});
