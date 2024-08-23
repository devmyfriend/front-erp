<script setup>
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
</script>

<template>
    <h3 class="text-[0.75rem] lg:text-[1.25rem] font-bold w-full mb-2" :class="`text-${theme}-subtext`">
        <slot></slot>
    </h3>
</template>