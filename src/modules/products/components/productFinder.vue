<template>
    <div class="flex items-center h-inputHeight">
        <input 
            class=" text-primaryFontColor rounded-inputRadius border-inputBorder border-inputWidth p-paddingInput lg:w-96 md:w-60 sm:w-32 outline-none h-full text-base"
            type="text" 
            v-model="txtBusqueda" 
            @keyup.enter="buscar(txtBusqueda)" 
            placeholder="Nombre producto"
        >
        <img src="/svg/generalIcons/searchIco.svg" alt="Icono de buscador" class="cursor-pointer h-buscadorIconHeight ml-4" @click="buscar(txtBusqueda)">
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
const emit = defineEmits('eBusqueda');
import { useProductos } from '@/store/productsStore'
const store = useProductos();

const txtBusqueda = ref('');
const props = defineProps({
    tipoProducto: {
        type: String,
        default: 'Todos'
    }
});

function buscar(texto) {
    if (texto.length != 0) { 
        store.buscarProductos(texto, props.tipoProducto).then((res) => {
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