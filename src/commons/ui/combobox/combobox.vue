<script setup>
import { ref, watch } from 'vue';
import iconCombobox from '@/commons/components/icons/IconCombobox.vue';

const emit = defineEmits(['eCombobox']);
const props = defineProps({
  collection: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: 'Busca una opción',
  },
});

const localCollection = ref([...props.collection]);

const searchTerm = ref('');
const filteredOptions = ref(localCollection.value);
const isDropdownOpen = ref(false);
const selectedIndex = ref(-1);
const optionRefs = ref([]); 
const idField = ref(Object.keys(localCollection.value[0] || [])[0]);
const nameField = ref(Object.keys(localCollection.value[0] || [])[1]);

const filterOptions = () => {
  const term = searchTerm.value.toLowerCase();
  filteredOptions.value = localCollection.value.filter(option =>
    option[nameField.value].toLowerCase().includes(term)
  );
  selectedIndex.value = -1;
};

const selectOption = (option) => {
  searchTerm.value = option[nameField.value];
  isDropdownOpen.value = false;
  selectedIndex.value = -1;
};

const validateOption = () => {
  if (filteredOptions.value.length >= 1 && searchTerm.value.length !== 0) {
    searchTerm.value = filteredOptions.value[0][nameField.value];
  } else {
    searchTerm.value = '';
  }
  isDropdownOpen.value = false;
};

const cancel = () => {
  setTimeout(() => {
    isDropdownOpen.value = false;
  }, 100);
};

const handleKeydown = (event) => {
  if (!isDropdownOpen.value) return;

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    if (selectedIndex.value < filteredOptions.value.length - 1) {
      selectedIndex.value++;
      scrollToSelectedOption();
    }
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    if (selectedIndex.value > 0) {
      selectedIndex.value--;
      scrollToSelectedOption();
    }
  } else if (event.key === 'Enter') {
    event.preventDefault();
    if (selectedIndex.value >= 0 && selectedIndex.value < filteredOptions.value.length) {
      selectOption(filteredOptions.value[selectedIndex.value]);
    }
  } else if (event.key === 'Escape') {
    event.preventDefault();
    isDropdownOpen.value = false;
  }
};

const scrollToSelectedOption = () => {
  if (optionRefs.value[selectedIndex.value]) {
    optionRefs.value[selectedIndex.value].scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    });
  }
};

watch(() => props.collection, (newCollection) => {
  localCollection.value = [...newCollection];
  filteredOptions.value = [...newCollection];

  idField.value = Object.keys(newCollection[0] || [])[0];
  nameField.value = Object.keys(newCollection[0] || [])[1];
});

watch(searchTerm, () => {
  const matchedOption = localCollection.value.find(option =>
    option[nameField.value] === searchTerm.value
  );
  if (matchedOption) {
    emit('eCombobox', matchedOption[idField.value]);
  }
});
</script>

<template>
  <div class="relative w-full flex flex-col">
    <input
      type="text"
      v-model="searchTerm"
      @focus="isDropdownOpen = true"
      @change="validateOption"
      @input="filterOptions"
      @blur="cancel()"
      @keydown="handleKeydown"
      class="h-inputHeight"
      :class="`${isDropdownOpen ? '!rounded-b-none' : ''}`"
      :placeholder="placeholder"
    />
    <iconCombobox class="absolute right-[10px] top-[10px] transition-all duration-300" :class="`${isDropdownOpen ? 'rotate-180' : ''}`"/>
    <div v-if="isDropdownOpen" class="absolute bg-white w-full top-[35px] rounded-b-xl shadow-lg max-h-40 overflow-y-auto z-20" @focusout="isDropdownOpen = false">
      <ul>
        <li
          v-for="(option, index) in filteredOptions"
          :key="option[idField]"
          @click="selectOption(option)"
          :ref="el => optionRefs[index] = el"
          :class="[ 'px-4 py-1 hover:bg-blue-500 hover:text-white cursor-pointer',
            selectedIndex === index ? 'bg-blue-500 text-white' : '' ]"
        >
          {{ option[nameField] }}
        </li>
      </ul>
      <p v-if="filteredOptions.length === 0" class="px-4 py-2 text-gray-500">
        No se encontraron resultados.
      </p>
    </div>
  </div>
</template>
