<script setup>
    import { ref, watch } from 'vue';
    import { useTheme } from '@/commons/composables/useTheme';
    const { theme } = useTheme();
    const subtitle = ref(theme.value);

    watch(() => theme.value, (newValue) => {
        subtitle.value = newValue;
    });
</script>

<template>
    <h2 class="text-2xl font-bold text-black mb-4 w-full" 
    :class="`text-h2-${subtitle}`">
        <slot></slot>
    </h2>
</template>