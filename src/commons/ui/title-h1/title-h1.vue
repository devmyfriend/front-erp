<script setup>
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
</script>

<template>
    <h1 class="text-[3vh] font-bold capitalize mb-2 sm:mb-2 lg:mb-4 2xl:mb-6" :class="`text-${theme}-text`">
        <slot></slot>
    </h1>
</template>