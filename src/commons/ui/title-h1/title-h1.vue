<script setup>
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
</script>

<template>
    <h1 class="text-[3vh] font-bold capitalize" :class="`text-${theme}-text`">
        <slot></slot>
    </h1>
</template>