import { ref } from 'vue';
import { coinsStore } from '@/store/coinsStore';
const store = coinsStore();

const coins = ref([]);

const cargarMonedas = async () => {
    store.cargarMonedas().then(() => {
        coins.value = store.getMonedas;
    });
};

const buscarMonedas = async (moneda) => {
    store.buscarMonedas(moneda).then(() => {
        coins.value = store.getMonedas;
    });
}


export function useCoins() {
    return {
        coins,
        cargarMonedas,
        buscarMonedas,
    };
}
