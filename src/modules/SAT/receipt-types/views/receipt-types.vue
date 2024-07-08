<script setup>
import { onBeforeMount, ref } from 'vue';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import tableReceipt from '@/modules/SAT/receipt-types/components/tableReceipt.vue';
import { useLayout } from '@/commons/composables/useLayout.js';
const { setTitle } = useLayout();

import { receiptStore } from '@/store/receiptStore';

const store = receiptStore();
const ListadoComprobantes = ref([]);

onBeforeMount(() => {
    setTitle('Tipo de Comprobantes');
    cargarDatos();
});

const cargarDatos = () => {
    store.cargarComprobantes().then(() => {
        ListadoComprobantes.value = store.getComprobantes;
    });
};

</script>

<template>
    <div class="w-full h-full p-4 flex justify-center items-center">
        <div class="w-full h-full flex flex-col">
            <titleH2> Listado de Tipos de Comprobante </titleH2>
            <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
                <tableReceipt :ListadoComprobantes="ListadoComprobantes"/>
            </div>

        </div>
    </div>
</template>

<style scoped></style>