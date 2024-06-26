import { defineStore } from "pinia";
import * as productServices from "@/services/productsServices";

export const useProductos = defineStore('Productos', {
    state: () => ({
        ListadoProductos: [],
        ListadoTiposProducto: [],
        ListadoClavesProductos: [],
        Producto: {},

    }),
    getters: {
        getProductos(state) {
            return state.ListadoProductos;
        },
        getProducto(state) {
            return state.Producto;
        },
        getTiposProducto(state) {
            return state.ListadoTiposProducto;
        },
        getClavesProductos(state) {
            return state.ListadoClavesProductos;
        }
    },
    actions: {
        async cargarProductos() {
            const data = await productServices.cargarProductos();
            if (data) {
                this.ListadoProductos = data;
            }
        },
        async cargarTiposProducto() {
            const data = await productServices.cargarTiposProducto();
            if (data) {
                this.ListadoTiposProducto = data;
            }
        },
        async buscarProductos(palabra, tipo) {
            const data = await productServices.buscarProductos(palabra, tipo);
            if (data) {
                this.ListadoProductos = data;
                return true;
            }
        },
        async borrarProducto(payload) {
            const data = await productServices.borrarProducto(payload);
            if (data) {
                return true;
            }
        },
        async obtenerProducto(id) {
            const data = await productServices.obtenerProducto(id);
            if (data) {
                this.Producto = data;
                return true;
            }
        },

        async cargarClavesUnidades(pagina) {
            const data = await productServices.cargarClavesUnidades(pagina);
            if (data) {
                return data;
            }
        },
        async cargarClavesProductos(pagina) {
            const data = await productServices.cargarClavesProductos(pagina);
            if (data) {
                this.ListadoClavesProductos = data;
                return data;
            }
        },


        async buscarClavesProductos(palabra, pagina) {
            const data = await productServices.buscarClavesProductos(palabra, pagina);
            if (data) {
                return data;
            }
        },
        async buscarClavesUnidades(palabra, pagina) {
            const data = await productServices.buscarClavesUnidades(palabra, pagina);
            if (data) {
                return data;
            }
        },


    }
});

