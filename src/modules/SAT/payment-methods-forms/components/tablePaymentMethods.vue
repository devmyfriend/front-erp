<script setup>
import { ref, watch } from 'vue';
import { useTheme } from '@/commons/composables/useTheme';
const { theme } = useTheme();

const ListadoMetodosPago = ref([]);

const props = defineProps({
    ListadoMetodosPago: {
        type: Array,
        default: () => []
    }
});

watch(() => props.ListadoMetodosPago, (newValue) => {
    ListadoMetodosPago.value = newValue;
});
</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tl-xl" :class="`bg-headerTable-${theme}`">Clave</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-t-[1px]" :class="`bg-headerTable-${theme}`">Nombre</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tr-xl" :class="`bg-headerTable-${theme}`">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-primaryFontColor" v-for="(metodo, index) in ListadoMetodosPago" :key="index"
                :class="[
                    metodo.Activo === 1 ? `text-textTable-${theme} bg-white` : '',
                    metodo.Activo === 0 ? 'text-white bg-disabled' : ''
                ]">
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ metodo.ClaveMetodoPago }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    {{ metodo.Descripcion }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ metodo.Activo ? 'Activo' : 'Inactivo'}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>