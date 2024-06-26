<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import tableCoins from '@/modules/SAT/coins/components/tableCoins.vue';
import coinFinder from '@/modules/SAT/coins/components/coinFinder.vue';
import { useLayout } from '@/modules/SAT/coins/composables/useLayout.js';
const { setTitle, getTitle } = useLayout();

import { coinsStore } from '@/store/coinsStore';

const store = coinsStore();
const ListadoMonedas = ref([]);

onBeforeMount(() => {
    setTitle('Monedas SAT');
    cargarDatos();
    console.log('El titulo es: ', getTitle());  
});

const cargarDatos = () => {
    store.cargarMonedas().then(() => {
        ListadoMonedas.value = store.getMonedas;
    });
};

const handleBusqueda = (texto) => {
    if (texto) {
        store.buscarMonedas(texto).then(() => {
            ListadoMonedas.value = store.getMonedas;
        });
    } else {
        console.log('Sin texto');
        cargarDatos();
    }
};

</script>

<template>
    <div class="w-full h-full p-4 flex justify-center items-center">
        <div class="w-full h-full flex flex-col">
            <titleH2> Listado de Monedas </titleH2>

            <div class="flex flex-col min-w-full min-h-9 max-w-full max-h-9">
                <coinFinder @eBusqueda="handleBusqueda" />
            </div>

            <div class="flex w-full max-h-[80vh] bg-white flex-col mt-4">
            </div>

            <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base">
                <tableCoins :ListadoMonedas="ListadoMonedas"/>
            </div>

        </div>
    </div>
</template>

<style scoped></style>