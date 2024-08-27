<script setup>
import { ref, watch, defineAsyncComponent } from 'vue';
import { useWindows } from '@/modules/products/composables/useWindows.js';
import { useTheme } from '@/commons/composables/theme'
const editIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/editIco.vue'));
const trashIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/trashIco.vue'));
const modalEliminar = defineAsyncComponent(() => import('@/commons/ui/modals/deleteModal.vue'));

const { theme } = useTheme();
const { setCodigoProducto } = useWindows();

const productsCollection = ref([]);
const registroParaBorrar = ref(null);
const props = defineProps({
    productsCollection: {
        type: Array,
        default: () => []
    },
    tipoProducto: {
        type: String,
        default: ''
    }
});
const emits = defineEmits(['eEditarProducto', 'edeleteProduct']);
const editarProducto = (codigoProducto) => {
    emits('eEditarProducto', codigoProducto);
    setCodigoProducto(codigoProducto);
};
const deleteProduct = (producto) => {
    registroParaBorrar.value = producto;
};
const handleEliminar = (producto) => {
    registroParaBorrar.value = null;

    if (producto) {
        emits('edeleteProduct', producto);
    }
};
const handleCancelar = () => {
    registroParaBorrar.value = null;
};

watch(() => props.productsCollection, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        productsCollection.value = newValue;
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
                            <editIco class="cursor-pointer shrink" @click="editarProducto(producto.CodigoProducto)" />
                            <trashIco class="cursor-pointer shrink" @click="deleteProduct(producto)"
                                v-if="producto.Borrado === 0" />
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <modalEliminar v-if="registroParaBorrar != null" :registro="registroParaBorrar"
        :tipoRegistro="registroParaBorrar.NombreTipoProducto" :id="registroParaBorrar.CodigoProducto"
        @eEliminar="handleEliminar" @eCancelar="handleCancelar" />
</template>

<style scoped></style>
