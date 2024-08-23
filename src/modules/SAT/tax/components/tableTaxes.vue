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
                <th :class="`bg-${theme}-headers`">Clave</th>
                <th :class="`bg-${theme}-headers`">Nombre</th>
                <th :class="`bg-${theme}-headers`">Status </th>
                <th v-if="editable"bg-primaryHeaderTable :class="`bg-${theme}-headers`"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-primaryFontColor" v-for="(impuesto, index) in taxesCollection" :key="index" :class="[
                impuesto.Activo ? `text-${theme}-text bg-white` : '',
                !impuesto.Activo ? `text-${theme}-subtext bg-${theme}-disabled` : ''
            ]">
                <td class="general-cell text-center">
                    {{ impuesto.ClaveImpuesto }}
                </td>
                <td
                    class="general-cell border-l-primaryTableWidth text-start">
                    {{ impuesto.Nombre }}
                </td>
                <td
                    class="general-cell border-l-primaryTableWidth text-start">
                    {{ impuesto.Activo ? 'Activo' : 'Inactivo' }}
                </td>

                <td v-if="editable"
                    class="general-cell border-l-primaryTableWidth text-start">
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