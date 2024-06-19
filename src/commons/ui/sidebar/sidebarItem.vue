<script setup>
const props = defineProps({
    srcProp: {
        type: String,
        default: '#'
    },
    toProp: {
        type: String,
        default: '#'
    },
    title: {
        type: String,
        default: 'Titulo'
    }
})
</script>

<template>
    <router-link :to="{ name: toProp}" class="no-underline text-secondaryFontColor text-center w-full flex flex-col items-center justify-center">
        <img :src='srcProp' alt="Icono Sidebar" class="w-[30%] h-auto my-2 mx-0">
        <p class="px-2 text-[0.65vw] font-semibold text-center break-all m-0">{{ title }}</p>
    </router-link>
</template>

<style scoped>
</style>