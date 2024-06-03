import { defineStore } from "pinia";
import { cargarProductos, cargarTiposProducto} from "@/services/productosServices";

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
        /* cargarProductos cargarTiposProducto */
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
    }
});

