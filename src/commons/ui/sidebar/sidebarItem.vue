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
    <router-link :to="{ name: toProp}">
        <img :src='srcProp' alt="Icono Sidebar">
        <p>{{ title }}</p>
    </router-link>
</template>

<style scoped>
a{
    text-decoration: none;
    color: var(--font-color-primary);
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
img{
    width: 40%;
    height: auto;
    margin: 0.5rem 0;
}
p{
    font-size: 0.6vw;
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-align: center;
    word-break: break-all;
}
</style>