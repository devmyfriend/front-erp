<script setup>
import { computed, ref } from 'vue';
import searchIco from '@/commons/ui/icons/actionIcons/searchIco.vue';
import { useProductFamilies } from '@/modules/families/composables/useProductFamilies';
import Swal from 'sweetalert2';
const { loadProductFamilies, findProductFamiliesByName} = useProductFamilies();
const emit = defineEmits('eBusqueda');
const props = defineProps({
  color: {
    type: String,
    default: 'white'
  }
});
const txtBusqueda = ref('');

function buscar(texto) {
    if (texto.length != 0) {
        if (texto.length > 2) {
            findProductFamiliesByName(texto).then((res) => {
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
        loadProductFamilies();
    }
}
</script>

<template>
    <div class="flex items-center h-inputHeight">
        <input
            name="buscador"
            class="outline-none h-full text-base border-gray-500 text-black rounded-inputRadius border-inputWidth p-paddingInput lg:w-96 md:w-60 w-32 hover:border-inputBorder focus:border-inputBorder"
            type="text" v-model="txtBusqueda" @keyup.enter="buscar(txtBusqueda)" placeholder="Nombre familia">
        <searchIco class="cursor-pointer max-h-buscadorIconHeight ml-4" @click="buscar(txtBusqueda)" :color="color" />
    </div>
</template>

<style scoped>
input::placeholder {
    color: theme('colors.disabled.DEFAULT');
}
</style>
