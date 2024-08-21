<script setup>
import { onBeforeMount, ref } from 'vue';
import tableCoins from '@/modules/SAT/coins/components/tableCoins.vue';
import coinFinder from '@/modules/SAT/coins/components/coinFinder.vue';
import deleteModal from '@/commons/ui/modals/deleteModal.vue';
import btnFormulario from '@/commons/ui/btn-formulario/btn-formulario.vue';
import generalModal from '@/commons/ui/modals/generalModal.vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import { useCoins } from '@/modules/SAT/coins/composables/useCoins.js';
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
const { setTitle, setViewTitle } = useLayout();
const {
    modalData,
    showModal,
    modoFormulario,
    bodyFrm,
    esperarTabla,
    esperarBusqueda,
    esperarModal,
    borrarRegistro,
    esperarCancelar,
} = useCoins();

onBeforeMount(() => {
    setTitle('Monedas SAT');
    setViewTitle('Listado de Monedas');
});
</script>

<template>
    <div class="flex flex-row mb-6 h-inputHeight justify-between">
        <div class="flex flex-row mb-6 h-inputHeight gap-4">
            <coinFinder @eBusqueda="esperarBusqueda" />
        </div>
        <btnFormulario @eNuevo="showModal = true; modoFormulario = 0"
            class="text-base px-4 py-2 text-white rounded-md h-full uppercase font-semibold flex items-center justify-center transition-all duration-300 max-w-24 md:max-w-32 xl:max-w-36" />
    </div>
    <div
        class="w-full items-center flex flex-col flex-grow overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
        <tableCoins :editable="true" @eAccion="esperarTabla" />
    </div>
    <deleteModal :id="modalData" v-if="modalData !== null" @eEliminar="borrarRegistro" @eCancelar="esperarCancelar" />
    <generalModal v-if="showModal" @eConfirm="esperarModal" @eCancel="esperarCancelar" :datos="bodyFrm">
        <template #header>
            {{ modoFormulario === 1 ? 'Crear' : 'Editar' }} moneda
        </template>
        <template #content>
            <div class="flex flex-col justify-center items-start">
                <label for="Clave" class="text-sm font-bold text-gray-700 relative px-1">Clave Moneda:</label>
                <input :disabled="modoFormulario === 1" name="Clave" v-model="bodyFrm.ClaveMoneda" type="text"
                    placeholder="MXN"
                    class="mt-1 block w-full text-sm border-2 border-gray-400 transition-all duration-300 focus:border-gray-800 box-border p-2 outline-none"
                    :class="{ [`bg-${theme}-disabled`]: modoFormulario === 1, 'bg-white': modoFormulario !== 1 }">
                <label class="text-sm font-bold text-gray-700 relative px-1 mt-4">Descripción</label>
                <input v-model="bodyFrm.Descripcion" type="text" placeholder="Peso Mexicano"
                    class="mt-1 mb-1 block w-full text-sm border-2 border-gray-400 transition-all duration-300 focus:border-gray-800 box-border p-2 outline-none">
            </div>
        </template>
    </generalModal>
</template>

<style scoped></style>
