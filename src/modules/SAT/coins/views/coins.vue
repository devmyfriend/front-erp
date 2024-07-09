<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import tableCoins from '@/modules/SAT/coins/components/tableCoins.vue';
import coinFinder from '@/modules/SAT/coins/components/coinFinder.vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import { useCoins } from '@/modules/SAT/coins/composables/useCoins.js';
const { cargarMonedas, buscarMonedas, ListadoMonedas  } = useCoins();
const { setTitle, getTitle } = useLayout();

onBeforeMount(() => {
    setTitle('Monedas SAT');
});
onMounted( async () => {
    await cargarDatos();
});
const cargarDatos = async () => {
    await cargarMonedas();
};
const handleBusqueda = async (texto) => {
    if (texto) {
        await buscarMonedas(texto);
    } else {
        await cargarDatos();
    }
};

</script>

<template>
    <div class="w-full h-full p-4 flex justify-center items-center">
        <div class="w-full h-full flex flex-col">
            <titleH2> Listado de Monedas </titleH2>

            <div class="flex flex-col min-w-full min-h-9 max-w-full max-h-9 mb-6">
                <coinFinder @eBusqueda="handleBusqueda" />
            </div>
            <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
                <tableCoins :ListadoMonedas="ListadoMonedas"/>
            </div>

        </div>
    </div>
</template>

<style scoped></style>