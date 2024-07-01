import { defineStore } from 'pinia';
import * as countryServices from '@/services/countryServices';

export const countryStore = defineStore('country', {
    state: () => ({
        ListadoPaises: [],
    }),
    getters: {
        getPaises(state) {
            return state.ListadoPaises;
        },
    },
    actions: {
        async cargarPaises() {
            const data = await countryServices.cargarPaises();
            if (data) {
                this.ListadoPaises = data;
            }
        }
    },
});