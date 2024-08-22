import { defineStore } from "pinia";
import { getBusinessEntityList } from "@/services/businessEntity/businessentityservice";

export const useBusinessEntity = defineStore("businessentity", {
  state: () => ({
    ListadoEmpresa: [],
  }),
  getters: {
    getListaEmpresa(state) {
      return state.ListadoEmpresa;
    },
  },
  actions: {
    async loadListaEmpresas() {
      try {
        const { data } = await getBusinessEntityList();
        this.ListadoEmpresa = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
