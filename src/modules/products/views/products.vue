<script setup>

import { ref, watch, onBeforeMount, inject, onUpdated, onMounted } from 'vue';
import buscadorProductos from '@/modules/products/components/productFinder.vue';
import tablaProductos from '@/modules/products/components/tableProducts.vue'
import btnAgregar from '@/commons/ui/btn-agregar/btn-agregar.vue';
import { useRouter } from 'vue-router';
import { useProductos } from '@/store/productsStore'
import { windowLayoutStore } from '@/store/windowLayoutStore';
import ventanas from '@/modules/products/components/windows.vue';
import { useWindows } from '@/modules/products/composables/useWindows.js';
import { useListProducts } from '@/modules/products/composables/useListProducts.js';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import Swal from 'sweetalert2';
import { useRoute } from 'vue-router';

import { useTheme } from '@/commons/composables/useTheme';
const { theme } = useTheme();

const route = useRoute();
const windowStore = windowLayoutStore();
const { borrarProducto: deleteProduct } = useListProducts();
const store = useProductos();
const { setCodigoProducto } = useWindows();
const setTitleContent = inject('setTitleContent');
const setWindowContent = inject('setWindowContent');

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
const updateTitle = () => {
  setTitleContent('Productos');
  setWindowContent(ventanas);
};
onBeforeMount(() => {
    cargarDatos();
    updateTitle();
});

onUpdated(() => {
    windowStore.setBtActivo(1);
});

watch(tipoProducto, (newValue) => {
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
                <label for="tipoProducto" class="text-labelSize font-labelWeight text-white"> Tipo: </label>
                <select class="h-inputHeight min-w-40 max-w-sm grow 
                p-paddingInput rounded-inputRadius border-inputBorder 
                border-inputWidth text-black text-base" v-model="tipoProducto">
                    <option value="Todos">Todos</option>
                    <option v-for="Tipo in ListadoTiposProducto" :value="Tipo.NombreTipoProducto"> {{
                        Tipo.NombreTipoProducto }}</option>
                </select>
                <btnAgregar :ruta="'formProducts'" @click="borrarCodigoProducto()" />

            </div>
        </div>
        <div
            class="w-full max-h-[66vh] min-h-[66vh] items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
            <tablaProductos 
                :ListadoProductos="ListadoProductos" :tipoProducto="tipoProducto"
                @eEditarProducto="editarProducto" @eBorrarProducto="borrarProducto" 
            />
        </div>
    </div>
</template>

<style scoped></style>