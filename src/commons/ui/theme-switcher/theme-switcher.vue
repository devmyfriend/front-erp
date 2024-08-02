<script setup>
import { useTheme } from '@/commons/composables/theme';
import { ref, onBeforeMount, watch } from 'vue';

const { theme, setTheme } = useTheme();
const temaActual = ref('');

function cambiarTema() {
    setTheme(temaActual.value);
}

onBeforeMount(() => {
    temaActual.value = theme.value;
    setTheme(temaActual.value);
});

watch(() => theme.value, (newValue) => {
    temaActual.value = newValue;
});
</script>

<template>
    <select class="px-4 max-w-max max-h-full py-0 h-full text-[0.8rem]"
            v-model="temaActual" @change="cambiarTema">
        <option value="MyFriend">MyFriend</option>
        <option value="TheFit">The Fit Gym / The Fit Bar</option>
        <option value="Bonavida">Bonavida</option>
    </select>
</template>
