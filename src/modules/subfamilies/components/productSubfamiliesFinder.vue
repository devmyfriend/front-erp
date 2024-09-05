<script setup>
import { onBeforeMount, ref, watch } from 'vue';
import searchIco from '@/commons/ui/icons/actionIcons/searchIco.vue';
import { useProductSubfamilies } from '@/modules/subfamilies/composables/useProductSubfamilies';
import { useProductFamilies } from '@/modules/families/composables/useProductFamilies';
import Swal from 'sweetalert2';
const { loadProductFamilies, productFamiliesCollection } = useProductFamilies();
const { loadProductSubfamilies, findProductSubfamiliesByName, findProductSubfamiliesByFamilyId, productFamily } = useProductSubfamilies();
const emit = defineEmits('eBusqueda');
const props = defineProps({
  color: {
    type: String,
    default: 'white'
  }
});
const txtBusqueda = ref('');
const familySelected = ref(productFamily);

watch(familySelected, async (newValue, oldValue) => {
    if (newValue != oldValue) {
        findProductSubfamiliesByFamilyId(parseInt(newValue));
    } 
});

onBeforeMount(() => {
    loadProductFamilies();
});
function buscar(texto) {
    if (texto.length != 0) {
        if (texto.length > 2) {
            findProductSubfamiliesByName(texto).then((res) => {
                if (res) {
                    emit('eBusqueda', texto);
                } else {
                    emit('eBusqueda');
                }
            });
        } else{
            Swal.fire({
                title: 'Error',
                text: 'La búsqueda debe contener al menos 3 caracteres',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    } else {
        emit('eBusqueda');
        if (parseInt(familySelected.value) !== 0) {
            findProductSubfamiliesByFamilyId(familySelected.value);
        } else {
            loadProductSubfamilies();
        }
    }
}
</script>

<template>
    <div class="flex items-center h-inputHeight gap-2 md:gap-4">
        <input
            name="buscador"
            class="outline-none h-full text-base border-gray-500 text-black rounded-inputRadius border-inputWidth p-paddingInput lg:w-96 md:w-60 w-32 hover:border-inputBorder focus:border-inputBorder"
            type="text" v-model="txtBusqueda" @keyup.enter="buscar(txtBusqueda)" placeholder="Nombre subfamilia">

        <select name="family" id="family" class="h-inputHeight py-0 max-w-56" v-model="familySelected">
            <option value="0" selected >Selecciona una familia</option>
            <option v-for="family in productFamiliesCollection" :key="family.FamiliaId" :value="family.FamiliaId">{{ family.FamiliaId }} | {{ family.NombreFamilia }} </option>
        </select>

        <searchIco class="cursor-pointer max-h-buscadorIconHeight" @click="buscar(txtBusqueda)" :color="color" />
    </div>

</template>

<style scoped>
input::placeholder {
    color: theme('colors.disabled.DEFAULT');
}
</style>
