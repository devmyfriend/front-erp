import { defineStore } from "pinia";
import * as ProductKeyServices from "@/services/product/productKeyServices";
import { validateResponse } from "@/utils/validateResponse";

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
    async loadProductsKeys(palabra) {
      const response = await validateResponse(ProductKeyServices.loadProductsKeys(palabra));
      if (response.length === 0) {
        this.productsKeysCollection = [];
      }else{
        this.productsKeysCollection = response.response;
      }
    }
  },
});
