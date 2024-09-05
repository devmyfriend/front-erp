<script setup>
import { onBeforeMount } from 'vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import tableProductFamilies from '@/modules/families/components/tableProductFamilies.vue';
import productFamiliesFinder from '@/modules/families/components/productFamiliesFinder.vue';

const { setTitle, setViewTitle } = useLayout();

onBeforeMount(() => {
    setTitle('Familias de Productos');
    setViewTitle('Listado de Familias');
});
</script>

<template>
    <div class="flex flex-row mb-6 flex-wrap justify-between">
        <div class="flex flex-row flex-wrap gap-4">
            <productFamiliesFinder />
        </div>
        <!-- <btnFormulario @eNuevo="showModal = true; modoFormulario = 0" /> -->
    </div>

    <div
        class="w-full items-center flex flex-col flex-grow overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
        <tableProductFamilies/>
    </div>
    <!-- Seccion de modales -->
        <!-- deleteModal, modalGeneral, etc -->
    <!-- Seccion de modales -->
</template>

<style scoped></style>
