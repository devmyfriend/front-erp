<script setup>
import { onBeforeMount, defineAsyncComponent } from 'vue';
import tableReceipt from '@/modules/SAT/receipt-types/components/tableReceipt.vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import { useReceiptsTypes } from '@/modules/SAT/receipt-types/composables/useReceiptsTypes.js';
import btnFormulario from '@/commons/ui/btn-formulario/btn-formulario.vue';
import { useTheme } from '@/commons/composables/theme';
const deleteModal = defineAsyncComponent(() => import('@/commons/ui/modals/deleteModal.vue'));
const generalModal = defineAsyncComponent(() => import('@/commons/ui/modals/generalModal.vue'));
const { theme } = useTheme();
const { setTitle, setViewTitle } = useLayout();

onBeforeMount(() => {
    setTitle('Tipo de Comprobantes');
    setViewTitle('Listado de Tipos de Comprobante');
});

const {
    showModal,
    modoFormulario,
    modalData,
    bodyFrm,
    esperarTabla,
    esperarModal,
    esperarCancelar,
    borrarRegistro,
} = useReceiptsTypes();

</script>

<template>
    <div class="flex mb-6 h-inputHeight justify-end">
        <btnFormulario @eNuevo="showModal = true; modoFormulario = 0"/>
    </div>
    <div
        class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
            <tableReceipt :editable="true" @eAccion="esperarTabla" />
    </div>
    <deleteModal :id="modalData" v-if="modalData !== null" @eEliminar="borrarRegistro"
        @eCancelar="esperarCancelar" />
    <generalModal v-if="showModal" @eConfirm="esperarModal" @eCancel="esperarCancelar" :datos="bodyFrm">
        <template #header>
            {{ modoFormulario === 0 ? 'Crear' : 'Editar' }} Tipo de Comprobante
        </template>
        <template #content>
            <div class="flex flex-col justify-center items-start">
                <label for="Clave" class="text-sm font-bold text-gray-700 relative px-1">Clave Tipo de Comprobante:</label>
                <input :disabled="modoFormulario === 1" name="Clave" v-model="bodyFrm.ClaveTipoDeComprobante" type="text"
                    placeholder="T"
                    class="mt-1 block w-full text-sm border-2 border-gray-400 transition-all duration-300 focus:border-gray-800 box-border p-2 outline-none"
                    :class="{ [`bg-${theme}-disabled`]: modoFormulario === 1, 'bg-white': modoFormulario !== 1 }">
                <label class="text-sm font-bold text-gray-700 relative px-1 mt-4">Descripción:</label>
                <input v-model="bodyFrm.Descripcion" type="text" placeholder="Traslado"
                    class="mt-1 mb-1 block w-full text-sm border-2 border-gray-400 transition-all duration-300 focus:border-gray-800 box-border p-2 outline-none">
            </div>
        </template>
    </generalModal>
</template>

<style scoped></style>