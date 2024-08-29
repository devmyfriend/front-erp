<script setup>
import { ref } from 'vue';
import btnFile from '@/commons/ui/btn-file/btn-file.vue';
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();

const imagenProducto = ref('https://placehold.co/400x00');
const esperarImagen = (archivo) => {
    imagenProducto.value = archivo;
}

</script>

<template>
    <div class="flex flex-col justify-center items-center rounded-xl border-2 p-4 w-5/6 md:w-3/4 lg:w-2/4 xl:w-1/3 gap-4 2xl:w-2/6"
        :class="`bg-${theme}-container border-${theme}-primary`">
        <div class="overflow-hidden size-full content-center">
            <img :src="imagenProducto" alt="Image" class="w-full object-cover">
        </div>
        <btnFile @eGuardar="esperarImagen" />
    </div>
</template>

<style scoped></style>