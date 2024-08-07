<script setup>
import { onBeforeMount } from 'vue';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import tableTaxes from '@/modules/SAT/tax/components/tableTaxes.vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import { useTaxes } from '@/modules/SAT/tax/composables/useTaxes.js';
import btnFormulario from '@/commons/ui/btn-formulario/btn-formulario.vue';
import deleteModal from '@/commons/ui/modals/deleteModal.vue';
import TaxesModal from '@/commons/components/modals/taxesModal.vue';

const { setTitle } = useLayout();
const {
    ListadoImpuestos,
    showModal,
    modoFormulario,
    modalData,
    bodyFrm,
    cargarDatos,
    esperarTabla,
    esperarModal,
    esperarCancelar,
    borrarRegistro,
} = useTaxes();

onBeforeMount(() => {
    setTitle('Impuestos SAT');
    cargarDatos();
});
</script>

<template>
    <div class="w-full h-full p-4 flex justify-center items-center">
        <div class="w-full h-full flex flex-col">
            <div class="flex flex-row mb-1 sm:mb-2 md:mb-4 lg:mb-5 2xl:mb-6 h-inputHeight justify-between">
                <titleH2> Listado de Impuestos SAT</titleH2>
                <btnFormulario @eNuevo="showModal = true; modoFormulario = 0"
                    class="mr-2 text-base px-4 py-2 text-white rounded-md h-full uppercase font-semibold flex items-center justify-center transition-all duration-300 max-w-24 min-w-24 md:max-w-32 md:min-w-32 xl:max-w-36 xl:min-w-36" />
            </div>

            <div
                class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
                <tableTaxes :ListadoImpuestos="ListadoImpuestos" :editable="true" @eAccion="esperarTabla" />

                <deleteModal :id="modalData" v-if="modalData !== null" @eEliminar="borrarRegistro"
                    @eCancelar="esperarCancelar" />
            </div>

        </div>
    </div>

    <TaxesModal :datos="bodyFrm" :mostrar="showModal" :modo="modoFormulario" @eConfirm="esperarModal"
        @eCancel="esperarCancelar" />

</template>

<style scoped></style>
