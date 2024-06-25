<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  ColoniesList: {
    type: Array,
    default: () => [],
  },
});

const localColoniesList = ref(props.ColoniesList);

watch(
  () => props.ColoniesList,
  (newVal) => {
    localColoniesList.value = newVal;
  }
);
</script>

<template>
  <table class="w-full table-fixed text-sm">
    <thead class="sticky top-0 text-white">
      <tr
        class="sticky top-0 bg-primaryHeaderTable h-primaryHeaderTableHeight rounded-primaryHeaderTableRadius"
      >
        <th
          class="border-b-secondaryTableWidth border-b-primaryUnderline first:rounded-l-primaryHeaderTableRadius"
        >
          Clave de la colonia
        </th>
        <th class="border-b-secondaryTableWidth border-b-primaryUnderline">
          Nombre de la colonia
        </th>
        <th class="border-b-secondaryTableWidth border-b-primaryUnderline">
          Código postal
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="text-primaryFontColor bg-secondaryBodyTable"
        v-for="(colony, index) in localColoniesList"
        :key="index"
      >
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate first:rounded-l-primaryHeaderTableRadius"
        >
          {{ colony.ClaveColonia }}
        </td>
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate"
        >
          {{ colony.Nombre }}
        </td>
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate"
        >
          {{ colony.CodigoPostal }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
