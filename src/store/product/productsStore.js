import { defineStore } from "pinia";
import * as productServices from "@/services/product/productsServices";
import * as productLinesServices from "@/services/product/lineProductsServices";
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
      const data = await productServices.loadProducts();
      if (data) {
        this.productsCollection = data;
      }
    },
    async loadTypeProducts() {
      const data = await productServices.loadTypeProducts();
      if (data) {
        this.productsTypeCollection = data;
      }
    },
    async findProducts(palabra, tipo) {
      const data = await productServices.findProducts(palabra, tipo);
      if (data) {
        this.productsCollection = data;
        return true;
      }
    },
    async deleteProduct(payload) {
      const data = await productServices.deleteProduct(payload);
      if (data) {
        return true;
      }
    },
    async getProduct(id) {
      const data = await productServices.getProduct(id);
      if (data) {
        this.Producto = data;
        return true;
      }
    },
    async loadUnitKeys(pagina) {
      if (!pagina) {
        pagina = 1;
      }
      const data = await productServices.loadUnitKeys(pagina);
      if (data) {
        this.unitKeysCollection = data;
        return true;
      }
    },
    async loadProductsLine() {
      const data = await productLinesServices.loadLines();
      if (data) {
        this.productsLineCollection = data;
        return true;
      }
    },
    async loadProductsKeys(pagina) {
      const data = await productServices.loadProductsKeys(pagina);
      if (data) {
        this.productsKeysCollection = data;
        return data;
      }
    },

    async findProductsKeys(palabra, pagina) {
      const data = await productServices.findProductsKeys(palabra, pagina);
      if (data) {
        return data;
      }
    },
    async findUnitKeys(palabra, pagina) {
      const data = await productServices.findUnitKeys(palabra, pagina);
      if (data) {
        return data;
      }
    },
  },
});
