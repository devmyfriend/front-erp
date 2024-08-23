<script setup>
    import buscadorProductos from '@/modules/products/components/productFinder.vue';
    import tablaProductos from '@/modules/products/components/tableProducts.vue'
    import ventanas from '@/commons/components/windows.vue';
    import Swal from 'sweetalert2';
    import btnAgregar from '@/commons/ui/btn-agregar/btn-agregar.vue';
    import { useRouter } from 'vue-router';
    import { ref, watch, onBeforeMount } from 'vue';
    import { useProductos } from '@/store/product/productsStore'
    import { useListProducts } from '@/modules/products/composables/useListProducts.js';
    import { useLayout } from '@/commons/composables/useLayout';
    import { useTheme } from '@/commons/composables/theme';
    import { useWindows } from '@/commons/composables/useWindows'; 
    const { setActiveTab, setTabsCollection } = useWindows();
    
    const { setTitle, setViewTitle } = useLayout();
    const { theme } = useTheme();
    const { deleteProduct } = useListProducts();
    const store = useProductos();

    const tipoProducto = ref('Todos');
    const productsTypeCollection = ref([]);
    const productsCollection = ref([]);
    const CodigoProducto = ref('');

    const router = useRouter();
    
    const cargarDatos = () => {
        store.loadProducts().then(() => {
            if (tipoProducto.value == 'Todos') {
                productsCollection.value = store.getProducts;
            } else {
                productsCollection.value = store.getProducts.filter(producto => producto.NombreTipoProducto == tipoProducto.value);
                if (productsCollection.value.length == 0) {
                    Swal.fire({
                        icon: 'info',
                        title: 'No hay productos',
                        text: 'No hay productos de este tipo'
                    });
                    tipoProducto.value = 'Todos';
                }
            }
        });

        store.loadTypeProducts().then(() => {
            productsTypeCollection.value = store.getTypeProducts;
        });
    }
    const esperarBusqueda = (texto) => {
        if (texto === undefined) {
            if (tipoProducto.value == 'Todos') {
                cargarDatos();
            } else {
                store.loadProducts().then(() => {
                    productsCollection.value = store.getProducts.filter(producto => producto.NombreTipoProducto == tipoProducto.value);
                    if (productsCollection.value.length == 0) {
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
            productsCollection.value = store.getProducts;
        }
    }
    const editarProducto = (codigoProducto) => {
        CodigoProducto.value = codigoProducto;
        router.push({ name: 'formProducts', params: { tipo: tipoProducto } });
    }
    const deleteProducts = (producto) => {
        CodigoProducto.value = producto.CodigoProducto;
        deleteProduct(producto);
    }
    const borrarCodigoProducto = () => {
        CodigoProducto.value = '';
    }

    onBeforeMount(() => {
        cargarDatos();
        setViewTitle('Listado de Productos');
        setTitle('Productos');
        setTabsCollection([
            { name: 'Listado', route: 'productsList' },
            { name: 'Formulario', route: 'productsForm' }
        ]);
        setActiveTab(0);
    });

    watch(tipoProducto, (newValue) => {
        if (newValue == 0) {
            cargarDatos();
        } else {
            tipoProducto.value = newValue;
            cargarDatos();

            if (productsCollection.value.length == 0) {
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
        <ventanas />
    </div>

    <div class="flex-grow flex flex-col">
        <div class="flex flex-row mb-6 justify-between flex-wrap gap-4 mt-4">
            <div>
                <buscadorProductos @eBusqueda="esperarBusqueda" :tipoProducto="tipoProducto" />
            </div>

            <!-- <div class="flex h-0 flex-grow-[50]"></div> -->

            <div class="flex gap-4">
                <label for="tipoProducto" class="text-labelSize font-labelWeight text-white mr-1"> Tipo </label>
                <select class="h-inputHeight min-w-40 max-w-sm 
                p-paddingInput rounded-inputRadius border-inputBorder 
                border-inputWidth text-black text-base" id="tipoProducto" v-model="tipoProducto">
                    <option value="Todos">Todos</option>
                    <option v-for="Tipo in productsTypeCollection" :value="Tipo.NombreTipoProducto"> {{
                        Tipo.NombreTipoProducto }}</option>
                </select>
                <btnAgregar :ruta="'productsForm'"/>
            </div>
        </div>

        <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
            <tablaProductos :productsCollection="productsCollection" :tipoProducto="tipoProducto"
                @eEditarProducto="editarProducto" @edeleteProduct="deleteProducts" />
                <!-- <deleteModal :id="modalData" v-if="modalData !== null" @eEliminar="borrarRegistro"
                @eCancelar="esperarCancelar" /> -->
        </div>
    </div>
</template>

<style scoped></style>