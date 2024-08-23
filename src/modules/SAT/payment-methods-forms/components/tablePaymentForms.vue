<script setup>
import { onMounted } from 'vue';
import { usePaymentMethodsForms } from '@/modules/SAT/payment-methods-forms/composables/usePaymentMethodsForms';
import { useTheme } from '@/commons/composables/theme';
const { paymentFormsCollection, loadMethodsFormsPayments } = usePaymentMethodsForms();
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
                <th :class="`bg-${theme}-headers`">Bancarizado</th>
                <th :class="`bg-${theme}-headers`">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-primaryFontColor" v-for="(forma, index) in paymentFormsCollection" :key="index" :class="[
                forma.Activo === 1 ? `text-${theme}-text bg-white` : '',
                forma.Activo === 0 ? `text-${theme}-subtext bg-${theme}-disabled` : ''
            ]">
                <td class="general-cell text-center">
                    {{ forma.ClaveFormaPago }}
                </td>
                <td class="general-cell border-l-primaryTableWidth text-start">
                    {{ forma.Descripcion }}
                </td>
                <td class="general-cell border-l-primaryTableWidth text-center">
                    {{ forma.Bancarizado ? 'Si' : 'No' }}
                </td>
                <td class="general-cell border-l-primaryTableWidth text-center">
                    {{ forma.Activo ? 'Activo' : 'Inactivo' }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>