import { defineStore } from "pinia";
import * as productServices from "@/services/product/productsServices";
import * as productLinesServices from "@/services/product/lineProductsServices";
import { validateResponse } from "@/utils/validateResponse";

export const useProductos = defineStore("Productos", {
  state: () => ({
    productsCollection: [],
    productsTypeCollection: [],
    productsKeysCollection: [],
    unitKeysCollection: [],
    productsLineCollection: [],
    Producto: {},
  }),
  getters: {
    getProducts(state) {
      return state.productsCollection;
    },
    getProductFinded(state) {
      return state.Producto;
    },
    getTypeProducts(state) {
      return state.productsTypeCollection;
    },
    getProductsKeys(state) {
      return state.productsKeysCollection;
    },
    getUnitKeys(state) {
      return state.unitKeysCollection;
    },
    getProductsLine(state) {
      return state.productsLineCollection;
    },
  },
  actions: {
    async loadProducts() {
      const response = await validateResponse(productServices.loadProducts());
      if (response.length === 0) {
        this.productsCollection = [];
        return false;
      } else {
        this.productsCollection = response.response;
        return true;
      }
    },
    async loadTypeProducts() {
      const response = await validateResponse(productServices.loadTypeProducts());
      if (response.length === 0) {
        this.productsTypeCollection = [];
        return false;
      } else {
        this.productsTypeCollection = response.response;
        return true;
      }
    },
    async findProducts(palabra, tipo) {
      const response = await validateResponse(productServices.findProducts(palabra, tipo));
      if (response.length === 0) {
        this.productsCollection = [];
        return false;
      } else {
        this.productsCollection = response.response;
        return true;
      }
    },
    async deleteProduct(payload) {
      const response = await validateResponse(productServices.deleteProduct(payload));
      if (response.success) {
        this.loadProducts();
        return true;
      } else {
        return false;
      }
    },
    async getProduct(id) {
      const response = await validateResponse(productServices.getProduct(id));
      if (response.length === 0) {
        this.Producto = {};
        return false;
      } else {
        this.Producto = response.response;
        return true;
      }
    },
    async loadUnitKeys(pagina) {
      if (!pagina) {
        pagina = 1;
      }

      const response = await validateResponse(productServices.loadUnitKeys(pagina));
      
      if (response.length === 0) {
        this.unitKeysCollection = [];
        return false;
      } else {
        this.unitKeysCollection = response.response;
        return true;
      }
    },
    async loadProductsLine() {
      const response = await validateResponse(productLinesServices.loadLines());
      if (response.length === 0) {
        this.productsLineCollection = [];
        return false;
      } else {
        this.productsLineCollection = response.response;
        return true;
      }
    },
    async loadProductsKeys(pagina) {
      const response = await validateResponse(productServices.loadProductsKeys(pagina));
      if (response.length === 0) {
        this.productsKeysCollection = [];
        return false;
      } else {
        this.productsKeysCollection = response.response;
        return true;
      }
    },
    async findProductsKeys(palabra, pagina) {
      const response = await validateResponse(productServices.findProductsKeys(palabra, pagina));
      if (response.length === 0) {
        this.productsKeysCollection = [];
        return false;
      } else {
        this.productsKeysCollection = response.response;
        return true;
      }
    },
    async findUnitKeys(palabra, pagina) {
      const response = await validateResponse(productServices.findUnitKeys(palabra, pagina));
      if (response.length === 0) {
        this.unitKeysCollection = [];
        return false;
      } else {
        this.unitKeysCollection = response.response;
        return true;
      }
    },
  },
});
