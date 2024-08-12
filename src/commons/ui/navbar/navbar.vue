<script setup>
import { useTheme } from '@/commons/composables/theme';
import themeSwitcher from '@/commons/ui/theme-switcher/theme-switcher.vue';
const { theme } = useTheme();
</script>

<template>
    <div class="navbar flex items-center px-4 h-[5%] w-full max-w-full flex-wrap" :class="`bg-${theme}-navbar`">
        <h1 class="font-bold p-0 text-start uppercase text-white leading-[4vh] w-max mr-4 lg:text-[2rem] title">
            {{ theme }}
        </h1>
        <themeSwitcher/>
        <div class="flex-grow"></div> 
        <img src="/svg/generalIcons/userIco.svg" alt="Usuario" class="userImg h-3/4 max-h-full">
    </div>
</template>

<style scoped>
.userImg {
    filter: drop-shadow(3px 1px 4px rgba(0, 0, 0, 0.6)); 
}
.title {
    filter: drop-shadow(3px 1px 6px rgba(0, 0, 0, 0.4)); 
}
.navbar{
    z-index: 1;
    box-shadow: 8px 4px 16px rgba(0, 0, 0, 0.6);
}
</style>