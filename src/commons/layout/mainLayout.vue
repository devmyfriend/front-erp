<script setup>
import sidebar from '@/commons/ui/sidebar/sidebar.vue';
import navbar from '../ui/navbar/navbar.vue';
import titleH1 from '../ui/title-h1/title-h1.vue';
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
import { useLayout } from '@/commons/composables/useLayout.js';
const { title } = useLayout();
</script>

<template>
    <div class="flex flex-row w-full h-full gap">
        <!-- Sidebar -->
        <sidebar class=" h-full text-white 
        min-w-12 sm:min-w-12 md:min-w-14 lg:min-w-16 xl:min-w-16 2xl:min-w-[72px]
        max-w-12 sm:max-w-12 md:max-w-14 lg:max-w-16 xl:max-w-16 2xl:max-w-[72px]"
        :class="`bg-${theme}-sidebar`" />
        <div class="flex-grow flex flex-col flex-wrap">
            <!-- Navbar -->
            <navbar/>
            <!-- Content -->
            <div class="flex flex-col flex-grow max-h-[95%]">
                <div class="flex flex-col overflow-hidden h-full p-2 md:p-4">
                    <titleH1> {{ title }} </titleH1>
                    <div class="flex-grow overflow-hidden rounded-2xl">
                        <router-view/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
