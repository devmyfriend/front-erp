import { defineStore } from 'pinia';
import * as coinsServices from '@/services/coinsServices';

export const coinsStore = defineStore('Coins', {
    state: () => ({
        ListadoMonedas: [],
    }),
    getters: {
        getMonedas(state) {
            return state.ListadoMonedas;
        },
    },
    actions: {
        async cargarMonedas() {
            const data = await coinsServices.cargarMonedas();
            if (data) {
                this.ListadoMonedas = data;
            }
        },
        async buscarMonedas(moneda) {
            const data = await coinsServices.buscarMonedas(moneda);
            if (data) {
                if (data.length > 0){
                    this.ListadoMonedas = data;
                    return true;
                }else{
                    return false;
                }
            }
        },

        async crearMoneda(moneda) {
            const data = await coinsServices.crearMoneda(moneda);
            if (data) {
                this.cargarMonedas();
                return true;
            }else{
                return false;
            }
        },
        async actualizarMoneda(moneda) {
            const data = await coinsServices.actualizarMoneda(moneda);
            if (data) {
                this.cargarMonedas();
                return true;
            }else{
                return false;
            }
        },
        async eliminarMoneda(moneda) {
            const data = await coinsServices.eliminarMoneda(moneda);
            if (data) {
                this.cargarMonedas();
                return true;
            }else{
                return false;
            }
        },
    },
});