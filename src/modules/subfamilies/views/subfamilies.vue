<script setup>
import { onBeforeMount } from 'vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import tableProductSubfamilies from '@/modules/subfamilies/components/tableProductSubfamilies.vue';
import productSubfamiliesFinder from '@/modules/subfamilies/components/productSubfamiliesFinder.vue';
const { setTitle, setViewTitle } = useLayout();

onBeforeMount(() => {
    setTitle('Subfamilias de Productos');
    setViewTitle('Listado de Subfamilias');
});
</script>

<template>
    <div class="flex flex-row mb-6 flex-wrap justify-between">
        <div class="flex flex-row flex-wrap gap-4">
            <productSubfamiliesFinder />
        </div>
        <!-- <btnFormulario @eNuevo="showModal = true; modoFormulario = 0" /> -->
    </div>

    <div
        class="w-full items-center flex flex-col flex-grow overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
        <tableProductSubfamilies/>
    </div>
    <!-- Seccion de modales -->
        <!-- deleteModal, modalGeneral, etc -->
    <!-- Seccion de modales -->
</template>

<style scoped></style>
