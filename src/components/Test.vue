<script setup>
import { onMounted, ref, watch } from 'vue';
import LayoutGeneral from '@/commons/layout/LayoutGeneral.vue';
import buscadorProductos from '@/modules/productos/components/buscadorProductos.vue';
import btnAgregar from '@/commons/ui/btn-agregar/btn-agregar.vue';
import ventanasProductos from '@/modules/productos/components/ventanasProductos.vue';
import Swal from 'sweetalert2';

import { useProductos } from '@/store/index'
const store = useProductos();

const tipoProducto = ref('Todos');
const ListadoProductos = ref([
    {
        NombreLinea: 'Linea 1',
        NombreTipoProducto: 'Tipo 1',
        NombreProducto: 'Producto 1',
        CodigoProducto: '001',
        ProductoId: 1,
        Borrado: false
    },
    {
        NombreLinea: 'Linea 2',
        NombreTipoProducto: 'Tipo 2',
        NombreProducto: 'Producto 2',
        CodigoProducto: '002',
        ProductoId: 2,
        Borrado: false
    },
    {
        NombreLinea: 'Linea 3',
        NombreTipoProducto: 'Tipo 3',
        NombreProducto: 'Producto 3',
        CodigoProducto: '003',
        ProductoId: 3,
        Borrado: true
    },
    {
        NombreLinea: 'Linea 4',
        NombreTipoProducto: 'Tipo 4',
        NombreProducto: 'Producto 4',
        CodigoProducto: '004',
        ProductoId: 4,
        Borrado: false
    },
    {
        NombreLinea: 'Linea 5',
        NombreTipoProducto: 'Tipo 5',
        NombreProducto: 'Producto 5',
        CodigoProducto: '005',
        ProductoId: 5,
        Borrado: false
    },
    {
        NombreLinea: 'Linea 2',
        NombreTipoProducto: 'Tipo 1',
        NombreProducto: 'Producto 6',
        CodigoProducto: '002',
        ProductoId: 6,
        Borrado: false
    },
    {
        NombreLinea: 'Linea 6',
        NombreTipoProducto: 'Tipo 6',
        NombreProducto: 'Producto 6',
        CodigoProducto: '006',
        ProductoId: 6,
        Borrado: false
    },
    {
        NombreLinea: 'Linea 7',
        NombreTipoProducto: 'Tipo 6',
        NombreProducto: 'Producto 7',
        CodigoProducto: '007',
        ProductoId: 7,
        Borrado: false
    }
]);

const ListadoTiposProducto = ref([
    {
        NombreTipoProducto: 'Tipo 1'
    },
    {
        NombreTipoProducto: 'Tipo 2'
    },
    {
        NombreTipoProducto: 'Tipo 3'
    },
    {
        NombreTipoProducto: 'Tipo 4'
    },
    {
        NombreTipoProducto: 'Tipo 5'
    }
]);

onMounted(() => {
    cargarDatos();
});

const cargarDatos = () => {
    store.cargarProductos().then(() =>{ 
        ListadoProductos.value = store.getProductos;
        console.log('Productos cargados: \n' + JSON.stringify(ListadoProductos.value.length));
    });

    store.cargarTiposProducto().then(() => {
        ListadoTiposProducto.value = store.getTiposProducto;
        console.log('Tipos de Producto cargados: \n' + JSON.stringify(ListadoTiposProducto.value.length));
    });
}

const esperarBusqueda = (texto) => {
    if (texto === undefined) {
        if(tipoProducto.value == 'Todos'){
            cargarDatos();
        }else{
            store.cargarProductos().then(() => {
                ListadoProductos.value = store.getProductos.filter(producto => producto.NombreTipoProducto == tipoProducto.value);
                if (ListadoProductos.value.length == 0) {
                    Swal.fire({
                        icon: 'info',
                        title: 'No hay productos',
                        text: 'No hay productos de este tipo'
                    });
                    tipoProducto.value = 'Todos';
                }
            });
        }
    }else{
        ListadoProductos.value = store.getProductos;
    }
}

watch (tipoProducto, (newValue, oldValue) => {
    if (newValue == 0) {
        cargarDatos();
    }else{
        tipoProducto.value = newValue;
        cargarDatos();
    
        if (ListadoProductos.value.length == 0) {
                Swal.fire({
                    icon: 'info',
                    title: 'No hay productos',
                    text: 'No hay productos de este     '
                });
                tipoProducto.value = 'Todos';
            }
    }
    console.log('Tipo de Producto cambiado a: ' + tipoProducto.value);
});

</script>

<template>
    <LayoutGeneral>
        <template v-slot:Titulo>
            Productos
        </template>
        <template v-slot:Ventanas>
                <ventanasProductos :tipoProducto="tipoProducto" />
        </template>

        <template v-slot:Contenido>
                <div class="w-full h-full max-h-full min-h-full bg-container">
                <h2 class="text-h2Size font-h2Weight text-primaryFontColor m-h2Margin"> Listado de Productos </h2>
                
                <div class="frm flex justify-between m-frmMargin">
                    <div>
                        <buscadorProductos @eBusqueda="esperarBusqueda" :tipoProducto="tipoProducto"/>
                    </div>
                    <div class="formulario w-full flex flex-row items-center gap-frmGap justify-end">
                        <label for="tipoProducto" class="text-labelSize font-labelWeight text-primaryFontColor"> Tipo: </label>
                        <select class="h-inputHeight min-w-40 max-w-sm grow p-paddingInput rounded-inputRadius border-inputBorder border-inputWidth text-primaryFontColor" v-model="tipoProducto">
                            <option value="Todos">Todos</option>
                            <option v-for="Tipo in ListadoTiposProducto" :value="Tipo.NombreTipoProducto"> {{ Tipo.NombreTipoProducto }}</option>
                        </select>
                        <btnAgregar :ruta="'login'"test/>
                    </div>
                </div>
        
                <div class="w-full max-h-72 items-center flex flex-col overflow-y-scroll text-secondaryFontColor">
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
                                        <img src="/svg/tableIcons/edit.svg" alt="Editar" class="cursor-pointer" @click="editarProducto(producto)"> 
                                        <img src="/svg/tableIcons/trash.svg" alt="Borrar" class="cursor-pointer" @click="borrarProducto(tipoProducto, producto.ClaveProducto)" v-if="producto.Borrado == 0">
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </template>
        
    </LayoutGeneral>
</template>

<style scoped>
</style>