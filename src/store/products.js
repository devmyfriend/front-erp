import { defineStore } from "pinia";
import { borrarProducto, buscarClavesProductos, buscarClavesUnidades, buscarProductos, cargarClavesProductos, cargarClavesUnidades, cargarProductos, cargarTiposProducto, obtenerProducto} from "@/services/productsServices";

export const useProductos = defineStore('Productos', {
    state: () => ({
        ListadoProductos: [],
        ListadoTiposProducto: [],
        Producto: {},
        ListadoClavesProductos: [],

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
        async borrarProducto(payload) {
            const data = await borrarProducto(payload);
            if (data) {
                return true;
            }
        },
        async obtenerProducto(id) {
            const data = await obtenerProducto(id);
            if (data) {
                this.Producto = data;
                return true;
            }
        },

        async cargarClavesUnidades(pagina) {
            const data = await cargarClavesUnidades(pagina);
            if (data) {
                return data;
            }
        },
        async cargarClavesProductos(pagina) {
            const data = await cargarClavesProductos(pagina);
            if (data) {
                this.ListadoClavesProductos = data;
                return data;
            }
        },


        async buscarClavesProductos(palabra, pagina) {
            const data = await buscarClavesProductos(palabra, pagina);
            if (data) {
                return data;
            }
        },
        async buscarClavesUnidades(palabra, pagina) {
            const data = await buscarClavesUnidades(palabra, pagina);
            if (data) {
                return data;
            }
        },


    }
});

