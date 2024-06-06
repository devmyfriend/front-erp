import { defineStore } from "pinia";
import { buscarProductos, cargarProductos, cargarTiposProducto} from "@/services/productosServices";

export const useProductos = defineStore('Productos', {
    state: () => ({
        ListadoProductos: [],
        ListadoTiposProducto: [],

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
    },
    actions: {
        async cargarProductos() {
            const data = await cargarProductos();
            if (data) {
                this.ListadoProductos = data;
            }
        },
        async cargarTiposProducto() {
            const data = await cargarTiposProducto();
            if (data) {
                this.ListadoTiposProducto = data;
            }
        },
        async buscarProductos(palabra, tipo) {
            const data = await buscarProductos(palabra, tipo);
            if (data) {
                this.ListadoProductos = data;
                return true;
            }
        },
    }
});

