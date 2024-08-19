<script setup>
import { onMounted } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import editIco from '@/commons/ui/icons/tableIcons/editIco.vue';
import trashIco from '@/commons/ui/icons/tableIcons/trashIco.vue';
import { useReceiptsTypes } from '@/modules/SAT/receipt-types/composables/useReceiptsTypes';
const { receiptsCollection, loadReceipts } = useReceiptsTypes();
const { theme } = useTheme();
const emits = defineEmits(['eAccion']);

onMounted(() => {
    loadReceipts();
});

const props = defineProps({
    editable: {
        type: Boolean,
        default: false
    },
    accion: {
        type: Array,
        default: () => []
    }
});

const handleAccion = (comprobante, accion) => {
    emits('eAccion', [comprobante, accion]);
};
</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th :class="`bg-${theme}-headers`">Clave</th>
                <th :class="`bg-${theme}-headers`">Nombre</th>
                <!-- <th                     :class="`bg-${theme}-headers`">Status </th> -->
                <th v-if="editable" :class="`bg-${theme}-headers`"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(comprobante, index) in receiptsCollection" :key="index" :class="`text-${theme}-text bg-white`">
                <!-- :class="[comprobante.Borrado ? `text-${theme}-text bg-white` : '', !comprobante.Borrado ? `text-${theme}-subtext bg-${theme}-disabled` : '']" -->
                <td
                    class="h-primaryBodyTableHeight border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ comprobante.ClaveTipoDeComprobante }}
                </td>
                <td
                    class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    {{ comprobante.Descripcion }}
                </td>
                <!--                 <td
                    class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ comprobante.Borrado ? 'Activo' : 'Inactivo' }}
                </td> -->
                <td v-if="editable"
                    class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    <div class="w-full h-full flex items-center justify-center">
                        <editIco class="cursor-pointer" @click="handleAccion(comprobante, 1)" />
                        <trashIco class="cursor-pointer" @click="handleAccion(comprobante, 2)" />
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>