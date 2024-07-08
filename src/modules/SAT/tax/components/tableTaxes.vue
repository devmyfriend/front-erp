<script setup>
import { ref, watch } from 'vue';
import { useTheme } from '@/commons/composables/useTheme';
const { theme } = useTheme();

const ListadoImpuestos = ref([]);

const props = defineProps({
    ListadoImpuestos: {
        type: Array,
        default: () => []
    }
});

watch(() => props.ListadoImpuestos, (newValue) => {
    ListadoImpuestos.value = newValue;
});
</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tl-xl" :class="`bg-headerTable-${theme}`" >Clave</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-t-[1px]" :class="`bg-headerTable-${theme}`" >Nombre</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tr-xl" :class="`bg-headerTable-${theme}`" >Status</th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-primaryFontColor" v-for="(impuesto, index) in ListadoImpuestos" :key="index"
                :class="[
                    impuesto.Activo ? `text-textTable-${theme} bg-white` : '',
                    !impuesto.Activo ? 'text-white bg-disabled' : ''
                ]">
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ impuesto.ClaveImpuesto }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    {{ impuesto.Nombre }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ impuesto.Activo ? 'Activo' : 'Inactivo'}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>