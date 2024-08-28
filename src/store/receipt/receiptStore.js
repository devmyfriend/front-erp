import { defineStore } from "pinia";
import * as receiptServices from "@/services/receipt/receiptServices";
import { validateResponse } from "@/utils/validateResponse";

export const receiptStore = defineStore("receipt", {
  state: () => ({
    receiptsCollection: [],
  }),
  getters: {
    getReceipts(state) {
      return state.receiptsCollection;
    },
  },
  actions: {
    async loadReceipts() {
      const response = await validateResponse(receiptServices.loadReceipts());
      if (response.length === 0) {
        this.receiptsCollection = [];
        return false;
      } else {
        this.receiptsCollection = response;
        return true;
      }
    },
    async createReceipt(comprobante) {
      const response = await validateResponse(receiptServices.createReceipt(comprobante));
      if (response.success) {
        this.loadReceipts();
        return true;
      } else {
        return false;
      }
    },
    async updateReceipt(comprobante) {
      const response = await validateResponse(receiptServices.updateReceipt(comprobante));
      if (response.success) {
        this.loadReceipts();
        return true;
      } else {
        return false;
      }
    },
    async deleteReceipt(comprobante) {
      const response = await validateResponse(receiptServices.deleteReceipt(comprobante));
      if (response.success) {
        this.loadReceipts();
        return true;
      } else {
        return false;
      }
    },
  },
});
