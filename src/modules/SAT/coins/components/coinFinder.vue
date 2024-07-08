<template>
    <div class="flex items-center h-inputHeight">
        <input 
            class=" text-primaryFontColor rounded-inputRadius border-inputBorder border-inputWidth p-paddingInput lg:w-96 md:w-60 sm:w-32 outline-none h-full text-base"
            type="text" 
            v-model="txtBusqueda" 
            @keyup.enter="buscar(txtBusqueda)" 
            placeholder="Nombre moneda"
        >
        <img src="/svg/generalIcons/searchIco.svg" alt="Icono de buscador" class="cursor-pointer h-buscadorIconHeight ml-4" @click="buscar(txtBusqueda)">
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
import { coinsStore } from '@/store/coinsStore'
const emit = defineEmits('eBusqueda');
const store = coinsStore();

const txtBusqueda = ref('');

function buscar(texto) {
    if (texto.length != 0) { 
        store.buscarMonedas(texto).then((res) => {
            if (res) {
                emit('eBusqueda', texto);
            }else{
                Swal.fire({
                    title: 'No se encontraron resultados',
                    icon: 'info',
                    confirmButtonText: 'Aceptar'
                });
                emit('eBusqueda');
            }
        });
    }else{
        emit('eBusqueda');
    }
}
</script>

<style scoped>
input::placeholder {
    color: theme('colors.disableBodyTable');
}
</style>