<script setup>
import { onBeforeMount, ref } from 'vue';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import tableCountry from '@/modules/SAT/countries/components/tableCountry.vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import { useCountries } from '@/modules/SAT/countries/composables/useCountries.js';
const { cargarPaises, ListadoPaises } = useCountries();
const { setTitle } = useLayout();

onBeforeMount(() => {
    setTitle('Países');
    cargarDatos();
});

const cargarDatos = async () => {
    await cargarPaises();
};

</script>

<template>
    <div class="w-full h-full p-4 flex justify-center items-center">
        <div class="w-full h-full flex flex-col">
            <titleH2> Listado de Países </titleH2>
            <div
                class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
                <tableCountry :ListadoPaises="ListadoPaises" />
            </div>

        </div>
    </div>
</template>

<style scoped></style>