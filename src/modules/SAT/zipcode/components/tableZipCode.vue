<script setup>
import { ref, watch } from "vue";
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();

const props = defineProps({
  zipCodesCollection: {
    type: Array,
    default: () => [],
  },
});

const localzipCodesCollection = ref(props.zipCodesCollection);

watch(
  () => props.zipCodesCollection,
  (newVal) => {
    localzipCodesCollection.value = newVal;
  }
);
</script>

<template>
<!-- <table class="w-full table-fixed text-base">
  <thead class="sticky top-0 text-white">
    <tr class="sticky top-0 h-primaryHeaderTableHeight rounded-primaryHeaderTableRadius">
      <th class="border-b-secondaryTableWidth border-b-primaryUnderline first:rounded-l-primaryHeaderTableRadius"
        :class="`bg-${theme}-headers`">
        País
      </th>
      <th class="border-b-secondaryTableWidth border-b-primaryUnderline" :class="`bg-${theme}-headers`">
        Código Postal
      </th>
      <th class="border-b-secondaryTableWidth border-b-primaryUnderline" :class="`bg-${theme}-headers`">
        Estado
      </th>
      <th class="border-b-secondaryTableWidth border-b-primaryUnderline" :class="`bg-${theme}-headers`">
        Municipio
      </th>
      <th class="border-b-secondaryTableWidth border-b-primaryUnderline last:rounded-r-primaryHeaderTableRadius"
        :class="`bg-${theme}-headers`">
        Localidad
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-white" v-for="(zipcode, index) in localzipCodesCollection" :key="index" :class="`text-${theme}-text`">
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
</table> -->

  <!--  -->

  <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th :class="`bg-${theme}-headers`">País</th>
                <th :class="`bg-${theme}-headers`">Código Postal</th>
                <th :class="`bg-${theme}-headers`">Estado</th>
                <th :class="`bg-${theme}-headers`">Municipio</th>
                <th :class="`bg-${theme}-headers`">Localidad</th>
                <!-- <th                     :class="`bg-${theme}-headers`">Status </th> -->
                <th v-if="editable" :class="`bg-${theme}-headers`"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(zipCode, index) in zipCodesCollection" :key="index" :class="`text-${theme}-text bg-white`">
                <!-- :class="[zipCode.Borrado ? `text-${theme}-text bg-white` : '', !zipCode.Borrado ? `text-${theme}-subtext bg-${theme}-disabled` : '']" -->
                <td
                    class="h-primaryBodyTableHeight border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ zipCode.pais }}
                </td>
                <td
                    class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ zipCode.codigo_postal }}
                </td>
                <td
                    class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    {{ zipCode.estado }}
                </td>
                <td
                    class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    {{ zipCode.municipio }}
                </td>
                <td
                    class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    {{ zipCode.localidad }}
                </td>
                <td v-if="editable"
                    class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    <div class="w-full h-full flex items-center justify-center">
                        <editIco class="cursor-pointer" @click="handleAccion(zipCode, 1)" />
                        <trashIco class="cursor-pointer" @click="handleAccion(zipCode, 2)" />
                    </div>
                </td>
            </tr>
        </tbody>
  </table>


</template>