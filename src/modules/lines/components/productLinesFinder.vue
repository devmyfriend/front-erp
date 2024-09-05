<script setup>
import { onBeforeMount, ref, watch } from 'vue';
import searchIco from '@/commons/ui/icons/actionIcons/searchIco.vue';
import { useProductLines } from '@/modules/lines/composables/useProductLines';
import { useProductSubfamilies } from '@/modules/subfamilies/composables/useProductSubfamilies';
import Swal from 'sweetalert2';
const { loadProductSubfamilies, productSubfamiliesCollection } = useProductSubfamilies();
const { loadProductLines, findProductLinesByName, findProductLinesBySubfamilyId, productSubfamily } = useProductLines();
const emit = defineEmits('eBusqueda');
const props = defineProps({
  color: {
    type: String,
    default: 'white'
  }
});
const txtBusqueda = ref('');
const subfamilySelected = ref(productSubfamily);

watch(subfamilySelected, async (newValue, oldValue) => {
    if (newValue != oldValue) {
        findProductLinesBySubfamilyId(parseInt(newValue));
    } 
});

onBeforeMount(() => {
    loadProductSubfamilies();
});
function buscar(texto) {
    if (texto.length != 0) {
        if (texto.length > 2) {
            findProductLinesByName(texto).then((res) => {
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
        if (parseInt(subfamilySelected.value) !== 0) {
            findProductLinesBySubfamilyId(subfamilySelected.value);
        } else {
            loadProductLines();
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

        <select name="subfamily" id="subfamily" class="h-inputHeight py-0 max-w-56" v-model="subfamilySelected">
            <option value="0" selected >Selecciona una subfamilia</option>
            <option v-for="subfamily in productSubfamiliesCollection" :key="subfamily.SubFamiliaId" :value="subfamily.SubFamiliaId">{{ subfamily.SubFamiliaId }} | {{ subfamily.NombreSubFamilia }} </option>
        </select>

        <searchIco class="cursor-pointer max-h-buscadorIconHeight" @click="buscar(txtBusqueda)" :color="color" />
    </div>

</template>

<style scoped>
input::placeholder {
    color: theme('colors.disabled.DEFAULT');
}
</style>
