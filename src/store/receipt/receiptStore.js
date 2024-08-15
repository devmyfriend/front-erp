import { defineStore } from "pinia";
import * as receiptServices from "@/services/receipt/receiptServices";

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
      const data = await receiptServices.loadReceipts();
      if (data) {
        this.receiptsCollection = data;
      }
    },
    async createReceipt(comprobante) {
      const data = await receiptServices.createReceipt(comprobante);
      if (data) {
        this.loadReceipts();
        return true;
      } else {
        return false;
      }
    },
    async updateReceipt(comprobante) {
      const data = await receiptServices.updateReceipt(comprobante);
      if (data) {
        this.loadReceipts();
        return true;
      } else {
        return false;
      }
    },
    async deleteReceipt(comprobante) {
      const data = await receiptServices.deleteReceipt(comprobante);
      if (data) {
        this.loadReceipts();
        return true;
      } else {
        return false;
      }
    },
  },
});
