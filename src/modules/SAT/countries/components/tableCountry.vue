<script setup>
import { onMounted, ref } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import { useCountries } from '@/modules/SAT/countries/composables/useCountries';
const { countriesCollection, loadCountries } = useCountries();
const { theme } = useTheme();

onMounted(() => {
    loadCountries();
});

</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th class="bg-primaryHeaderTable" :class="`bg-${theme}-headers`">Clave</th>
                <th class="bg-primaryHeaderTable" :class="`bg-${theme}-headers`">Nombre</th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white" v-for="(pais, index) in countriesCollection" :key="index" :class="`text-${theme}-text`">
                <td
                    class="h-primaryBodyTableHeight border-b-secondaryTableWidth px-2 ">
                    {{ pais.ClavePais }}
                </td>
                <td
                    class="h-primaryBodyTableHeight border-b-secondaryTableWidth px-2 border-l-primaryTableWidth">
                    {{ pais.Descripcion }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>