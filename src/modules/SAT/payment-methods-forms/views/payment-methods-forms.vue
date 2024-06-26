<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';

import tablePaymentMethods from '@/modules/SAT/payment-methods-forms/components/tablePaymentMethods.vue';
import tablePaymentForms from '@/modules/SAT/payment-methods-forms/components/tablePaymentForms.vue';

import paymentMethodsFinder from '@/modules/SAT/payment-methods-forms/components/paymentMethodsFinder.vue';
import paymentFormsFinder from '@/modules/SAT/payment-methods-forms/components/paymentFormsFinder.vue';

import { useLayout } from '@/modules/SAT/coins/composables/useLayout.js';
const { setTitle, getTitle } = useLayout();

import { paymentStore } from '@/store/paymentStore';
const store = paymentStore();
const ListadoMetodosPago = ref([]);
const ListadoFormasPago = ref([]);

onBeforeMount(() => {
    setTitle('Formas y métodos de pago');
    cargarDatos();
    console.log('El titulo es: ', getTitle());  
});

const cargarDatos = () => {
    store.cargarMetodosFormasPago().then(() => {
        ListadoMetodosPago.value = store.getMetodosPago;
        ListadoFormasPago.value = store.getFormasPago;
        console.log('Cabeceras Metodos: ' + Object.keys(ListadoMetodosPago.value[0]) + '\nCabeceras Formas: ' + Object.keys(ListadoFormasPago.value[0]));
    });
};

const handleBusqueda = (texto) => {
    if (texto) {
        store.buscarMonedas(texto).then(() => {
            ListadoMonedas.value = store.getMonedas;
        });
    } else {
        console.log('Sin texto');
        cargarDatos();
    }
};

</script>

<template>
    <div class="w-full h-full p-4 flex justify-center items-center">
        <div class="w-full h-full flex flex-col">
            <div class="flex flex-row items-center justify-between w-full pr-2">
                <div class="w-96">
                    <titleH2> Listado de Formas de pago </titleH2>
                </div>
<!--                 <div>
                    <paymentFormsFinder @busqueda="handleBusqueda"/>
                </div> -->
            </div>
            <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base mb-6 max-h-[50vh]">
                <tablePaymentForms :ListadoFormasPago="ListadoFormasPago"/>
            </div>

            <div class="flex flex-row items-center justify-between w-full pr-2">
                <div class="w-96">
                    <titleH2> Listado de Métodos de pago </titleH2>
                </div>
<!--                 <div>
                    <paymentMethodsFinder @busqueda="handleBusqueda"/>
                </div> -->
            </div>
            <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base mb-6 max-h-max     min-h-max">
                <tablePaymentMethods :ListadoMetodosPago="ListadoMetodosPago"/>
            </div>

        </div>
    </div>
</template>

<style scoped></style>