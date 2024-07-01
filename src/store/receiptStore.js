import { defineStore } from 'pinia';
import * as receiptServices from '@/services/receiptServices';

export const receiptStore = defineStore('receipt', {
    state: () => ({
        ListadoComprobantes: [],
    }),
    getters: {
        getComprobantes(state) {
            return state.ListadoComprobantes;
        },
    },
    actions: {
        async cargarComprobantes() {
            const data = await receiptServices.cargarComprobantes();
            if (data) {
                this.ListadoComprobantes = data;
            }
        }
    },
});