<script setup>
import {onBeforeMount } from 'vue';
import tableCountry from '@/modules/SAT/countries/components/tableCountry.vue';
import { useLayout } from '@/commons/composables/useLayout.js';
const { setTitle, setViewTitle } = useLayout();

onBeforeMount(() => {
    setTitle('Países');
    setViewTitle('Listado de Países');
});
</script>

<template>
    <div
        class="w-full mt-6 items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
        <tableCountry/>
    </div>
</template>

<style scoped></style>
