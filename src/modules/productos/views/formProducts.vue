<script setup>
import formulario from '@/modules/productos/components/formularioProductos.vue';
import { useProductList } from '@/modules/productos/composables/useProductList.js';
const { setTitle, setBtActivo } = useProductList();
import { ref, onMounted, onBeforeMount } from 'vue';
import { useProductos } from '@/store/index'
const store = useProductos();

const props = defineProps({
    tipoProducto: {
        type: String,
        default: 'Todos'
    }
})

const tipoProducto = ref(props.tipoProducto);

const ListadoTiposProducto = ref([]);

onBeforeMount(() => {
    setTitle('Formulario de Productos');
    setBtActivo(2);
    cargarDatos();
});

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
    <div class="w-full h-full max-h-full min-h-full p-4">
        <h2 class="text-h2Size font-h2Weight text-primaryFontColor m-h2Margin"> Formulario de Productos </h2>
        <formulario />
    </div>
</template>

<style scoped></style>