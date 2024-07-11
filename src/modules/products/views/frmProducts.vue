<script setup>
import { inject, onMounted, onUpdated } from 'vue';
import formulario from '@/modules/products/components/frmDataProducts.vue';
import formularioImagen from '@/modules/products/components/frmImage.vue';
import { useFormProducts } from '@/modules/products/composables/useFormProducts.js';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import { windowLayoutStore } from '@/store/windowLayoutStore';
import { useTheme } from '@/commons/composables/useTheme.js';
const { theme } = useTheme();
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
  <titleH2 class="sticky pt-4 pl-4">Formulario de Productos</titleH2>
  <div class="w-full h-[93%] p-4 overflow-scroll">
    <main class="flex justify-between text-primaryFontColor items-start min-w-full max-w-full bg-transparent mb-2 xl:flex-nowrap flex-wrap">
      <formulario :producto="producto" />
      <section class="min-w-full max-w-full xl:min-w-[35%] xl:max-w-[35%] min-h-min rounded-2xl overflow-hidden mb-4 xl:mb-0 py-4" :class="`bg-subcontainer-${theme}`" >
        <formularioImagen />
      </section>
    </main>
  </div>
</template>

<style scoped></style>
