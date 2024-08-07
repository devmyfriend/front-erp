<script setup>
import { ref, watch } from "vue";
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();

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
    localZipCodeList.value = newVal;
  }
);
</script>

<template>
  <table class="w-full table-fixed text-base">
    <thead class="sticky top-0 text-white">
      <tr class="sticky top-0 h-primaryHeaderTableHeight rounded-primaryHeaderTableRadius">
        <th class="border-b-secondaryTableWidth border-b-primaryUnderline first:rounded-l-primaryHeaderTableRadius"
          :class="`bg-${theme}-primary`">
          País
        </th>
        <th class="border-b-secondaryTableWidth border-b-primaryUnderline" :class="`bg-${theme}-primary`">
          Código Postal
        </th>
        <th class="border-b-secondaryTableWidth border-b-primaryUnderline" :class="`bg-${theme}-primary`">
          Estado
        </th>
        <th class="border-b-secondaryTableWidth border-b-primaryUnderline" :class="`bg-${theme}-primary`">
          Municipio
        </th>
        <th class="border-b-secondaryTableWidth border-b-primaryUnderline last:rounded-r-primaryHeaderTableRadius"
          :class="`bg-${theme}-primary`">
          Localidad
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white" v-for="(zipcode, index) in localZipCodeList" :key="index" :class="`text-${theme}-text`">
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate first:rounded-l-primaryHeaderTableRadius">
          {{ zipcode.pais }}
        </td>
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
          {{ zipcode.codigo_postal }}
        </td>
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
          {{ zipcode.estado }}
        </td>
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
          {{ zipcode.municipio }}
        </td>
        <td
          class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate last:rounded-r-primaryHeaderTableRadius">
          {{ zipcode.localidad }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
