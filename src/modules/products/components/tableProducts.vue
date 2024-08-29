<script setup>
import { ref, defineAsyncComponent, onMounted, watch } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import { useProducts } from '@/modules/products/composables/useProducts';
import { useRouter } from 'vue-router';

const editIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/editIco.vue'));
const trashIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/trashIco.vue'));
const modalEliminar = defineAsyncComponent(() => import('@/commons/ui/modals/deleteModal.vue'));

const { theme } = useTheme();
const router = useRouter();
const { productsCollection, productCode, loadProducts, setProductCode } = useProducts();
const registroParaBorrar = ref(null);

const handleCancelar = () => {
    registroParaBorrar.value = null;
};

onMounted(() => {
    loadProducts();
});
watch(productCode, () => {
    if (productCode.value) {
        router.push({ name: 'productsFormEdit', params: { CodigoProducto: productCode.value } });
    }
});
</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th :class="`bg-${theme}-headers`">ID</th>
                <th :class="`bg-${theme}-headers`">Nombre</th>
                <th class="hidden lg:table-cell" :class="`bg-${theme}-headers`">Código del Producto</th>
                <th :class="`bg-${theme}-headers`">Tipo Producto</th>
                <th class="hidden lg:table-cell" :class="`bg-${theme}-headers`">Puntos</th>
                <th class="hidden lg:table-cell" :class="`bg-${theme}-headers`">Serie</th>
                <th :class="`bg-${theme}-headers`">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(producto, index) in productsCollection" :key="index" class="border-x-[1px] border-white" :class="[
                !producto.Borrado ? `text-${theme}-text bg-white` : '',
                producto.Borrado ? `text-${theme}-text bg-${theme}-disabled` : ''
            ]">
                <td class="general-cell border-l-primaryTableWidth text-center">
                    {{ producto.ProductoId }}
                </td>
                <td class="general-cell border-l-primaryTableWidth text-start">
                    {{ producto.NombreProducto }}
                </td>
                <td class="general-cell hidden lg:table-cell border-l-primaryTableWidth text-center">
                    {{ producto.CodigoProducto }}
                </td>
                <td class="general-cell border-l-primaryTableWidth text-center">
                    {{ producto.NombreTipoProducto }}
                </td>
                <td class="general-cell hidden lg:table-cell border-l-primaryTableWidth text-center">
                    {{ producto.Puntos }}
                </td>
                <td class="general-cell hidden lg:table-cell border-l-primaryTableWidth text-center">
                    {{ producto.Serie ? 'Sí' : 'No' }}
                </td>
                <td class="general-cell border-l-primaryTableWidth ">
                    <div class="flex w-full items-center justify-center min-w-16">
                        <div
                            class="min-w-16 h-full text-center items-center lg:justify-start justify-center flex gap-1 lg:gap-1 flex-wrap">
                            <editIco class="cursor-pointer shrink" @click="setProductCode(producto.CodigoProducto)" />
                            <trashIco class="cursor-pointer shrink" @click="registroParaBorrar = producto"
                                v-if="producto.Borrado === 0" />
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <modalEliminar v-if="registroParaBorrar != null" :registro="registroParaBorrar"
        :tipoRegistro="registroParaBorrar.NombreTipoProducto" :id="registroParaBorrar.CodigoProducto"
        @eEliminar="registroParaBorrar = null" @eCancelar="handleCancelar" />
</template>

<style scoped></style>
