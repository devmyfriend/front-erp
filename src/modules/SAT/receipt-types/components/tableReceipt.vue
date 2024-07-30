<script setup>
import { ref, watch } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import editIco from '@/commons/ui/icons/tableIcons/editIco.vue';
import trashIco from '@/commons/ui/icons/tableIcons/trashIco.vue';
const { theme } = useTheme();
const emits = defineEmits(['eAccion']);

const ListadoComprobantes = ref([]);

const props = defineProps({
    ListadoComprobantes: {
        type: Array,
        default: () => []
    },
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

watch(() => props.ListadoComprobantes, (newValue) => {
    ListadoComprobantes.value = newValue;
});
</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tl-xl"
                    :class="`bg-${theme}-headers`">Clave</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-t-[1px]"
                    :class="`bg-${theme}-headers`">Nombre</th>
                <!-- <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable"
                    :class="`bg-${theme}-headers ${editable ? 'rounded-t-[1px]' : 'rounded-tr-xl'}`">Status </th> -->
                <th v-if="editable"
                    class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tr-xl"
                    :class="`bg-${theme}-headers`"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-primaryFontColor" v-for="(comprobante, index) in ListadoComprobantes" :key="index" :class="`text-${theme}-text bg-white`" >
            <!-- :class="[comprobante.Borrado ? `text-${theme}-text bg-white` : '', !comprobante.Borrado ? `text-${theme}-subtext bg-${theme}-disabled` : '']" -->
                <td
                    class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
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
                <td v-if="editable" class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate flex justify-center items-center">
                    <editIco class="cursor-pointer" @click="handleAccion(comprobante, 1)" />
                    <trashIco class="cursor-pointer" @click="handleAccion(comprobante, 2)" />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>