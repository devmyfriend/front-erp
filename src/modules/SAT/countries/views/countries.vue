<script setup>
import tableCoins from '@/modules/SAT/coins/components/tableCoins.vue';

import { onMounted, onBeforeMount, ref } from 'vue';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import tableCountry from '@/modules/SAT/countries/components/tableCountry.vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import { useCountries } from '@/modules/SAT/countries/composables/useCountries.js';
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
const { cargarPaises, ListadoPaises } = useCountries();
const { setTitle, setViewTitle } = useLayout();

onBeforeMount(() => {
    setTitle('Países');
    setViewTitle('Listado de Países');
});

onMounted(async () => {
    await cargarDatos();
});

const cargarDatos = async () => {
    await cargarPaises();
};


</script>

<template>
    <!-- <titleH2> Listado de Países </titleH2> -->
    <div
        class="w-full mt-6 items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
        <tableCountry :ListadoPaises="ListadoPaises" />
    </div>
</template>

<style scoped></style>
