<script setup>
import LayoutGeneral from '@/commons/layout/LayoutGeneral.vue';
import ventanasProductos from '@/modules/productos/components/ventanasProductos.vue';
import formulario from '@/modules/productos/components/formularioProductos.vue';
import { ref, onMounted } from 'vue';

import { useProductos } from '@/store/index'
const store = useProductos();

const props = defineProps({
    tipoProducto: {
        type: String,
        default: 'Todos'
    }
})

const tipoProducto = ref(props.tipoProducto);
const btActivo = ref(2);

const ListadoTiposProducto = ref([]);

onMounted(() => {
    cargarDatos();
});

const cargarDatos = () => {
    store.cargarTiposProducto().then(() => {
        ListadoTiposProducto.value = store.getTiposProducto;
    });
}
</script>

<template>
    <LayoutGeneral>
        <template v-slot:Titulo>
            Formulario de Productos
        </template>
        <template v-slot:Ventanas>
            <ventanasProductos :tipoProducto="tipoProducto" :btActivo="btActivo" />
        </template>
        <template v-slot:Contenido>
            <div class="w-full h-full max-h-full min-h-full bg-container">
                <h2 class="text-h2Size font-h2Weight text-primaryFontColor m-h2Margin"> Registrar un nuevo producto </h2>
                <formulario/>
            </div>
        </template>
    </LayoutGeneral>
</template>

<style scoped>
</style>