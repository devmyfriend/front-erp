<script setup>
import { ref } from 'vue';
import searchIco from '@/commons/ui/icons/actionIcons/searchIco.vue';
import { useUnitKeys } from '@/modules/products/composables/useUnitKeys';
const { loadUnitKeys, findUnitKeysByName, findUnitKeysByKey } = useUnitKeys();

const emit = defineEmits('eBusqueda');
const props = defineProps({
  color: {
    type: String,
    default: 'white'
  }
});
const txtBusqueda = ref('');
const typeFinder = ref(0);

function buscar(texto) {
    if (texto === undefined) {
        loadUnitKeys();
    } else {
        if (typeFinder.value === 0) {
            findUnitKeysByName(texto);
            
        } else {
            findUnitKeysByKey(texto);
        }
    }
}
</script>

<template>
    <div class="flex items-center h-inputHeight w-full md:w-auto">
        <select name="typeFinder" id="typeFinder" class="mr-2 h-inputHeight text-center !py-0 border-gray-500 hover:border-inputBorder focus:border-inputBorder border-inputWidth" v-model="typeFinder">
            <option value="0" selected>Nombre</option>
            <option value="1">Clave</option>
        </select>
        <input
            name="buscador"
            class="outline-none h-full text-base border-gray-500 text-black rounded-inputRadius border-inputWidth p-paddingInput lg:w-96 md:w-60 w-32 hover:border-inputBorder focus:border-inputBorder"
            type="text" v-model="txtBusqueda" @keyup.enter="buscar(txtBusqueda)" :placeholder="typeFinder === '0' ? 'Nombre Unidad' : 'Clave Unidad'">
        <searchIco class="cursor-pointer max-h-buscadorIconHeight ml-4" @click="buscar(txtBusqueda)" :color="color" />
    </div>
</template>

<style scoped>
input::placeholder {
    color: theme('colors.disabled.DEFAULT');
}
</style>
