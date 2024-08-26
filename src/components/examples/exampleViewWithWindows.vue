<script setup>
import ventanas from '@/commons/components/windows.vue';
import { onBeforeMount } from 'vue';
import { useLayout } from '@/commons/composables/useLayout';
import { useWindows } from '@/commons/composables/useWindows'; 
const { setActiveTab, setTabsCollection } = useWindows();

const { setTitle, setViewTitle } = useLayout();

onBeforeMount(() => {
    setTitle('Productos');
    setViewTitle('Listado de Productos');
    setTabsCollection([
        { name: 'Listado', route: 'productsList' },
        { name: 'Formulario', route: 'productsForm' }
    ]);
    setActiveTab(0);
});
</script>

<template>
    <div class="flex sticky top-0 z-20">
        <ventanas />
    </div>

    <div class="flex-grow flex flex-col">
        <!-- Versión con buscador y botón de agregar -->
            <!--
            <div class="flex flex-row mb-6 h-inputHeight justify-between">
                <div class="flex flex-row mb-6 h-inputHeight gap-4">
                    <coinFinder @eBusqueda="esperarBusqueda" />
                </div>
                <btnFormulario @eNuevo="showModal = true; modoFormulario = 0" />
            </div>
            -->
        <!-- Versión con buscador y botón de agregar -->

        <!-- Versión sin buscador y botón de agregar -->
            <!--
                <div class="flex mb-6 h-inputHeight justify-end">
                    <btnFormulario @eNuevo="showModal = true; modoFormulario = 0" />
                </div>
            -->
        <!-- Versión sin buscador y botón de agregar -->

        <!-- Versión con buscador sin botón de agregar -->
            <!--
                <div
                    class="flex flex-row mb-6 h-inputHeight justify-between">
                        <coinFinder @eBusqueda="esperarBusqueda" />
                </div>
            -->
        <!-- Versión con buscador sin botón de agregar -->

        <!-- Versión sin buscador y sin botón de agregar -->
        <!-- ... -->
        <!-- Versión sin buscador y sin botón de agregar -->

        <div class="w-full items-center flex flex-col flex-grow overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
            <!-- tabla -->
        </div>
    </div>
</template>

<style scoped></style>