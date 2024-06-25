<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  CfdiList: {
    type: Array,
    default: () => [],
  },
});

const localCfdiList = ref(props.CfdiList);

watch(
  () => props.CfdiList,
  (newVal) => {
    localCfdiList.value = newVal;
  },
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
          Clave CFDi
        </th>
        <th class="border-b-secondaryTableWidth border-b-primaryUnderline">
          Descripción
        </th>
        <th class="border-b-secondaryTableWidth border-b-primaryUnderline">
          Persona Moral
        </th>
        <th class="border-b-secondaryTableWidth border-b-primaryUnderline last:rounded-r-primaryHeaderTableRadius">
          Persona Física
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="text-primaryFontColor bg-secondaryBodyTable"
        v-for="(cfdi, index) in localCfdiList"
        :key="index"
      >
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate first:rounded-l-primaryHeaderTableRadius"
        >
          {{ cfdi.ClaveUsoCFDI }}
        </td>
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate"
        >
          {{ cfdi.Descripcion }}
        </td>
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate"
        >
          {{ cfdi.Moral === 1 ? '✔️' : '' }}
        </td>
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate last:rounded-r-primaryHeaderTableRadius"
        >
          {{ cfdi.Fisica === 1 ? '✔️' : '' }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
