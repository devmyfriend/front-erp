<script setup>
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';
import { useTheme } from '@/commons/composables/theme';

const { theme } = useTheme();

const confirmButtonColor = ref('');
const cancelButtonColor = ref('');

const emit = defineEmits(['eEliminar', 'eCancelar']);
const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const getComputedStyleValue = (variable) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

const updateButtonColors = () => {
  const themeName = theme.value;

  const confirmVariableName = `--color-${themeName.toLowerCase()}-primary`;
  const cancelVariableName = `--color-${themeName.toLowerCase()}-secondary`;

  confirmButtonColor.value = getComputedStyleValue(confirmVariableName);
  cancelButtonColor.value = getComputedStyleValue(cancelVariableName);
};

const lanzarModal = () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: `Estás a punto de eliminar el registro con clave ${props.id}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: confirmButtonColor.value,
    cancelButtonColor: cancelButtonColor.value,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      emit('eEliminar', props.registro);
    } else {
      emit('eCancelar');
    }
  });
}

onMounted(() => {
  updateButtonColors();
  lanzarModal();
});
</script>

<template>
</template>

<style scoped>
</style>
