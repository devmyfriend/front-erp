import { defineStore } from 'pinia';
import * as taxServices from '@/services/taxServices';

export const taxStore = defineStore('tax', {
    state: () => ({
        ListadoImpuestos: [],
    }),
    getters: {
        getImpuestos(state) {
            return state.ListadoImpuestos;
        },
    },
    actions: {
        async cargarImpuestos() {
            const data = await taxServices.cargarImpuestos();
            if (data) {
                this.ListadoImpuestos = data;
            }
        }
    },
});