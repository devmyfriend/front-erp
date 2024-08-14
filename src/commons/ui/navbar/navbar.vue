<script setup>
import { useTheme } from '@/commons/composables/theme';
import themeSwitcher from '@/commons/ui/theme-switcher/theme-switcher.vue';
const { theme } = useTheme();
</script>

<template>
    <div class="flex items-center px-4 h-[5%] w-full max-w-full flex-wrap" :class="`bg-${theme}-navbar`">
        
        <themeSwitcher/>
        <div class="flex-grow"></div> 
        <img src="/svg/generalIcons/userIco.svg" alt="Usuario" class="userImg h-3/4 max-h-full">
    </div>
</template>

<style scoped>
.userImg {
    filter: drop-shadow(3px 1px 4px rgba(0, 0, 0, 0.6)); 
}
</style>