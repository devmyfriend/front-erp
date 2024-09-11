<script setup>
import { RouterView } from 'vue-router'
import { useTheme } from '@/commons/composables/theme';
import { onMounted } from 'vue';
const { favicon, setFavicon } = useTheme();

onMounted(() => {
  setFavicon(favicon);
});

</script>

<template>
  <div class="h-screen max-h-full max-w-full 
    justify-between items-center 
    flex flex-row flex-wrap">
    <RouterView class="w-full h-full"/>
  </div>
</template>

<style>
</style>
