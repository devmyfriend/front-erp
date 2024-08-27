<script setup>
import { ref } from 'vue';
import btnFile from '@/commons/ui/btn-file/btn-file.vue';
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();

const imagenProducto = ref('https://placehold.co/200x200');
const esperarImagen = (archivo) => {
    imagenProducto.value = archivo;
}

</script>

<template>
    <div class="flex flex-col justify-center items-center rounded-xl border-2 p-4 w-full gap-4 2xl:w-2/6"
        :class="`bg-${theme}-container border-${theme}-primary`">
        <div class="overflow-hidden size-full">
            <img :src="imagenProducto" alt="Image" class="size-full object-contain">
        </div>
        <btnFile @eGuardar="esperarImagen" />
    </div>
</template>

<style scoped></style>