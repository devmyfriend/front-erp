<script setup>
import { onBeforeMount, watch } from 'vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import { useProductSubfamilies } from '@/modules/subfamilies/composables/useProductSubfamilies';
import { useProductFamilies } from '@/modules/families/composables/useProductFamilies';
import tableProductSubfamilies from '@/modules/subfamilies/components/tableProductSubfamilies.vue';
import productSubfamiliesFinder from '@/modules/subfamilies/components/productSubfamiliesFinder.vue';
import btnFormulario from '@/commons/ui/btn-formulario/btn-formulario.vue';
import generalModal from '@/commons/ui/modals/generalModal.vue';
import deleteModal from '@/commons/ui/modals/deleteModal.vue';

const { showModal, modoFormulario, registroModal, registroBorrar, esperarModal, esperarTabla, borrarRegistro } = useProductSubfamilies();
const { loadProductFamilies, productFamiliesCollection } = useProductFamilies();
const { setTitle, setViewTitle } = useLayout();

onBeforeMount(() => {
    setTitle('Subfamilias de Productos');
    setViewTitle('Listado de Subfamilias');
});
watch(showModal, (newValue) => {
    if (newValue) {
        loadProductFamilies();
    }
});
</script>

<template>
    <div class="flex flex-row mb-6 flex-wrap justify-between">
        <div class="flex flex-row flex-wrap gap-4">
            <productSubfamiliesFinder />
        </div>
        <btnFormulario @eNuevo="showModal = true; modoFormulario = 0" />
    </div>

    <div
        class="w-full items-center flex flex-col flex-grow overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
        <tableProductSubfamilies :editable="true" @eAccion="esperarTabla" />
    </div>
    <!-- Seccion de modales -->
    <!-- deleteModal, modalGeneral, etc -->
    <generalModal v-if="showModal" @eConfirm="esperarModal" @eCancel="showModal = false">
        <template v-slot:header>
            {{ modoFormulario == 0 ? 'Agregar' : 'Editar' }} Subfamilia de Productos
        </template>
        <template v-slot:content>
            <div class="flex flex-grow gap-4 items-center px-1">
                <label for="NombreSubfamilia" class="font-semibold"> Nombre Subfamilia: </label>
                <input type="text" id="NombreSubfamilia" v-model="registroModal.NombreSubFamilia" class="inpModal" />
                <label for="FamiliaId" class="font-semibold"> Familia: </label>
                <select name="FamiliaId" id="FamiliaId" class="inpModal" v-model="registroModal.FamiliaId">
                    <option value="0" selected disabled>Selecciona una familia</option>
                    <option v-for="family in productFamiliesCollection" :key="family.FamiliaId"
                        :value="family.FamiliaId">{{ family.FamiliaId }} | {{ family.NombreFamilia }} </option>
                </select>
            </div>
        </template>
    </generalModal>

    <deleteModal :id="registroBorrar.SubFamiliaId" v-if="registroBorrar !== null" @eEliminar="borrarRegistro"
        @eCancelar="registroBorrar = null" />
    <!-- Seccion de modales -->
</template>

<style scoped>
.inpModal {
    @apply outline-none h-full text-base border-gray-500 text-black rounded-inputRadius border-inputWidth p-paddingInput hover:border-inputBorder focus:border-inputBorder flex-grow
}
</style>
