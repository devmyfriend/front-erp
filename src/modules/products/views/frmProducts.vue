<script setup>
import { onMounted } from 'vue';
import formulario from '@/modules/products/components/frmDataProducts.vue';
import formularioImagen from '@/modules/products/components/frmImage.vue';
import { useFormProducts } from '@/modules/products/composables/useFormProducts.js';

import { useLayout } from '@/commons/composables/useLayout';
import { useTheme } from '@/commons/composables/theme';
const { setViewTitle } = useLayout();
const { theme } = useTheme();

const props = defineProps({
  tipoProducto: {
    type: String,
    default: 'Todos'
  }
});

const { producto } = useFormProducts(props);

onMounted(() => {
  localStorage.setItem('btnActivo', 2);
  setViewTitle('Formulario de Productos');
});

</script>

<template>
  <div class="w-full overflow-scroll mt-6">
    <main
      class="flex justify-between text-primaryFontColor items-start min-w-full max-w-full bg-transparent mb-2 xl:flex-nowrap flex-wrap">
      <formulario :producto="producto" />
      <section
        class="min-w-full max-w-full xl:min-w-[35%] xl:max-w-[35%] min-h-min rounded-2xl overflow-hidden mb-4 xl:mb-0 py-4"
        :class="`bg-${theme}-container`">
        <formularioImagen />
      </section>
    </main>
  </div>
</template>

<style scoped></style>
