<script setup>
import { onUpdated, ref, watch } from 'vue';
import { useWindows } from '@/modules/products/composables/useWindows.js';
import modalEliminar from '@/commons/ui/modals/deleteModal.vue';
import { useTheme } from '@/commons/composables/theme'
import trashIco from '@/commons/ui/icons/tableIcons/trashIco.vue';
import editIco from '@/commons/ui/icons/tableIcons/editIco.vue';
const { theme } = useTheme();

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
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline rounded-tl-xl" :class="`bg-${theme}-headers`">ID</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline rounded-t-[1px]" :class="`bg-${theme}-headers`">Nombre</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline rounded-t-[1px]" :class="`bg-${theme}-headers`">Código del Producto</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline rounded-t-[1px]" :class="`bg-${theme}-headers`">Tipo Producto</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline rounded-t-[1px]" :class="`bg-${theme}-headers`">Puntos</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline rounded-t-[1px]" :class="`bg-${theme}-headers`">Serie</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline rounded-tr-xl" :class="`bg-${theme}-headers`">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(producto, index) in ListadoProductos" :key="index"
            class="border-x-[1px] border-white"
            :class="[
                !producto.Borrado ? `text-${theme}-text bg-white` : '',
                producto.Borrado ? `text-${theme}-text bg-${theme}-disabled` : ''
            ]">
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

                            <editIco class="cursor-pointer w-4 lg:w-6" @click="editarProducto(producto.CodigoProducto)" :color="'black'" />
                            <trashIco class="cursor-pointer w-4 lg:w-6" @click="borrarProducto(producto)" :color="'black'" v-if="producto.Borrado === 0"/>
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
