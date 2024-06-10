<script setup>
import { onUpdated, ref, watch } from 'vue';

const emits = defineEmits(['eEditarProducto', 'eBorrarProducto']);
const props = defineProps({
    ListadoProductos: {
        type: Array,
        default: {}
    },
    tipoProducto: {
        type: String,
        default: ''
    }
});

const ListadoProductos = ref({});

const editarProducto = (codigoProducto) => {
    emits.eEditarProducto(codigoProducto);
    console.log('Se lanzó el emit de editar con el dato: ' + codigoProducto);
}
const borrarProducto = (tipoProducto, codigoProducto) => {
    emits.eBorrarProducto(tipoProducto, codigoProducto);
    console.log('Se lanzó el emit de borrar. Tipo de producto: ' + tipoProducto + '\nY el código es: ' + codigoProducto);
}
watch(() => props.ListadoProductos, (newValue, oldValue) => {
    if (newValue != oldValue) {
        ListadoProductos.value = newValue;
    }
});
</script>

<template>
    <table class="w-full table-fixed">
        <thead class="sticky top-0 bg-primaryHeaderTable">
            <tr class="sticky top-0 bg-primaryHeaderTable h-primaryHeaderTableHeight rounded-primaryHeaderTableRadius">
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline first:rounded-l-primaryHeaderTableRadius">Producto Id</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline">Código de Producto</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline">Nombre</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline">Tipo Producto</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline">Línea</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline last:rounded-r-primaryHeaderTableRadius">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr 
            class="text-primaryFontColor" 
            v-for="(producto, index) in ListadoProductos" 
            :key="index"
            :class="{'bg-primaryBodyTable': (index % 2 == 1 && producto.Borrado == 0),
                'bg-secondaryBodyTable': (index % 2 == 0 && producto.Borrado == 0),
                'bg-disableBodyTable': (producto.Borrado == 1),'text-white': (producto.Borrado == 1), 'font-medium': (producto.Borrado == 1) }"
                >
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 first:rounded-l-primaryHeaderTableRadius text-center truncate">
                    {{ producto.ProductoId }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ producto.CodigoProducto }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    {{ producto.NombreProducto }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ producto.NombreTipoProducto }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ producto.NombreLinea }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 last:rounded-r-primaryHeaderTableRadius items-center justify-center">
                    <div class="w-full h-full text-center items-center justify-center flex">
                        <img src="/svg/tableIcons/edit.svg" alt="Editar" class="cursor-pointer" @click="editarProducto(producto.CodigoProducto)"> 
                        <img src="/svg/tableIcons/trash.svg" alt="Borrar" class="cursor-pointer" @click="borrarProducto(tipoProducto, producto.CodigoProducto)" v-if="producto.Borrado == 0">
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>

</style>