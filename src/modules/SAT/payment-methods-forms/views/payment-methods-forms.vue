<script setup>
import { onBeforeMount, ref } from 'vue';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';

import tablePaymentMethods from '@/modules/SAT/payment-methods-forms/components/tablePaymentMethods.vue';
import tablePaymentForms from '@/modules/SAT/payment-methods-forms/components/tablePaymentForms.vue';

import { useLayout } from '@/commons/composables/useLayout.js';
const { setTitle } = useLayout();

import { paymentStore } from '@/store/paymentStore';
const store = paymentStore();
const ListadoMetodosPago = ref([]);
const ListadoFormasPago = ref([]);

onBeforeMount(() => {
    setTitle('Formas y métodos de pago');
    cargarDatos();
});

const cargarDatos = () => {
    store.cargarMetodosFormasPago().then(() => {
        ListadoMetodosPago.value = store.getMetodosPago;
        ListadoFormasPago.value = store.getFormasPago;
    });
};

</script>

<template>
    <div class="w-full h-full p-4 flex justify-center items-center">
        <div class="w-full h-full flex flex-col">
            <titleH2> Listado de Formas de pago </titleH2>
            <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base mb-6 max-h-[50vh]">
                <tablePaymentForms :ListadoFormasPago="ListadoFormasPago"/>
            </div>

            <titleH2> Listado de Métodos de pago </titleH2>
            <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base mb-6 max-h-max     min-h-max">
                <tablePaymentMethods :ListadoMetodosPago="ListadoMetodosPago"/>
            </div>
        </div>
    </div>
</template>

<style scoped></style>