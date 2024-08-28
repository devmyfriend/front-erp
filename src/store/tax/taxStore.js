import { defineStore } from "pinia";
import * as taxServices from "@/services/tax/taxServices";
import { validateResponse } from "@/utils/validateResponse";

export const taxStore = defineStore("tax", {
  state: () => ({
    taxesCollection: [],
  }),
  getters: {
    getTaxes(state) {
      return state.taxesCollection;
    },
  },
  actions: {
    async loadTaxes() {
      const response = await validateResponse(taxServices.loadTaxes());
      if (response.length === 0) {
        this.taxesCollection = [];
        return false;
      } else {
        this.taxesCollection = response;
        return true;
      }
    },
    async createTaxes(impuesto) {
      const response = await validateResponse(taxServices.createTaxes(impuesto));
      if (response.length !== 0) {
        this.loadTaxes();
        return true;
      }else{
        return false;
      }
    },
    async updateTax(impuesto) {
      const response = await validateResponse(taxServices.updateTax(impuesto));
      if (response.length !== 0) {
        this.loadTaxes();
        return true;
      } else {
        return false;
      }
    },
    async deleteTax(impuesto) {
      const response = await validateResponse(taxServices.deleteTax(impuesto));
      if (response.length !== 0) {
        this.loadTaxes();
        return true;
      } else {
        return false;
      }
    },
  },
});
