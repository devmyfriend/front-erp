import { defineStore } from "pinia";
import * as taxServices from "@/services/tax/taxServices";

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
      const data = await taxServices.loadTaxes();
      if (data) {
        this.taxesCollection = data;
      }
    },
    async createTaxes(impuesto) {
      const data = await taxServices.createTaxes(impuesto);
      if (data) {
        this.loadTaxes();
        return true;
      } else {
        return false;
      }
    },
    async updateTax(impuesto) {
      const data = await taxServices.updateTax(impuesto);
      if (data) {
        this.loadTaxes();
        return true;
      } else {
        return false;
      }
    },
    async deleteTax(impuesto) {
      const data = await taxServices.deleteTax(impuesto);
      if (data) {
        this.loadTaxes();
        return true;
      } else {
        return false;
      }
    },
  },
});
