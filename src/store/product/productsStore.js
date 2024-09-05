import { defineStore } from "pinia";
import * as productServices from "@/services/product/productsServices";
import * as productFamilyServices from "@/services/product/productFamiliesServices";
import * as productSubFamilyServices from "@/services/product/productSubfamiliesServices";
import * as productLineServices from "@/services/product/productLinesServices";
import { validateResponse } from "@/utils/validateResponse";

export const useProductos = defineStore("Productos", {
  state: () => ({
    productsCollection: [],
    productsTypeCollection: [],

    productsKeysCollection: [],
    
    unitKeysCollection: [],
    unitKeysCollectionInfo: {},
    
    productFamiliesCollection: [],
    productSubfamiliesCollection: [],
    productLinesCollection: [],
    
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
    getUnitKeysInfo(state) {
      return state.unitKeysCollectionInfo;
    },
    
    getProductFamilies(state) {
      return state.productFamiliesCollection;
    },
    getProductSubfamilies(state) {
      return state.productSubfamiliesCollection;
    },
    getProductLines(state) {
      return state.productLinesCollection;
    },
  },
  actions: {
    async loadProducts(tipo) {
      if (!tipo) {
        tipo = "Todos";
      }

      const response = await validateResponse(productServices.loadProducts());
      if (response.length === 0) {
        this.productsCollection = [];
        return false;
      } else {
        if(tipo === "Todos") {
          this.productsCollection = response.response;
          return true;
        } else {
          this.productsCollection = response.response.filter((producto) => producto.NombreTipoProducto == tipo);
          if (this.productsCollection.length === 0) {
            return false;
          } else {
            return true;
          }
        }
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
        if (tipo === "Todos"){
          this.productsCollection = response.response;
          return true;
        } else {
          this.productsCollection = response.response.filter((producto) => producto.NombreTipoProducto == tipo);
          if (this.productsCollection.length === 0) {
            return false;
          } else {
            return true;
          }
        }
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
        this.unitKeysCollection = response.items;
        this.unitKeysCollectionInfo = response.info;
        return true;
      }
    },
    async findUnitKeysByName(name) {
      const response = await validateResponse(productServices.findUnitKeysByName(name));
      if (response.length === 0) {
        this.unitKeysCollection = [];
        return false;
      } else {
        this.unitKeysCollection = response.response;
        return true;
      }
    },
    async findUnitKeysByKey(key) {
      const response = await validateResponse(productServices.findUnitKeysByKey(key));
      if (response.length === 0) {
        this.unitKeysCollection = {};
        return false;
      } else {
        this.unitKeysCollection = response.response;
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

    /* Falta el resto del CRUD y buscadores */

    async loadProductFamilies() {
      const response = await validateResponse(productFamilyServices.loadProductFamilies());
      if (response.length === 0) {
        this.productFamiliesCollection = [];
        return false;
      } else {
        this.productFamiliesCollection = response.familias;       
        return true;
      }
    },
    async loadProductSubfamilies() {
      const response = await validateResponse(productSubFamilyServices.loadProductSubfamilies());
      if (response.length === 0) {
        this.productSubfamiliesCollection = [];
        return false;
      } else {
        this.productSubfamiliesCollection = response.subfamilias;
        return true;
      }
    },
    async loadProductLines() {
      const response = await validateResponse(productLineServices.loadProductLines());
      if (response.length === 0) {
        this.productLinesCollection = [];
        return false;
      } else {
        this.productLinesCollection = response.lineas;
        return true;
      }
    },

    async findProductFamiliesByName(name) {
      const response = await validateResponse(productFamilyServices.findProductFamiliesByName(name));
      if (response.length === 0) {
        this.productFamiliesCollection = [];
        return false;
      } else {
        this.productFamiliesCollection = response.familias;
        return true;
      }
    },
    async findProductSubfamiliesByName(name, familyId) {
      const response = await validateResponse(productSubFamilyServices.findProductSubfamiliesByName(name));
      if (response.length === 0) {
        this.productSubfamiliesCollection = [];
        return false;
      } else {
        this.productSubfamiliesCollection = response.subfamilias;
        if (familyId !== 0) {
          this.productSubfamiliesCollection = this.productSubfamiliesCollection.filter((subfamilia) => subfamilia.FamiliaId == familyId);
        }
        if (this.productSubfamiliesCollection.length === 0) {
          return false;
        } else {
          return true;
        }
      }
    },
    async findProductLinesByName(name, subfamilyId) {
      const response = await validateResponse(productLineServices.findProductLinesByName(name));
      if (response.length === 0) {
        this.productLinesCollection = [];
        return false;
      } else {
        this.productLinesCollection = response.lineas;
        if (subfamilyId !== 0) {
          this.productLinesCollection = this.productLinesCollection.filter((linea) => linea.SubFamiliaId == subfamilyId);
        }
        if (this.productLinesCollection.length === 0) {
          return false;
        } else {
          return true;
        }
      }
    },

    async findProductSubfamiliesByFamilyId(id) {
      if (id !== 0){
        const response = await validateResponse(productSubFamilyServices.findProductSubfamiliesByFamilyId(id));
        if (response.length === 0) {
          this.productSubfamiliesCollection = [];
          return false;
        } else {
          this.productSubfamiliesCollection = response.subfamilias;
          return true;
        }
      } else{
        await this.loadProductSubfamilies();
        return true;
      }
    },
    async findProductLinesBySubfamilyId(id){
      if (id !== 0){
        const response = await validateResponse(productLineServices.findProductLinesBySubfamilyId(id));
        if (response.length === 0) {
          this.productLinesCollection = [];
          return false;
        } else {
          this.productLinesCollection = response.lineas;
          return true;
        }
      } else{
        await this.loadProductLines();
        return true;
      }
    }
  },
});
