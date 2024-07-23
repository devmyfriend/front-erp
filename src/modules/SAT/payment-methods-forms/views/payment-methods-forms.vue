<script setup>
import { onBeforeMount, ref } from 'vue';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import tablePaymentMethods from '@/modules/SAT/payment-methods-forms/components/tablePaymentMethods.vue';
import tablePaymentForms from '@/modules/SAT/payment-methods-forms/components/tablePaymentForms.vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import { usePaymentMethodsForms } from '@/modules/SAT/payment-methods-forms/composables/usePaymentMethodsForms.js';
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
const { ListadoFormasPago, ListadoMetodosPago, cargarMetodosFormasPago } = usePaymentMethodsForms();
const { setTitle } = useLayout();

onBeforeMount(() => {
    setTitle('Formas y métodos de pago');
    cargarDatos();
});

const cargarDatos = async () => {
    await cargarMetodosFormasPago();
};

</script>

<template>
    <div class="w-full h-full p-4 flex justify-center items-center">
        <div class="w-full h-full flex flex-col">
            <titleH2> Listado de Formas de pago </titleH2>
            <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl mb-6 max-h-[50vh]">
                <tablePaymentForms :ListadoFormasPago="ListadoFormasPago"/>
            </div>

            <titleH2> Listado de Métodos de pago </titleH2>
            <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl mb-6 max-h-max min-h-max">
                <tablePaymentMethods :ListadoMetodosPago="ListadoMetodosPago"/>
            </div>
        </div>
    </div>
</template>

<style scoped></style>