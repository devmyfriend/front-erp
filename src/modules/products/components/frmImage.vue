<script setup>
import { ref } from 'vue';
import btnFile from '@/commons/ui/btn-file/btn-file.vue';
const imagenPrueba = ref('https://images3.alphacoders.com/133/1332803.png');

const esperarImagen = (archivo) => {
    imagenPrueba.value = archivo;
}

</script>

<template>
    <div class="imgContainer flex flex-col items-center justify-center p-4  min-w-full max-w-full">
        <img v-if="false" :src="imagenPrueba" alt="Imagen del Producto"
            class="max-h-[50vh] min-h-[50vh] max-w-full bg-transparent overflow-scroll object-cover">
        <img v-else :src="imagenPrueba" alt="Imagen del Producto"
            class="max-h-[50vh] min-h-[50vh] max-w-[50vh] min-w-[50vh] bg-transparent overflow-scroll object-cover">
    </div>
    <btnFile @eGuardar="esperarImagen" class="flex justify-center" />
</template>

<style scoped></style>