<script setup>
import { onBeforeMount } from 'vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import tableProductLines from '@/modules/lines/components/tableProductLines.vue';
import productLinesFinder from '@/modules/lines/components/productLinesFinder.vue';
const { setTitle, setViewTitle } = useLayout();

onBeforeMount(() => {
    setTitle('Lineas de Productos');
    setViewTitle('Listado de Lineas');
});
</script>

<template>
    <div class="flex flex-row mb-6 flex-wrap justify-between">
        <div class="flex flex-row flex-wrap gap-4">
            <productLinesFinder />
        </div>
        <!-- <btnFormulario @eNuevo="showModal = true; modoFormulario = 0" /> -->
    </div>

    <div
        class="w-full items-center flex flex-col flex-grow overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
        <tableProductLines/>
    </div>
    <!-- Seccion de modales -->
        <!-- deleteModal, modalGeneral, etc -->
    <!-- Seccion de modales -->
</template>

<style scoped></style>
