<script setup>
    import { useTheme } from '@/commons/composables/useTheme';
    const { theme } = useTheme();
</script>

<template>
    <h2 class="text-2xl font-bold text-black mb-4 w-full" 
    :class="`text-h2-${theme}`">
        <slot></slot>
    </h2>
</template>