<template>
  <div v-if="mostrar" class="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-10" @keydown.escape="closeModal">
    <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
      <div class="px-4 py-5 sm:px-6">
        <div class="w-full flex flex-row justify-between items-center">
          <titleH2 class="mb-0" :class="`text-${theme}-text`"> {{ modo === 0 ? 'Nueva' : 'Editar' }} moneda </titleH2>
          <div class="h-8 w-5 flex justify-end items-center cursor-pointer">
            <p @click="closeModal"
              class="text-xl font-bold hover:text-2xl text-gray-600 hover:text-black transition-all duration-200"> X
            </p>
          </div>
        </div>
        <div class="flex flex-col justify-center items-start mt-8">
          <label for="Clave" class="text-sm font-bold text-gray-700 relative px-1">Clave Moneda:</label>

          <input :disabled="modo === 1" name="Clave" v-model="datos.ClaveMoneda" type="text" placeholder="MXN"
            class="mt-1 block w-full text-sm border-2 border-gray-400 transition-all duration-300 focus:border-gray-800 box-border p-2 outline-none"
            :class="{ [`bg-${theme}-disabled`]: modo === 1, 'bg-white': modo !== 1 }">

        </div>
        <div class="flex flex-col justify-center items-start mt-6">
          <label class="text-sm font-bold text-gray-700 relative px-1">Descripción</label>
          <input v-model="datos.Descripcion" type="text" placeholder="Peso Mexicano"
            class="mt-1 block w-full text-sm border-2 border-gray-400 transition-all duration-300 focus:border-gray-800 box-border p-2 outline-none">
        </div>

      </div>
      <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse mb-2">
        <button @click="closeModal"
          class="w-full justify-center transition-all duration-300 rounded-md px-4 py-2 md:text-base font-medium text-white border-2  sm:ml-3 sm:w-auto text-sm"
          :class="`bg-${theme}-secondary hover:bg-${theme}-secondary-hover`">
          Cancelar
        </button>
        <button @click="confirmAction"
          class="mt-3 w-full justify-center transition-all duration-300 rounded-md px-4 py-2 md:text-base font-medium text-white border-2  sm:mt-0 sm:ml-3 sm:w-auto text-sm"
          :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`">
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
const { theme } = useTheme();

const emit = defineEmits(['eConfirm', 'eCancel']);
const props = defineProps({
  datos: {
    type: Object,
    default: () => ({ ClaveMoneda: null, Descripcion: null }),
  },
  mostrar: {
    type: Boolean,
    default: false,
  },
  modo: {
    type: Number,
    default: 0,
  },
});

const showModal = ref(props.mostrar);

const closeModal = () => {
  showModal.value = false;
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

onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscapeKey);
});

</script>

<style scoped></style>
