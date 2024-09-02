<script setup>
import titleH2 from '@/commons/ui/title-h2/title-h2.vue';
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
const props = defineProps({
  columnas: {
    type: Number,
    default: 2, 
  },
});

</script>

<template>
  <tr class="overflow-hidden">
    <td :colspan="columnas">
        <titleH2 class="text-center py-4 text-gray-700"> No se encontraron registros </titleH2>
    </td>
  </tr>
</template>

<style scoped>
</style>
