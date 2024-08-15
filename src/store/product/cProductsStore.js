import { defineStore } from "pinia";
import * as ProductKeyServices from "@/services/receipt/productKeyServices";

export const cProductsStore = defineStore("cProductos", {
  state: () => ({
    productsKeysCollection: [],
  }),
  getters: {
    getProductsKeys(state) {
      return state.productsKeysCollection;
    },
  },
  actions: {
    async loadProductsKeys() {
      const data = await ProductKeyServices.loadProductsKeys();
      if (data) {
        this.productsKeysCollection = data;
      }
    },
  },
});
