<script setup>
import { onUpdated, ref, watch } from 'vue';
import { useWindows } from '@/modules/products/composables/useWindows.js';
import modalEliminar from '@/commons/ui/modals/deleteModal.vue';

const { setCodigoProducto, getCodigoProducto } = useWindows();

const props = defineProps({
    ListadoProductos: {
        type: Array,
        default: () => []
    },
    tipoProducto: {
        type: String,
        default: ''
    }
});
const emits = defineEmits(['eEditarProducto', 'eBorrarProducto']);


const ListadoProductos = ref([]);

const editarProducto = (codigoProducto) => {
    emits('eEditarProducto', codigoProducto);
    setCodigoProducto(codigoProducto);
};

const registroParaBorrar = ref(null);

const borrarProducto = (producto) => {
    registroParaBorrar.value = producto;
};

const handleEliminar = (producto) => {
    registroParaBorrar.value = null;

    if (producto) {
        emits('eBorrarProducto', producto);
    }
};

const handleCancelar = () => {
    registroParaBorrar.value = null;
};

watch(() => props.ListadoProductos, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        ListadoProductos.value = newValue;
    }
});
</script>

<template>
    <table class="w-full table-fixed">
        <thead class="sticky top-0 bg-transparent">
            <tr class="sticky top-0 h-primaryHeaderTableHeight">
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tl-xl">ID</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-t-[1px]">Nombre</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-t-[1px]">Código del Producto</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-t-[1px]">Tipo Producto</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-t-[1px]">Puntos</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-t-[1px]">Serie</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tr-xl">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-primaryFontColor" v-for="(producto, index) in ListadoProductos" :key="index"
                :class="{
                    'bg-primaryBodyTable': (index % 2 === 1 && producto.Borrado === 0),
                    'bg-secondaryBodyTable': (index % 2 === 0 && producto.Borrado === 0),
                    'bg-disableBodyTable': (producto.Borrado === 1), 'text-white': (producto.Borrado === 1), 'font-medium': (producto.Borrado === 1)
                }">
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ producto.ProductoId }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    {{ producto.NombreProducto }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ producto.CodigoProducto }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ producto.NombreTipoProducto }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ producto.Puntos }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ producto.Serie ? 'Sí' : 'No' }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 ">
                    <div class="flex w-full items-center justify-center min-w-16">
                        <div class="min-w-16 h-full text-center items-center lg:justify-start justify-center flex lg:gap-1 flex-wrap">
                            <img src="/svg/tableIcons/editIco.svg" alt="Editar" class="cursor-pointer w-4 lg:w-6"
                                @click="editarProducto(producto.CodigoProducto)">
                            <img src="/svg/tableIcons/trashIco.svg" alt="Borrar" class="cursor-pointer w-4 lg:w-6"
                                @click="borrarProducto(producto)" v-if="producto.Borrado === 0">
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <modalEliminar v-if="registroParaBorrar != null" :registro="registroParaBorrar" :tipoRegistro="registroParaBorrar.NombreTipoProducto" :id="registroParaBorrar.CodigoProducto" @eEliminar="handleEliminar" @eCancelar="handleCancelar"/>
</template>

<style scoped>
</style>
