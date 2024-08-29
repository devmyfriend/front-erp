<template>
    <div class="flex items-center h-inputHeight w-full md:w-auto" @focusout="txtBusqueda=''">
        <input
            name="buscador"
            class="text-black rounded-inputRadius border-inputBorder border-inputWidth p-paddingInput flex-grow outline-none h-full text-base"
            type="text" v-model="txtBusqueda" @keyup.enter="buscar(txtBusqueda)" placeholder="Nombre producto">
        <searchIco @click="buscar(txtBusqueda)" class="cursor-pointer h-buscadorIconHeight ml-4" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
import { useProductos } from '@/store/product/productsStore'
import searchIco from '@/commons/ui/icons/actionIcons/searchIco.vue';

const emit = defineEmits('eBusqueda');
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
        store.findProducts(texto, props.tipoProducto).then((res) => {
            if (res) {
                emit('eBusqueda', texto);
            } else {
                Swal.fire({
                    title: 'No se encontraron resultados',
                    icon: 'info',
                    confirmButtonText: 'Aceptar'
                });
                emit('eBusqueda');
            }
        });
    } else {
        emit('eBusqueda');
    }
}
</script>

<style scoped>
input::placeholder {
    color: theme('colors.disabled.DEFAULT');
}
</style>