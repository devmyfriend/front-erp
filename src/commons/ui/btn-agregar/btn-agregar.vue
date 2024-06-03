<template>
        <router-link 
        :to="{name: props.ruta}"
        
        class="w-44 h-inputHeight rounded-lg
        border-none border-inputWidth font-labelWeight
        text-secondaryFontColor text-center flex 
        justify-center items-center bg-primaryBtnColor
        no-underline BtnWeight p-paddingInput tracking-btnAgregarLetterSpacing
        uppercase hover:bg-navbar transition-all duration-500
        " 
        @click="test"> 
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

const test = () => {
    console.log('test');
}

</script>

<style scoped>
</style>