<script setup>
import { onMounted, defineAsyncComponent } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import { useUnitKeys } from '@/modules/products/composables/useUnitKeys';
const editIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/editIco.vue'));
const trashIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/trashIco.vue'));
const { unitKeysCollection, loadUnitKeys } = useUnitKeys();
const { theme } = useTheme();

const emits = defineEmits(['eAccion', 'eSelect']);
const props = defineProps({
    editable: {
        type: Boolean,
        default: false
    },
    clickeable: {
        type: Boolean,
        default: false
    }
});

const handleAccion = (unitKey, accion) => {
    emits('eAccion', [unitKey, accion]);
};
const selectItem = (unitKey) => {
    emits('eSelect', unitKey);
};

onMounted(async () => {
    await loadUnitKeys();

});

</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th :class="`bg-${theme}-headers`">Clave Unidad</th>
                <th :class="`bg-${theme}-headers`">Nombre</th>
                <th :class="`bg-${theme}-headers `">Activo</th>
                <th v-if="editable" :class="`bg-${theme}-headers`"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(unitKey, index) in unitKeysCollection" :key="index"
                :class="[unitKey.Activo ? `text-${theme}-text bg-white`
                    : `text-${theme}-text bg-${theme}-disabled`, (clickeable && unitKey.Activo) ? 'cursor-pointer hover:font-bold transition-all duration-100' : '', (clickeable && !unitKey.Activo) ? 'cursor-not-allowed' : '']"
                @click="(clickeable && unitKey.Activo) ? selectItem(unitKey) : null">
                <td class="general-cell text-center">
                    {{ unitKey.ClaveUnidadSat }}
                </td>
                <td class="general-cell border-l-primaryTableWidth text-center">
                    {{ unitKey.NombreUnidadSat }}
                </td>
                <td class="general-cell border-l-primaryTableWidth text-center">
                    {{ unitKey.Activo ? 'Activo' : 'Inactivo' }}
                </td>
                <td v-if="editable" class="general-cell border-l-primaryTableWidth text-start">
                    <div class="w-full h-full flex items-center justify-center">
                        <editIco class="cursor-pointer" @click="handleAccion(unitKey, 1)" />
                        <trashIco class="cursor-pointer" @click="handleAccion(unitKey, 2)" />
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>