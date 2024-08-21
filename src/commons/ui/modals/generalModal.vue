<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-10" @keydown.escape="closeModal">
    <div class="bg-white rounded-lg shadow-xl transform transition-all max-w-[96vw] min-w-[24rem] max-h-[96vh] flex flex-col overflow-scroll">
      <div class="px-4 py-5 sm:px-6">
        <div class="w-full flex flex-row justify-between items-center">
          <titleH2 class="!mb-0 uppercase" :class="`text-${theme}-text`">
            <slot name="header">
              ¡Sin título!
            </slot>
          </titleH2>
          <div class="h-8 w-5 flex justify-end items-center cursor-pointer">
            <p @click="closeModal" class="text-xl font-bold hover:text-2xl text-gray-600 hover:text-black transition-all duration-200"> X </p>
          </div>
        </div>
      </div>
      <div class="h-[1px] flex justify-center items-center px-4">
          <div class="bg-black h-[1px] w-full"></div>
      </div>
      
      <main class="flex-grow flex justify-center items-center p-4 pb-0">
        <div class="w-full h-full flex-grow">
          <slot name="content">
            <div class="w-full h-24 flex justify-center items-center">
              <p class="font-bold text-[1rem] w-full text-center"> ¡Sin contenido! </p>
            </div>
          </slot>
        </div>
      </main>

      <div class="bg-gray-50 px-4 py-3 flex flex-row-reverse gap-2" v-if="buttonsMode === 1">
        <button @click="closeModal" class="justify-center transition-all duration-300 rounded-md px-4 py-2 md:text-base font-medium text-white border-2 w-[33%] max-w-24 text-sm" :class="`bg-${theme}-secondary hover:bg-${theme}-secondary-hover`">
          Cancelar
        </button>
        <button @click="confirmAction" class="justify-center transition-all duration-300 rounded-md px-4 py-2 md:text-base font-medium text-white border-2 w-[33%] max-w-24 sm:mt-0 text-sm" :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover`">
          Aceptar
        </button>
      </div>

      <div class="bg-gray-50 px-4 py-3 flex flex-row-reverse gap-2" v-if="buttonsMode === 2">
        <button @click="closeModal" class="justify-center transition-all duration-300 rounded-md px-4 py-2 md:text-base font-medium text-white border-2 w-[33%] max-w-24 text-sm" :class="`bg-${theme}-secondary hover:bg-${theme}-secondary-hover`">
          Cancelar
        </button>
      </div>
      
      <div class="bg-gray-50 px-4 py-3 flex flex-row-reverse gap-2" v-if="buttonsMode === 0">
        <slot name="buttons">
        </slot>
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
  },
  buttonsMode: {
    type: Number,
    default: 1,
  }
});

const closeModal = () => {
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