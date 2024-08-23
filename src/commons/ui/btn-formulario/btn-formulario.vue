<script setup>
import { useTheme } from '@/commons/composables/theme'
const { theme } = useTheme();
const emit = defineEmits(['eNuevo']);
</script>

<template>
    <button @click="emit('eNuevo')" class="btn-general"
        :class="`bg-${theme}-primary hover:bg-${theme}-secondary`">
        <svg
            class="btn-icon"
            id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <path class="cls-1"
                d="M174.86,25.62v119.42c0,14.15-11.75,25.62-26.25,25.62H26.25c-14.5,0-26.25,11.47-26.25,25.62v107.42c0,14.15,11.75,25.62,26.25,25.62h122.36c14.5,0,26.25,11.47,26.25,25.62v119.42c0,14.15,11.75,25.62,26.25,25.62h110.06c14.5,0,26.25-11.47,26.25-25.62v-121.1c0-14.15,11.75-25.62,26.25-25.62h110.06c14.5,0,26.25-11.47,26.25-25.62v-104.61c0-14.15-11.75-25.62-26.25-25.62h-112.79c-14.5,0-26.25-11.47-26.25-25.62V25.62c0-14.15-11.75-25.62-26.25-25.62h-107.33c-14.5,0-26.25,11.47-26.25,25.62Z"
                fill="#fff" />
        </svg>
        Nuevo
    </button>
</template>

<style scoped></style>
