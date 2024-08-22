<script setup>
import { onMounted, defineAsyncComponent } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import { useTaxes } from '@/modules/SAT/tax/composables/useTaxes';
const editIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/editIco.vue'));
const trashIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/trashIco.vue'));
const { taxesCollection, loadTaxes } = useTaxes();
const { theme } = useTheme();
const emits = defineEmits(['eAccion']);

onMounted(() => {
    loadTaxes();
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

const handleAccion = (impuesto, accion) => {
    emits('eAccion', [impuesto, accion]);
};
</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th class="bg-primaryHeaderTable" :class="`bg-${theme}-headers`">Clave</th>
                <th class="bg-primaryHeaderTable" :class="`bg-${theme}-headers`">Nombre</th>
                <th class="bg-primaryHeaderTable" :class="`bg-${theme}-headers`">Status </th>
                <th v-if="editable" class="bg-primaryHeaderTable " :class="`bg-${theme}-headers`"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-primaryFontColor" v-for="(impuesto, index) in taxesCollection" :key="index" :class="[
                impuesto.Activo ? `text-${theme}-text bg-white` : '',
                !impuesto.Activo ? `text-${theme}-subtext bg-${theme}-disabled` : ''
            ]">
                <td class="h-primaryBodyTableHeight border-b-secondaryTableWidth px-2 text-center truncate">
                    {{ impuesto.ClaveImpuesto }}
                </td>
                <td
                    class="h-primaryBodyTableHeight border-b-secondaryTableWidth border-l-primaryTableWidth px-2 text-start truncate">
                    {{ impuesto.Nombre }}
                </td>
                <td
                    class="h-primaryBodyTableHeight border-b-secondaryTableWidth border-l-primaryTableWidth px-2 text-start truncate">
                    {{ impuesto.Activo ? 'Activo' : 'Inactivo' }}
                </td>

                <td v-if="editable"
                    class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    <div class="w-full h-full flex items-center justify-center">
                        <editIco class="cursor-pointer" @click="handleAccion(impuesto, 1)" />
                        <trashIco class="cursor-pointer" @click="handleAccion(impuesto, 2)" />
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>