<script setup>
import { ref, watch } from 'vue';
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();

const ListadoMonedas = ref([]);

const props = defineProps({
    ListadoMonedas: {
        type: Array,
        default: () => []
    }
});

watch(() => props.ListadoMonedas, (newValue) => {
    ListadoMonedas.value = newValue;
});
</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tl-xl" :class="`bg-${theme}-headers`">Clave</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-t-[1px]" :class="`bg-${theme}-headers`">Nombre</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tr-xl" :class="`bg-${theme}-headers`">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(moneda, index) in ListadoMonedas" :key="index"
            :class="[
                moneda.Activo ? `text-${theme}-text bg-white` : '',
                !moneda.Activo ? `text-${theme}-text bg-disabled-${theme}` : ''
            ]">
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ moneda.ClaveMoneda }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    {{ moneda.Descripcion }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ moneda.Activo ? 'Activo' : 'Inactivo'}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>