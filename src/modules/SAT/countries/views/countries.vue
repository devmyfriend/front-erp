<script setup>
import { onBeforeMount, ref } from 'vue';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import tableCountry from '@/modules/SAT/countries/components/tableCountry.vue';
import { useLayout } from '@/commons/composables/useLayout.js';
const { setTitle } = useLayout();

import { countryStore } from '@/store/countryStore';

const store = countryStore();
const ListadoPaises = ref([]);

onBeforeMount(() => {
    setTitle('Países');
    cargarDatos();
});

const cargarDatos = () => {
    store.cargarPaises().then(() => {
        ListadoPaises.value = store.getPaises;
    });
};

</script>

<template>
    <div class="w-full h-full p-4 flex justify-center items-center">
        <div class="w-full h-full flex flex-col">
            <titleH2> Listado de Países </titleH2>
            <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
                <tableCountry :ListadoPaises="ListadoPaises"/>
            </div>

        </div>
    </div>
</template>

<style scoped></style>