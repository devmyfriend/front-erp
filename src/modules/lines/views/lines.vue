<script setup>
import { onBeforeMount, watch } from 'vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import { useProductLines } from '@/modules/lines/composables/useProductLines';
import { useProductSubfamilies } from '@/modules/subfamilies/composables/useProductSubfamilies';
import tableProductLines from '@/modules/lines/components/tableProductLines.vue';
import productLinesFinder from '@/modules/lines/components/productLinesFinder.vue';
import btnFormulario from '@/commons/ui/btn-formulario/btn-formulario.vue';
import generalModal from '@/commons/ui/modals/generalModal.vue';
import deleteModal from '@/commons/ui/modals/deleteModal.vue';

const { showModal, modoFormulario, registroModal, registroBorrar, esperarModal, esperarTabla, borrarRegistro } = useProductLines();
const { loadProductSubfamilies, productSubfamiliesCollection } = useProductSubfamilies();
const { setTitle, setViewTitle } = useLayout();

onBeforeMount(() => {
    setTitle('Lineas de Productos');
    setViewTitle('Listado de Lineas');
});
watch(showModal, (newValue) => {
    if (newValue) {
        loadProductSubfamilies();
    }
});
</script>

<template>
    <div class="flex flex-row mb-6 flex-wrap justify-between">
        <div class="flex flex-row flex-wrap gap-4">
            <productLinesFinder />
        </div>
        <btnFormulario @eNuevo="showModal = true; modoFormulario = 0" />
    </div>

    <div
        class="w-full items-center flex flex-col flex-grow overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
        <tableProductLines :editable="true" @eAccion="esperarTabla" />
    </div>
    <!-- Seccion de modales -->
     <generalModal v-if="showModal" @eConfirm="esperarModal" @eCancel="showModal = false">
        <template v-slot:header>
            {{ modoFormulario == 0 ? 'Agregar' : 'Editar' }} Linea de Productos
        </template>
        <template v-slot:content>
            <div class="flex flex-grow gap-4 items-center px-1">
                <label for="NombreLinea" class="font-semibold"> Nombre Linea: </label>
                <input type="text" id="NombreLinea" v-model="registroModal.NombreLinea" class="inpModal" />
                <label for="SubFamiliaId" class="font-semibold"> Subfamilia: </label>
                <select name="SubFamiliaId" id="SubFamiliaId" class="inpModal" v-model="registroModal.SubFamiliaId">
                    <option value="0" selected disabled>Selecciona una subfamilia</option>
                    <option v-for="subfamily in productSubfamiliesCollection" :key="subfamily.SubFamiliaId"
                        :value="subfamily.SubFamiliaId">{{ subfamily.SubFamiliaId }} | {{ subfamily.NombreSubFamilia }} </option>
                </select>
            </div>
        </template>
     </generalModal>
    <deleteModal :id="registroBorrar.LineaId" v-if="registroBorrar !== null" @eEliminar="borrarRegistro"
        @eCancelar="registroBorrar = null" />
    <!-- Seccion de modales -->
</template>

<style scoped>
.inpModal {
    @apply outline-none h-full text-base border-gray-500 text-black rounded-inputRadius border-inputWidth p-paddingInput hover:border-inputBorder focus:border-inputBorder flex-grow
}
</style>
