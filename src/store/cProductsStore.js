import { defineStore } from "pinia";
import * as ProductKeyServices from '@/services/productKeyServices';

export const cProductosStore = defineStore('cProductos', {
    state: () => ({
        listadoClavesProductos: [],
   }),
    getters: {
        getClavesProductos(state) {
            return state.listadoClavesProductos;
        }
    },
    actions: {
        async cargarClavesProductos() {
            const data = await ProductKeyServices.cargarClavesProductos();
            if (data) {
                this.listadoClavesProductos = data;
            }
        },
    }
});