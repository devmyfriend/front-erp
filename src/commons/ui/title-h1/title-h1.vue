<script setup>
    import { computed, onBeforeMount, ref, watch } from 'vue';
    import { useTheme } from '@/commons/composables/useTheme';
    const { theme } = useTheme();
    const temaActual = ref('');

    watch(() => theme.value, (newValue) => {
        temaActual.value = newValue;
    });

    onBeforeMount (() => {
        const savedTitle = localStorage.getItem('theme');
        console.log('OnBeforeMount:' + savedTitle);
        if (savedTitle) {
            temaActual.value = savedTitle;
            console.log('El titulo guardado es: ', savedTitle);
        }
    });

    const claseH1 = computed(() => {
        return `text-h1-${temaActual.value}`;
    });
</script>

<template>
    <h1 class="text-[3vh] font-bold capitalize" :class="claseH1">
        <slot></slot>
    </h1>
</template>