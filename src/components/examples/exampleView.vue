<script setup>
import { onBeforeMount} from 'vue';
import { useLayout } from '@/commons/composables/useLayout.js';
const { setTitle, setViewTitle } = useLayout();

/* On Before Mount - Se establecen los titulos (setTitle) y los subtitulos/titulos de la vista (setViewTitle) */
onBeforeMount(() => {
    setTitle('Monedas SAT');
    setViewTitle('Listado de Monedas');
});
</script>

<template>
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
                <btnFormulario @eNuevo="showModal = true; modoFormulario = 0"
                    class="text-base px-4 py-2 text-white rounded-md uppercase font-semibold flex items-center justify-center transition-all duration-300 max-w-24 min-w-24 md:max-w-32 md:min-w-32 xl:max-w-36 xl:min-w-36" />
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
    
    <!-- Sección de las tablas, sólo imprime la tabla dentro-->
        <div
            class="w-full items-center flex flex-col flex-grow overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
            <!-- tabla -->
        </div>
    <!-- Sección de las tablas, sólo imprime la tabla dentro-->

    <!-- Seccion de modales -->
        <!-- deleteModal, modalGeneral, etc -->
    <!-- Seccion de modales -->
</template>

<style scoped></style>
