<script setup>
import { onMounted, ref, watch, onBeforeMount } from 'vue';
import buscadorProductos from '@/modules/productos/components/buscadorProductos.vue';
import tablaProductos from '@/modules/productos/components/tablaProductos.vue'
import btnAgregar from '@/commons/ui/btn-agregar/btn-agregar.vue';
import { useRouter } from 'vue-router';
import { useProductos } from '@/store/index'
import Swal from 'sweetalert2';
import { useProductList } from '@/modules/productos/composables/useProductList.js';
const { setTitle, setBtActivo } = useProductList();

const store = useProductos();
const router = useRouter();

const tipoProducto = ref('Todos');

const ListadoProductos = ref([]);
const ListadoTiposProducto = ref([]);

const CodigoProducto = ref('');

onBeforeMount(() => {
    setTitle('Listado de Productos');
    setBtActivo(1);
    cargarDatos();
});

const cargarDatos = () => {
    store.cargarProductos().then(() =>{
        if(tipoProducto.value == 'Todos'){
            ListadoProductos.value = store.getProductos;
        }else{
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

const editarProducto = (codigoProducto) => {
    CodigoProducto.value = codigoProducto;
    router.push({ name: 'formProducts', params: { tipo: tipoProducto, id: codigoProducto } });
}
const borrarProducto = (tipoProducto, codigoProducto) => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrarlo!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Borrado!',
                'El producto ha sido borrado.',
                'success'
            );
        }
    });
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
});
</script>

<template>
    <div class="w-full h-full max-h-full min-h-full p-4">
        <h2 class="text-h2Size font-h2Weight text-primaryFontColor m-h2Margin"> Listado de Productos </h2>

        <div class="frm flex justify-between mb-6">
            <div>
                <buscadorProductos @eBusqueda="esperarBusqueda" :tipoProducto="tipoProducto"/>
            </div>
            <div class="formulario w-full flex flex-row items-center gap-frmGap justify-end">
                <label for="tipoProducto" class="text-labelSize font-labelWeight text-primaryFontColor"> Tipo: </label>
                <select class="h-inputHeight min-w-40 max-w-sm grow 
                p-paddingInput rounded-inputRadius border-inputBorder 
                border-inputWidth text-primaryFontColor text-base" v-model="tipoProducto">
                    <option value="Todos">Todos</option>
                    <option v-for="Tipo in ListadoTiposProducto" :value="Tipo.NombreTipoProducto"> {{ Tipo.NombreTipoProducto }}</option>
                </select>
                <btnAgregar :ruta="'formProducts'"/>
            </div>
        </div>

        <div class="w-full max-h-[66vh] min-h-[66vh] items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base">
            <tablaProductos :ListadoProductos="ListadoProductos" :tipoProducto="tipoProducto" @eEditarProducto="editarProducto" @eBorrarProducto="borrarProducto" />
        </div>
    </div>
</template>

<style scoped>

</style>