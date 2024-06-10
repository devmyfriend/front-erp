<template>
        <router-link 
        :to="{name: props.ruta}"
        
        class="xl:w-44 w-28 h-inputHeight rounded-lg
        border-none border-inputWidth font-labelWeight
        text-secondaryFontColor text-center flex 
        justify-center items-center bg-primaryBtnColor
        no-underline p-paddingInput tracking-btnAgregarLetterSpacing
        uppercase hover:bg-navbar transition-all duration-500 text-xl
        " 
        > 
        Nuevo 
        </router-link>
</template>

<script setup>

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