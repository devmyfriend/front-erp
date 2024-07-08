<script setup>
    import { useTheme } from '@/commons/composables/useTheme';
    const { theme } = useTheme();
</script>

<template>
    <h1 class="text-[3vh] font-bold capitalize" :class="`text-h1-${theme}`">
        <slot></slot>
    </h1>
</template>