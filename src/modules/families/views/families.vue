<script setup>
import { onBeforeMount } from 'vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import { useProductFamilies } from '@/modules/families/composables/useProductFamilies';
import tableProductFamilies from '@/modules/families/components/tableProductFamilies.vue';
import productFamiliesFinder from '@/modules/families/components/productFamiliesFinder.vue';
import btnFormulario from '@/commons/ui/btn-formulario/btn-formulario.vue';
import generalModal from '@/commons/ui/modals/generalModal.vue';
import deleteModal from '@/commons/ui/modals/deleteModal.vue';

const { showModal, modoFormulario, registroModal, registroBorrar, esperarModal, esperarTabla, borrarRegistro } = useProductFamilies();
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
        {{ registroBorrar }}
        <btnFormulario @eNuevo="showModal = true; modoFormulario = 0" />
    </div>

    <div
        class="w-full items-center flex flex-col flex-grow overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
        <tableProductFamilies :editable="true" @eAccion="esperarTabla" />
    </div>
    <!-- Seccion de modales -->
        <!-- deleteModal, modalGeneral, etc -->
         <generalModal v-if="showModal" @eConfirm="esperarModal" @eCancel="showModal = false">
            <template v-slot:header>
                {{ modoFormulario == 0 ? 'Agregar' : 'Editar'}} Familia de Productos
            </template>
            <template v-slot:content>
                <div class="flex flex-grow gap-4 items-center px-1">
                    <label for="NombreFamilia" class="font-semibold"> Nombre Familia: </label>
                    <input type="text" id="NombreFamilia" v-model="registroModal.NombreFamilia"
                    class="outline-none h-full text-base border-gray-500 text-black rounded-inputRadius border-inputWidth p-paddingInput hover:border-inputBorder focus:border-inputBorder flex-grow"/>
                </div>
            </template>
         </generalModal>

        <deleteModal :id="registroBorrar.FamiliaId" v-if="registroBorrar !== null" @eEliminar="borrarRegistro" @eCancelar="registroBorrar = null" />
    <!-- Seccion de modales -->
</template>

<style scoped></style>
