<script setup>
import ventanas from '@/commons/components/windows.vue';

import productFinder from '@/modules/products/components/productFinder.vue';
import tableProducts from '@/modules/products/components/tableProducts.vue'
import btnAgregar from '@/commons/ui/btn-agregar/btn-agregar.vue';

import { onBeforeMount, ref, watch } from 'vue';
import { useProducts } from '@/modules/products/composables/useProducts';
import { useLayout } from '@/commons/composables/useLayout';
import { useWindows } from '@/commons/composables/useWindows';
const { productsTypeCollection, productType, loadProducts, handleFinder, setProductType } = useProducts();
const { setActiveTab, setTabsCollection } = useWindows();
const { setTitle, setViewTitle } = useLayout();

onBeforeMount(() => {
    setTitle('Productos');
    setViewTitle('Listado de Productos');
    setTabsCollection([
        { name: 'Listado', route: 'productsList' },
        { name: 'Formulario', route: 'productsForm' }
    ]);
    setActiveTab(0);
    loadProducts();
});

watch(productType, (newValue, oldValue) => {
    console.log('Se cambió el productType');
    
    if (newValue !== oldValue) {
        setProductType(newValue)
    }
});
</script>

<template>
    <div class="flex sticky top-0 z-20">
        <ventanas />
    </div>

    <div class="flex-grow flex flex-col">
        <div class="flex flex-row mb-6 mt-4 justify-between flex-wrap min-h-inputHeight gap-4 md:gap-0">
            <div class="flex flex-row h-inputHeight gap-4 w-full md:w-auto">
                <productFinder @eBusqueda="handleFinder" />
            </div>

            <div class="flex gap-4 items-center justify-center w-full md:w-auto h-inputHeight">
                <label for="tipoProducto" class="text-labelSize font-labelWeight text-white mr-1"> Tipo </label>
                <select class="h-inputHeight min-w-40 w-full md:w-auto
                p-paddingInput rounded-inputRadius border-inputBorder 
                border-inputWidth text-black text-base" id="tipoProducto" v-model="productType">
                    <option value="Todos">Todos</option>
                    <option v-for="Tipo in productsTypeCollection" :value="Tipo.NombreTipoProducto"> {{
                        Tipo.NombreTipoProducto }}</option>
                </select>

                <btnAgregar :ruta="`productsForm`" />
            </div>
        </div>
    
        <div class="w-full items-center flex flex-col flex-grow overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
            <tableProducts />
        </div>
    </div>
</template>

<style scoped></style>