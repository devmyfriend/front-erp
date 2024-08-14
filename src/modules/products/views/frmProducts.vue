<script setup>
import { onMounted } from 'vue';
import formulario from '@/modules/products/components/frmDataProducts.vue';
import formularioImagen from '@/modules/products/components/frmImage.vue';
import { useFormProducts } from '@/modules/products/composables/useFormProducts.js';
import ventanas from '@/commons/components/windows.vue';
import { useLayout } from '@/commons/composables/useLayout';
import { useTheme } from '@/commons/composables/theme';
import { useWindows } from '@/commons/composables/useWindows';
const { setActiveTab, setTabsCollection} = useWindows();
const { setTitle ,setViewTitle } = useLayout();
const { theme } = useTheme();

const props = defineProps({
  tipoProducto: {
    type: String,
    default: 'Todos'
  }
});

const { producto } = useFormProducts(props);

onMounted(() => {
  setViewTitle('Formulario de Productos');
  setTitle('Productos');
  setActiveTab(1);
  setTabsCollection([
      { name: 'Listado', route: 'productsList' },
      { name: 'Formulario', route: 'productsForm' }
  ]);
});

</script>

<template>
  <div class="flex sticky top-0 z-20">
        <ventanas/>
  </div>

  <div class="flex-grow flex flex-col">
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
  </div>
</template>

<style scoped></style>
