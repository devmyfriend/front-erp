<script setup>
import ventanas from '@/commons/components/windows.vue';
import frmDataProducts from '@/modules/products/components/frmDataProducts.vue';
import frmImage from '@/modules/products/components/frmImage.vue';
import { onBeforeMount } from 'vue';
import { useLayout } from '@/commons/composables/useLayout';
import { useWindows } from '@/commons/composables/useWindows';
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
const { setActiveTab, setTabsCollection } = useWindows();

const { setTitle, setViewTitle } = useLayout();

const props = defineProps({
  CodigoProducto: String,
  default: '',
});

const datos = {
  codigoProducto: props.CodigoProducto,
  tipoProducto: '',
  nombreProducto: '',
  descripcionProducto: '',
  puntos: '0',
  serie: '',
  linea: '',
  familia: '',
  subfamilia: '',
  claveProductoServicio: '',
  claveUnidad: '',
  claveImpuestoCompuesto: ''
};

onBeforeMount(() => {
  setTitle('Productos');
  setViewTitle((props.CodigoProducto ? ('Editando producto: ' + props.CodigoProducto) : 'Nuevo Producto'));
  setTabsCollection([
    { name: 'Listado', route: 'productsList' },
    { name: 'Formulario', route: 'productsForm' }
  ]);
  setActiveTab(1);
});
</script>

<template>
  <div class="flex sticky top-0 z-20">
    <ventanas />
  </div>

  <div class="flex-grow flex overflow-y-scroll max-w-full mt-4 flex-wrap 2xl:flex-nowrap gap-12 justify-center 2xl:justify-normal">
    <frmDataProducts />
    <frmImage />
  </div>
</template>

<style scoped>
</style>