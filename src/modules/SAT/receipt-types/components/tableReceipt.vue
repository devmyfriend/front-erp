<script setup>
import { ref, watch } from 'vue';

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
            <tr class="sticky top-0 h-primaryHeaderTableHeight">
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tl-xl">Clave</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-t-[1px]">Nombre</th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-primaryFontColor" v-for="(comprobante, index) in ListadoComprobantes" :key="index"
                :class="{
                    'bg-primaryBodyTable': (index % 2 === 1),
                    'bg-secondaryBodyTable': (index % 2 === 0)
                }">
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