<script setup>
import { useLayout } from '@/commons/composables/useLayout.js';
import { useTheme } from '@/commons/composables/theme';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
const { theme } = useTheme();
const { view } = useLayout();

</script>

<template>
    <div class="w-full h-full flex flex-col items-center" :class="`bg-${theme}-background`">
        <titleH2 class="sticky top-0 p-4 pb-0" :class="`bg-${theme}-background`"> {{ view }} </titleH2>
        <div class="overflow-scroll p-4 pt-0 flex flex-col w-full h-full">
            <div class="flex flex-col flex-grow overflow-y-scroll">
                <router-view />
            </div>
        </div>
    </div>
</template>

<style scoped></style>