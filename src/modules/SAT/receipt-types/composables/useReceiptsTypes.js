import { ref } from 'vue';
import { receiptStore } from '@/store/receiptStore';
const store = receiptStore();

const ListadoComprobantes = ref([]);

const cargarComprobantes = async () => {
    await store.cargarComprobantes();
    ListadoComprobantes.value = store.getComprobantes;
}
    

export function useReceiptsTypes() {
    return {
        ListadoComprobantes,
        cargarComprobantes,
    };
}