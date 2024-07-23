<script setup>
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
</script>

<template>
    <h2 class="text-2xl font-bold mb-4 w-full" :class="`text-${theme}-subtext`">
        <slot></slot>
    </h2>
</template>