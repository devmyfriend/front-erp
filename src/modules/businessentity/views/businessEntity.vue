<script setup>
import { onBeforeMount } from 'vue';
import { useLayout } from '@/commons/composables/useLayout';
import tableBusinessEntity from '@/modules/businessEntity/components/tableBusinessEntity.vue';
import btnAgregar from '@/commons/ui/btn-agregar/btn-agregar.vue';
import frmSearch from '@/modules/businessEntity/components/frmSearch.vue'
const { setTitle, setViewTitle } = useLayout();

onBeforeMount(() => {
    setTitle('Empresas');
    setViewTitle('Listado de Empresas');
});
</script>

<template>
    <div class="frm flex justify-between mb-6">
        <frmSearch />
        <btnAgregar />
    </div>
    
    <div
    class="w-full items-center flex flex-col flex-grow overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
        <tableBusinessEntity />
    </div>
</template>

<style scoped></style>