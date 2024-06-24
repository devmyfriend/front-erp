import { defineStore } from "pinia";
import { cargarClavesProductos } from '@/services/clavesProductosServices'

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
            const data = await cargarClavesProductos();
            if (data) {
                this.listadoClavesProductos = data;
            }
        },
    }
});