<template>
        <router-link 
        :to="{name: props.ruta}"
        
        class="xl:w-44 w-28 h-inputHeight rounded-lg border-none border-inputWidth 
        font-labelWeight text-center flex justify-center items-center no-underline 
        p-paddingInput tracking-btnAgregarLetterSpacing uppercase transition-all 
        duration-500 text-xl text-white" 
        :class="`bg-primaryButton-${theme} hover:bg-primaryButton-${theme}-hover`"
        > 
        Nuevo 
        </router-link>
</template>

<script setup>
import { useTheme } from '@/commons/composables/useTheme.js'
const { theme } = useTheme();

const props = defineProps({
    tipoProducto: {
        type: String,
        required: false,
        default: 'Todos'
    },
    ruta: {
        type: String,
        required: false
    }
});

</script>

<style scoped>
</style>