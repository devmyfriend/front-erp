<template>
  <div v-if="mostrar" class="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-10" @keydown.escape="closeModal">
    <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-[90vw] w-full sm:max-w-[60vw]">
      <div class="px-4 py-5 sm:px-6">
        <div class="w-full flex flex-row justify-between items-center">
          <titleH2 class="mb-0" :class="`text-${theme}-text`"> {{ modo === 0 ? 'Nuevo' : 'Editar' }} registro </titleH2>
          <div class="h-8 w-5 flex justify-end items-center cursor-pointer">
            <p @click="closeModal" class="text-xl font-bold hover:text-2xl text-gray-600 hover:text-black transition-all duration-200"> X </p>
          </div>
        </div>
      </div>
      
      <main class="flex flex-col justify-center items-center p-4">
        <!-- Slot para el buscador -->
        <slot name="buscador">
          <div class="h-12 max-h-48 w-full flex justify-start items-center">
            <coinFinder :color="`#9ca3af`" />
          </div>
        </slot>

        <!-- Slot para la tabla -->
        <slot name="tabla">
          <div class="h-96 w-full overflow-auto border-4 rounded-b-2xl" :class="`border-${theme}-headers`">
            <tableCoins :ListadoMonedas="ListadoMonedas"/>
          </div>
        </slot>
        <p class="pl-1 italic opacity-50 underline font-semibold text-gray-600 text-base w-full text-left bg-white"> Selecciona un registro, por favor.</p>
      </main>

      <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse mb-2">
        <button @click="closeModal" class="w-full justify-center transition-all duration-300 rounded-md px-4 py-2 md:text-base font-medium text-white border-2 sm:ml-3 sm:w-auto text-sm" :class="`bg-${theme}-secondary hover:bg-${theme}-secondary-hover`">
          Cancelar
        </button>
        <button @click="confirmAction" class="mt-3 w-full justify-center transition-all duration-300 rounded-md px-4 py-2 md:text-base font-medium text-white border-2 sm:mt-0 sm:ml-3 sm:w-auto text-sm" :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`">
          Confirmar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from '@/commons/composables/theme';
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
/* Test */
import coinFinder from '@/modules/SAT/coins/components/coinFinder.vue';
import tableCoins from '@/modules/SAT/coins/components/tableCoins.vue';
import { coinsStore } from '@/store/coinsStore';
const store = coinsStore();
const ListadoMonedas = ref([]);
/* Test */

const { theme } = useTheme();

const emit = defineEmits(['eConfirm', 'eCancel']);
const props = defineProps({
  datos: {
    type: Object,
    default: () => ({ ClaveMoneda: null, Descripcion: null }),
  },
  mostrar: {
    type: Boolean,
    default: true,
  },
  modo: {
    type: Number,
    default: 0,
  },
});

const showModal = ref(props.mostrar);

const closeModal = () => {
  showModal.value = false;
  /* test */
  mostrar.value = false;
  /* test */
  emit('eCancel');
};

const confirmAction = () => {
  emit('eConfirm', props.datos);
};

const handleEscapeKey = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

/* test */

const test1 = () => {
  store.cargarMonedas().then(() => {
    ListadoMonedas.value = store.getMonedas;
  });
};

const mostrar = ref(props.mostrar);

/* test */

onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey);
  test1();
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscapeKey);
});
</script>

<style scoped></style>
