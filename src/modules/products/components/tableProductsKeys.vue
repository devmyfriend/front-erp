<script setup>
import { onMounted, defineAsyncComponent } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import { useProductsKeys } from '@/modules/products/composables/useProductsKeys';
const editIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/editIco.vue'));
const trashIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/trashIco.vue'));
const { productsKeysCollection, loadProductsKeys } = useProductsKeys();
const { theme } = useTheme();

const emits = defineEmits(['eAccion', 'eSelect']);
const props = defineProps({
    editable: {
        type: Boolean,
        default: false
    },
    clickeable: {
        type: Boolean,
        default: false
    }
});

const handleAccion = (productKey, accion) => {
    emits('eAccion', [productKey, accion]);
};
const selectItem = (productKey) => {
    emits('eSelect', productKey);
};

onMounted(() => {
    loadProductsKeys();
});

</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th :class="`bg-${theme}-headers`">Clave</th>
                <th :class="`bg-${theme}-headers`">Nombre</th>
                <th :class="`bg-${theme}-headers `">Status</th>
                <th v-if="editable" :class="`bg-${theme}-headers`"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(productKey, index) in productsKeysCollection" :key="index"
                :class="[productKey.Activo ? `text-${theme}-text bg-white`
                    : `text-${theme}-text bg-${theme}-disabled`, (clickeable && productKey.Activo) ? 'cursor-pointer hover:font-bold transition-all duration-100' : '', (clickeable && !productKey.Activo) ? 'cursor-not-allowed' : '']"
                @click="(clickeable && productKey.Activo) ? selectItem(productKey) : null">
                <td class="general-cell text-center">
                    {{ productKey.ClaveProductoServicio }}
                </td>
                <td class="general-cell border-l-primaryTableWidth text-center">
                    {{ productKey.Descripcion }}
                </td>
                <td class="general-cell border-l-primaryTableWidth text-center">
                    {{ productKey.Activo ? 'Activo' : 'Inactivo' }}
                </td>
                <td v-if="editable"
                    class="general-cell border-l-primaryTableWidth text-start">
                    <div class="w-full h-full flex items-center justify-center">
                        <editIco class="cursor-pointer" @click="handleAccion(productKey, 1)" />
                        <trashIco class="cursor-pointer" @click="handleAccion(productKey, 2)" />
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>