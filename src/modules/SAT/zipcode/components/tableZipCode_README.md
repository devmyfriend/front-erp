
# tableZipCode Component

## Description
The `tableZipCode` component is a Vue 3 component designed to display a list of zip codes in a table format. It uses a reactive approach, integrating with the `usezipCodesCollection` composable to fetch and manage the zip code data.

## Props
- `editable` (Boolean, Optional): Determines whether the actions (edit, delete) column is visible.

## Emits
This component does not emit any events directly, but it utilizes the `usezipCodesCollection` composable to manage its data.

## Setup
```javascript
<script setup>
import { useTheme } from '@/commons/composables/theme';
import { usezipCodesCollection } from '@/modules/SAT/zipcode/composables/useListZipCode'
import { onMounted } from 'vue';

const { zipCodesCollection, loadData } = usezipCodesCollection();
const { theme } = useTheme();

onMounted(() => {
    loadData();
});
</script>
```

## Template
```html
<template>
  <table class="w-full table-fixed leading-4 text-[1rem]">
    <thead>
      <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
        <th :class="`bg-${theme}-headers`">País</th>
        <th :class="`bg-${theme}-headers`">Código Postal</th>
        <th :class="`bg-${theme}-headers`">Estado</th>
        <th :class="`bg-${theme}-headers`">Municipio</th>
        <th :class="`bg-${theme}-headers`">Localidad</th>
        <th v-if="editable" :class="`bg-${theme}-headers`"> Acciones </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(zipCode, index) in zipCodesCollection" :key="index" :class="`text-${theme}-text bg-white`">
        <td class="h-primaryBodyTableHeight border-b-secondaryTableWidth px-2 text-center truncate">
          {{ zipCode.pais }}
        </td>
        <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth px-2 text-center truncate">
          {{ zipCode.codigo_postal }}
        </td>
        <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth px-2 text-start truncate">
          {{ zipCode.estado }}
        </td>
        <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth px-2 text-start truncate">
          {{ zipCode.municipio }}
        </td>
        <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth px-2 text-start truncate">
          {{ zipCode.localidad }}
        </td>
        <td v-if="editable" class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth px-2 text-start truncate">
          <div class="w-full h-full flex items-center justify-center">
            <editIco class="cursor-pointer" @click="handleAccion(zipCode, 1)" />
            <trashIco class="cursor-pointer" @click="handleAccion(zipCode, 2)" />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
```
