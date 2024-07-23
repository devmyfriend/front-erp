<script setup>
import { ref } from 'vue';
import { useTheme } from '@/commons/composables/theme'
const { theme } = useTheme();

const emit = defineEmits(['eGuardar']);
const imagenPrueba = ref('');

const fileInput = ref(null);

const cargarImagen = () => {
    fileInput.value.click();
}
const imprimirImagen = () => {
    imagenPrueba.value = URL.createObjectURL(fileInput.value.files[0]);
    emit('eGuardar', imagenPrueba.value);
}
</script>

<template>
    <div class="m-4 mt-0">
        <input type="file" class="hidden" ref="fileInput" @change="imprimirImagen" />
        <button @click="cargarImagen" class="col-span-2 
        flex gap-4
        p-primaryPaddingButton border-none
        rounded-primaryButtonRadius justify-center 
        items-center uppercase text-base font-bold 
        h-10 w-56 transition-all duration-300"
            :class="`bg-${theme}-primary hover:bg-${theme}-secondary text-${theme}-subtext`">
            <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="imgButton">
                <path
                    d="M30.9958 6.99579L25.0042 1.00421C24.3612 0.361231 23.4892 4.75483e-06 22.5799 0H3.42857C1.535 0 0 1.535 0 3.42857V28.5714C0 30.465 1.535 32 3.42857 32H28.5714C30.465 32 32 30.465 32 28.5714V9.42014C32 8.51083 31.6388 7.63876 30.9958 6.99579ZM16 27.4286C13.4753 27.4286 11.4286 25.3819 11.4286 22.8571C11.4286 20.3324 13.4753 18.2857 16 18.2857C18.5247 18.2857 20.5714 20.3324 20.5714 22.8571C20.5714 25.3819 18.5247 27.4286 16 27.4286ZM22.8571 5.67714V12.8571C22.8571 13.3305 22.4734 13.7143 22 13.7143H5.42857C4.95521 13.7143 4.57143 13.3305 4.57143 12.8571V5.42857C4.57143 4.95521 4.95521 4.57143 5.42857 4.57143H21.7514C21.9788 4.57143 22.1968 4.66171 22.3575 4.8225L22.6061 5.07107C22.6857 5.15065 22.7488 5.24514 22.7919 5.34913C22.835 5.45312 22.8572 5.56458 22.8571 5.67714Z"
                    fill="#fff" />
            </svg>
            Agregar Imagen
        </button>
    </div>
</template>

<style scoped></style>
