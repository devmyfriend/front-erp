<script setup>
import { onMounted, ref } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import { useLayout } from '@/commons/composables/useLayout';
const { setTitle, setViewTitle } = useLayout();
const { theme } = useTheme();

onMounted(() => {
    setTitle('Catálogos');
    setViewTitle('Dashboard de Catálogos');
});
</script>

<template>
    <div class="text-white flex flex-col gap-4 px-4 py-6 items-center justify-between
    rounded-2xl border border-black min-w-max max-w-full overflow-scroll"
        :class="`bg-${theme}-container`">

        <div class="flex flex-col w-full max-w-[80%] overflow-scroll gap-4 py-2 lg:max-w-full lg:items-start lg:max-h-full flex-nowrap lg:flex-wrap">
            <router-link :to="{ name: 'coins' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Monedas </router-link>
            <router-link :to="{ name: 'payment' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Formas/Métodos de Pago </router-link>
            <router-link :to="{ name: 'receipts' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Comprobantes </router-link>
            <router-link :to="{ name: 'countries' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Países </router-link>
            <router-link :to="{ name: 'taxesSAT' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Impuestos </router-link>
            <router-link :to="{ name: 'families' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Familias </router-link>
            <router-link :to="{ name: 'subfamilies' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Subfamilias </router-link>
            <router-link :to="{ name: 'lines' }" class="dashboardItems"
                :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`"> Líneas </router-link>
        </div>

    </div>
</template>

<style scoped>
.dashboardItems {
    @apply px-4 py-4 rounded-lg font-semibold lg:w-full lg:max-w-80 cursor-pointer transition-all duration-300 shadow-sm shadow-black hover:text-white hover:!shadow-md hover:!shadow-black;
}
</style>