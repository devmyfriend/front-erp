import { ref } from 'vue';
import { coinsStore } from '@/store/coinsStore';
const store = coinsStore();

const ListadoMonedas = ref([]);

const cargarMonedas = async () => {
    await store.cargarMonedas();
    ListadoMonedas.value = store.getMonedas;
};
const buscarMonedas = async (texto) => {
    await store.buscarMonedas(texto);
    ListadoMonedas.value = store.getMonedas;
};

export function useCoins() {
    return {
        ListadoMonedas,
        cargarMonedas,
        buscarMonedas,
    };
}