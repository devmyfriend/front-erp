<script setup>

import { ref, watch, onBeforeMount } from 'vue';
import buscadorProductos from '@/modules/products/components/productFinder.vue';
import tablaProductos from '@/modules/products/components/tableProducts.vue'
import btnAgregar from '@/commons/ui/btn-agregar/btn-agregar.vue';
import { useRouter } from 'vue-router';
import { useProductos } from '@/store/productsStore'
import Swal from 'sweetalert2';
import { useWindows } from '@/modules/products/composables/useWindows.js';
import { useListProducts } from '@/modules/products/composables/useListProducts.js';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';

const { borrarProducto: deleteProduct } = useListProducts();
const store = useProductos();
const { setTitle, setBtActivo, setCodigoProducto } = useWindows();
const router = useRouter();
const tipoProducto = ref('Todos');
const ListadoProductos = ref([]);
const ListadoTiposProducto = ref([]);
const CodigoProducto = ref('');

const cargarDatos = () => {
    store.cargarProductos().then(() => {
        if (tipoProducto.value == 'Todos') {
            ListadoProductos.value = store.getProductos;
        } else {
            ListadoProductos.value = store.getProductos.filter(producto => producto.NombreTipoProducto == tipoProducto.value);
            if (ListadoProductos.value.length == 0) {
                Swal.fire({
                    icon: 'info',
                    title: 'No hay productos',
                    text: 'No hay productos de este tipo'
                });
                tipoProducto.value = 'Todos';
            }
        }
    });

    store.cargarTiposProducto().then(() => {
        ListadoTiposProducto.value = store.getTiposProducto;
    });
}
const esperarBusqueda = (texto) => {
    if (texto === undefined) {
        if (tipoProducto.value == 'Todos') {
            cargarDatos();
        } else {
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
    } else {
        ListadoProductos.value = store.getProductos;
    }
}
const editarProducto = (codigoProducto) => {
    CodigoProducto.value = codigoProducto;
    router.push({ name: 'formProducts', params: { tipo: tipoProducto } });
}
const borrarProducto = (producto) => {
    CodigoProducto.value = producto.CodigoProducto;
    deleteProduct(producto);
}
const borrarCodigoProducto = () => {
    setCodigoProducto('');
    CodigoProducto.value = '';
}

onBeforeMount(() => {
    setTitle('Listado de Productos');
    setBtActivo(1);
    cargarDatos();
});

watch(tipoProducto, (newValue, oldValue) => {
    if (newValue == 0) {
        cargarDatos();
    } else {
        tipoProducto.value = newValue;
        cargarDatos();

        if (ListadoProductos.value.length == 0) {
            Swal.fire({
                icon: 'info',
                title: 'No hay productos',
                text: 'No hay productos de este tipo'
            });
            tipoProducto.value = 'Todos';
        }
    }
});
</script>

<template>

    <div class="w-full h-[93%] max-h-[93%] min-h-[93%] p-4">
        <titleH2> Listado de Producto </titleH2>

        <div class="frm flex justify-between mb-6">
            <div>
                <buscadorProductos @eBusqueda="esperarBusqueda" :tipoProducto="tipoProducto" />
            </div>
            <div class="formulario w-full flex flex-row items-center gap-frmGap justify-end">
                <label for="tipoProducto" class="text-labelSize font-labelWeight text-primaryFontColor"> Tipo: </label>
                <select class="h-inputHeight min-w-40 max-w-sm grow 
                p-paddingInput rounded-inputRadius border-inputBorder 
                border-inputWidth text-primaryFontColor text-base" v-model="tipoProducto">
                    <option value="Todos">Todos</option>
                    <option v-for="Tipo in ListadoTiposProducto" :value="Tipo.NombreTipoProducto"> {{
                        Tipo.NombreTipoProducto }}</option>
                </select>
                <btnAgregar :ruta="'formProducts'" @click="borrarCodigoProducto()" />
            </div>
        </div>

        <div
            class="w-full max-h-[66vh] min-h-[66vh] items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base">
            <tablaProductos :ListadoProductos="ListadoProductos" :tipoProducto="tipoProducto"
                @eEditarProducto="editarProducto" @eBorrarProducto="borrarProducto" />
        </div>
    </div>
</template>

<style scoped></style>