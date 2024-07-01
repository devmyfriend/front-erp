<script setup>
import { onBeforeMount, ref } from 'vue';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import tableTaxes from '@/modules/SAT/tax/components/tableTaxes.vue';
import { useLayout } from '@/commons/composables/useLayout.js';
const { setTitle } = useLayout();

import { taxStore } from '@/store/taxStore';

const store = taxStore();
const ListadoImpuestos = ref([]);

onBeforeMount(() => {
    setTitle('Impuestos SAT');
    cargarDatos();
});

const cargarDatos = () => {
    store.cargarImpuestos().then(() => {
        ListadoImpuestos.value = store.getImpuestos;
    });
};

</script>

<template>
    <div class="w-full h-full p-4 flex justify-center items-center">
        <div class="w-full h-full flex flex-col">
            <titleH2> Listado de Impuestos SAT</titleH2>
            <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
                <tableTaxes :ListadoImpuestos="ListadoImpuestos"/>
            </div>

        </div>
    </div>
</template>

<style scoped></style>