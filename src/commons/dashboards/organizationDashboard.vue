<script setup>
import { onMounted } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import { useLayout } from '@/commons/composables/useLayout';
const { setTitle, setViewTitle } = useLayout();
const { theme } = useTheme();

onMounted(() => {
    setTitle('Organización');
    setViewTitle('Dashboard de Organización');
});
</script>

<template>
    <div class="text-white flex flex-col gap-4 px-4 py-6 items-center justify-between
    rounded-2xl border border-black min-w-max max-w-full overflow-scroll"
        :class="`bg-${theme}-container`">

        <div class="flex flex-col w-full max-w-[80%] overflow-scroll gap-4 py-2 lg:max-w-full lg:items-start lg:max-h-full flex-nowrap lg:flex-wrap">
            <router-link :to="{ name: 'businessEntitiesList' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Empresas </router-link>
            <router-link :to="{ name: 'businessEntitiesForm' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Formulario de Empresas </router-link>
        </div>

    </div>
</template>

<style scoped>
.dashboardItems {
    @apply px-4 py-4 rounded-lg font-semibold lg:w-full lg:max-w-80 cursor-pointer transition-all duration-300 shadow-sm shadow-black hover:text-white hover:!shadow-md hover:!shadow-black;
}
</style>