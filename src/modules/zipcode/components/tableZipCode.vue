<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  ZipCodeList: {
    type: Array,
    default: () => [],
  },
});

const localZipCodeList = ref(props.ZipCodeList);

watch(
  () => props.ZipCodeList,
  (newVal) => {
    console.log("Nueva lista de códigos postales recibida:", newVal);
    localZipCodeList.value = newVal;
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
          País
        </th>
        <th class="border-b-secondaryTableWidth border-b-primaryUnderline">
          Código Postal
        </th>
        <th class="border-b-secondaryTableWidth border-b-primaryUnderline">
          Estado
        </th>
        <th class="border-b-secondaryTableWidth border-b-primaryUnderline">
          Municipio
        </th>
        <th
          class="border-b-secondaryTableWidth border-b-primaryUnderline last:rounded-r-primaryHeaderTableRadius"
        >
          Localidad
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="text-primaryFontColor bg-secondaryBodyTable"
        v-for="(zipcode, index) in localZipCodeList"
        :key="index"
      >
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate first:rounded-l-primaryHeaderTableRadius"
        >
          {{ zipcode.pais }}
        </td>
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate"
        >
          {{ zipcode.codigo_postal }}
        </td>
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate"
        >
          {{ zipcode.estado }}
        </td>
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate"
        >
          {{ zipcode.municipio }}
        </td>
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate last:rounded-r-primaryHeaderTableRadius"
        >
          {{ zipcode.localidad }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
