<script setup>
import { ref, watch } from 'vue';
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
const ListadoComprobantes = ref([]);

const props = defineProps({
    ListadoComprobantes: {
        type: Array,
        default: () => []
    }
});

watch(() => props.ListadoComprobantes, (newValue) => {
    ListadoComprobantes.value = newValue;
});
</script>

<template>
    <table class="w-full leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable " :class="`bg-${theme}-primary`">Clave</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable " :class="`bg-${theme}-primary`">Nombre</th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white" v-for="(comprobante, index) in ListadoComprobantes" :key="index"
                :class="`text-${theme}-text`">
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ comprobante.ClaveTipoDeComprobante }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    {{ comprobante.Descripcion }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>