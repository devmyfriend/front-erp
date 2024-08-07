<script setup>
import { onBeforeMount, onMounted } from 'vue';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import tableCoins from '@/modules/SAT/coins/components/tableCoins.vue';
import coinFinder from '@/modules/SAT/coins/components/coinFinder.vue';
import deleteModal from '@/commons/ui/modals/deleteModal.vue';
import btnFormulario from '@/commons/ui/btn-formulario/btn-formulario.vue';
import coinsModal from '@/commons/components/modals/coinsModal.vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import { useCoins } from '@/modules/SAT/coins/composables/useCoins.js';
const { setTitle } = useLayout();
const {
    ListadoMonedas,
    modalData,
    showModal,
    modoFormulario,
    bodyFrm,
    cargarDatos,
    esperarTabla,
    esperarBusqueda,
    esperarModal,
    borrarRegistro,
    esperarCancelar,
} = useCoins();

onBeforeMount(() => {
    setTitle('Monedas SAT');
});

onMounted(async () => {
    await cargarDatos();
});
</script>

<template>
    <div class="w-full h-full p-4 flex justify-center items-center">
        <div class="w-full h-full flex flex-col">
            <titleH2> Listado de Monedas </titleH2>
            <div class="flex flex-row mb-6 h-inputHeight justify-between">
                <div class="flex flex-row mb-6 h-inputHeight gap-4">
                    <coinFinder @eBusqueda="esperarBusqueda" />
                </div>
                <btnFormulario @eNuevo="showModal = true; modoFormulario = 0"
                    class="text-base px-4 py-2 text-white rounded-md h-full uppercase font-semibold flex items-center justify-center transition-all duration-300 max-w-24 md:max-w-32 xl:max-w-36" />
            </div>

            <div
                class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
                <tableCoins :ListadoMonedas="ListadoMonedas" :editable="true" @eAccion="esperarTabla" />
                <deleteModal :id="modalData" v-if="modalData !== null" @eEliminar="borrarRegistro"
                    @eCancelar="esperarCancelar" />
            </div>
        </div>
    </div>

    <coinsModal :datos="bodyFrm" :mostrar="showModal" :modo="modoFormulario" @eConfirm="esperarModal"
        @eCancel="esperarCancelar" />
</template>

<style scoped></style>
