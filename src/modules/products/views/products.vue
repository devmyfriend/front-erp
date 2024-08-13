<script setup>
    import { ref, watch, onBeforeMount } from 'vue';
    import buscadorProductos from '@/modules/products/components/productFinder.vue';
    import tablaProductos from '@/modules/products/components/tableProducts.vue'
    import { useRouter } from 'vue-router';
    import { useProductos } from '@/store/productsStore'
    import { useWindows } from '@/modules/products/composables/useWindows.js';
    import { useListProducts } from '@/modules/products/composables/useListProducts.js';
    import Swal from 'sweetalert2';
    import { useLayout } from '@/commons/composables/useLayout';
    import { useTheme } from '@/commons/composables/theme';
    import ventanas from '@/modules/products/components/windows.vue';

    const { setTitle, setViewTitle } = useLayout();
    const { theme } = useTheme();
    const { borrarProducto: deleteProduct } = useListProducts();
    const store = useProductos();
    const { setCodigoProducto } = useWindows();

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

    const tabsCollection = [
        { name: 'Listado', route: 'productsList' },
        { name: 'Formulario', route: 'productsForm' }
    ];

    onBeforeMount(() => {
        cargarDatos();
        setViewTitle('Listado de Productos');
        setTitle('Productos');
        sessionStorage.setItem('btnActivo', 0);
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
    <div class="flex sticky top-0 z-20">
        <ventanas :tabsCollection="tabsCollection" />
    </div>

    <div class="flex-grow flex flex-col">
        <div class="flex flex-row mb-6 justify-between flex-wrap gap-4 mt-4">
            <div>
                <buscadorProductos @eBusqueda="esperarBusqueda" :tipoProducto="tipoProducto" />
            </div>

            <div class="min-h-[35px]">
                <label for="tipoProducto" class="text-labelSize font-labelWeight text-white mr-1"> Tipo </label>
                <select class="h-inputHeight min-w-40 max-w-sm 
                p-paddingInput rounded-inputRadius border-inputBorder 
                border-inputWidth text-black text-base" id="tipoProducto" v-model="tipoProducto">
                    <option value="Todos">Todos</option>
                    <option v-for="Tipo in ListadoTiposProducto" :value="Tipo.NombreTipoProducto"> {{
                        Tipo.NombreTipoProducto }}</option>
                </select>
            </div>
        </div>

        <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
            <tablaProductos :ListadoProductos="ListadoProductos" :tipoProducto="tipoProducto"
                @eEditarProducto="editarProducto" @eBorrarProducto="borrarProducto" />
                <!-- <deleteModal :id="modalData" v-if="modalData !== null" @eEliminar="borrarRegistro"
                @eCancelar="esperarCancelar" /> -->
        </div>
    </div>
</template>

<style scoped></style>