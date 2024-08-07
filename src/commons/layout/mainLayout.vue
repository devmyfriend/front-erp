<script setup>
import sidebar from '@/commons/ui/sidebar/sidebar.vue';
import themeSwitcher from '@/commons/ui/theme-switcher/theme-switcher.vue';
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
</script>

<template>
    <div class="containerMy grid h-screen min-h-screen max-h-screen w-screen">
        <div class="navbarMy px-4 py-2 text-center flex justify-between items-center min-h-12 h-[6vh] max-h-[6vh] w-[96vw] max-w-[96vw] box-border col-span-2"
            :class="`bg-${theme}-navbar`">

            <h1
                class="text-[2vh] md:text-[3vh] lg:text-[3.5vh] leading-[4vh] font-bold p-0 text-start uppercase text-white w-max mr-4">
                {{ theme }}
            </h1>

            <themeSwitcher />

            <div class="flex-grow"></div>

            <img src="/svg/generalIcons/userIco.svg" alt="Usuario" class="navbarUserImg h-full max-h-full">
        </div>

        <div class="sidebarMy min-w-[2.5rem] w-[4vw] max-h-screen overflow-hidden flex flex-col"
            :class="`bg-${theme}-sidebar text-${theme}-subtext px-[2px] md:px-1 lg:px-2`">
            <div class="flex flex-col grow h-full max-w-full shrink overflow-hidden">
                <sidebar />
            </div>
        </div>

        <div
            class="contentMy p-1 sm:p-1 md:p-2 2xl:p-4 flex-auto flex flex-col max-h-[92vh] sm:max-h-[92vh] 2xl:max-h-[92vh] w-[96vw] max-w-[96vw] bg-white">
            <router-view />
        </div>
    </div>
</template>

<style scoped>
@import url('@/commons/styles/styleLayout.css');
</style>
