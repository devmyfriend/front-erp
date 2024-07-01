import { defineStore } from "pinia";
import { loadRegimen, createRegimen as createRegimenService, deleteRegimen as deleteRegimenService, updateRegimen as updateRegimenService } from "@/services/regimenCfdiService";

export const useRegimen = defineStore("regimen", {
  state: () => ({
    RegimenList: [],
    filteredRegimenList: [],
  }),
  getters: {
    getRegimen(state) {
      return state.filteredRegimenList.length > 0 ? state.filteredRegimenList : state.RegimenList;
    },
  },
  actions: {
    async loadRegimen() {
      const data = await loadRegimen();
      if (data) {
        this.RegimenList = data.map(item => item.regimen);
        this.filteredRegimenList = this.RegimenList;
      }
    },
    async createRegimen(regimen) {
      try {
        const response = await createRegimenService(regimen);
        if (response.success) {
          this.RegimenList.push(response);
          this.filteredRegimenList = this.RegimenList;
        } else {
          throw new Error("Error en la respuesta del servidor.");
        }
      } catch (error) {
        console.error("Error al crear el régimen:", error);
        throw new Error("Error al crear el régimen");
      }
    },
    async deleteRegimen(claveRegimenFiscal) {
      try {
        await deleteRegimenService(claveRegimenFiscal);
        const regimenIndex = this.RegimenList.findIndex(r => r.ClaveRegimenFiscal === claveRegimenFiscal);
        if (regimenIndex !== -1) {
          this.RegimenList[regimenIndex].Activo = false;
          this.filteredRegimenList = this.RegimenList;
        }
      } catch (error) {
        console.error("Error al eliminar el régimen:", error);
        throw new Error("Error al eliminar el régimen");
      }
    },
    async updateRegimen(updatedRegimen) {
      try {
        await updateRegimenService(updatedRegimen);
        const regimenIndex = this.RegimenList.findIndex(r => r.ClaveRegimenFiscal === updatedRegimen.ClaveRegimenFiscal);
        if (regimenIndex !== -1) {
          this.RegimenList[regimenIndex] = { ...updatedRegimen };
          this.filteredRegimenList = this.RegimenList;
        }
      } catch (error) {
        console.error("Error al actualizar el régimen:", error);
        throw new Error("Error al actualizar el régimen");
      }
    },
    filterRegimen(regimenClave) {
      if (regimenClave) {
        this.filteredRegimenList = this.RegimenList.filter((regimen) =>
          regimen.ClaveRegimenFiscal && regimen.ClaveRegimenFiscal.toUpperCase().includes(regimenClave.toUpperCase())
        );
      } else {
        this.filteredRegimenList = this.RegimenList;
      }
    },
  },
});
