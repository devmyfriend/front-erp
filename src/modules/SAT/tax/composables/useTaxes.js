import { ref } from 'vue';
import { taxStore } from '@/store/taxStore';
const store = taxStore();

const ListadoImpuestos = ref([]);

const cargarImpuestos = async () => {
    await store.cargarImpuestos();
    ListadoImpuestos.value = store.getImpuestos;
}

export function useTaxes() {
    return {
        ListadoImpuestos,
        cargarImpuestos,
    };
}