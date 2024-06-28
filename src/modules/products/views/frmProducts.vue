<script setup>
import { inject, onMounted, onUpdated } from 'vue';
import formulario from '@/modules/products/components/frmDataProducts.vue';
import formularioImagen from '@/modules/products/components/frmImage.vue';
import { useFormProducts } from '@/modules/products/composables/useFormProducts.js';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import { windowLayoutStore } from '@/store/windowLayoutStore';
const windowStore = windowLayoutStore();

const setTitleContent = inject('setTitleContent');
const setWindowContent = inject('setWindowContent');
import ventanas from '@/modules/products/components/windows.vue';

const props = defineProps({
  tipoProducto: {
    type: String,
    default: 'Todos'
  }
});

const { producto } = useFormProducts(props);

const updateTitle = () => {
  setTitleContent('Productos');
  setWindowContent(ventanas);
};

onMounted(() => {
  updateTitle();
  windowStore.setBtActivo(2);
});

onUpdated(() => {
  windowStore.setBtActivo(2);
});
</script>

<template>
  <div class="w-full h-full max-h-full min-h-full p-4">
    <titleH2>Formulario de Productos</titleH2>
    <main class="flex justify-between text-primaryFontColor items-start min-w-full max-w-full bg-transparent mb-2 xl:flex-nowrap flex-wrap">
      <formulario :producto="producto" />
      <section class="min-w-full max-w-full xl:min-w-[35%] xl:max-w-[35%] bg-primaryFrmContainer min-h-min rounded-2xl overflow-hidden mb-8 xl:mb-0">
        <formularioImagen />
      </section>
    </main>
  </div>
</template>

<style scoped></style>
