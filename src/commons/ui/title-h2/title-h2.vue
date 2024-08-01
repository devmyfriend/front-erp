<script setup>
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
</script>

<template>
    <h2 class="text-[1rem] lg:text-[1.5rem] font-bold w-full mb-2" :class="`text-${theme}-subtext`">
        <slot></slot>
    </h2>
</template>