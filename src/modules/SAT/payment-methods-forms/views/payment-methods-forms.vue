<script setup>
import { onBeforeMount } from 'vue';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import tablePaymentMethods from '@/modules/SAT/payment-methods-forms/components/tablePaymentMethods.vue';
import tablePaymentForms from '@/modules/SAT/payment-methods-forms/components/tablePaymentForms.vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import { useTheme } from '@/commons/composables/theme';
const { setTitle, setViewTitle } = useLayout();

onBeforeMount(() => {
    setTitle('Formas y métodos de pago');
    setViewTitle('Listado de Formas de Pago');
});
</script>

<template>
    <div
        class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl my-6 max-h-[25rem]">
        <tablePaymentForms/>
    </div>

    <titleH2> Listado de Métodos de pago </titleH2>
    <div
        class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl mt-6 min-h-max">
        <tablePaymentMethods/>
    </div>
</template>

<style scoped></style>