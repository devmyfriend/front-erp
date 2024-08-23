<script setup>
import { onMounted } from 'vue';
import { usePaymentMethodsForms } from '@/modules/SAT/payment-methods-forms/composables/usePaymentMethodsForms';
import { useTheme } from '@/commons/composables/theme';
const { paymentMethodsCollection, loadMethodsFormsPayments } = usePaymentMethodsForms();
const { theme } = useTheme();

onMounted(() => {
    loadMethodsFormsPayments();
});
</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th :class="`bg-${theme}-headers`">Clave</th>
                <th :class="`bg-${theme}-headers`">Nombre</th>
                <th :class="`bg-${theme}-headers`">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-primaryFontColor" v-for="(metodo, index) in paymentMethodsCollection" :key="index" :class="[
                metodo.Activo === 1 ? `text-${theme}-text bg-white` : '',
                metodo.Activo === 0 ? `text-${theme}-subtext bg-${theme}-disabled` : ''
            ]">
                <td class="general-cell text-center">
                    {{ metodo.ClaveMetodoPago }}
                </td>
                <td class="general-cell border-l-primaryTableWidth text-start">
                    {{ metodo.Descripcion }}
                </td>
                <td class="general-cell border-l-primaryTableWidth text-center">
                    {{ metodo.Activo ? 'Activo' : 'Inactivo' }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>