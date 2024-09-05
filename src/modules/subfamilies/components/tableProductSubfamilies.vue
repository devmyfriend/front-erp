<script setup>
import { onMounted, defineAsyncComponent } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import { useProductSubfamilies } from '@/modules/subfamilies/composables/useProductSubfamilies.js';
const editIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/editIco.vue'));
const trashIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/trashIco.vue'));
const { productSubfamiliesCollection, loadProductSubfamilies } = useProductSubfamilies();
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

const handleAccion = (subfamilia, accion) => {
    emits('eAccion', [subfamilia, accion]);
};
const selectItem = (subfamilia) => {
    emits('eSelect', subfamilia);
};

onMounted(() => {
    loadProductSubfamilies();
});

</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th :class="`bg-${theme}-headers`">Clave</th>
                <th :class="`bg-${theme}-headers`">Nombre</th>
                <th :class="`bg-${theme}-headers`">Activo</th>
                <th v-if="editable" :class="`bg-${theme}-headers`"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(subfamilia, index) in productSubfamiliesCollection" :key="index"
                :class="[subfamilia.Activo ? `text-${theme}-text bg-white`
                    : `text-${theme}-text bg-${theme}-disabled`, clickeable ? 'cursor-pointer hover:font-bold transition-all duration-100' : '']"
                @click="clickeable ? selectItem(subfamilia) : null">
                <td class="general-cell text-center">
                    {{ subfamilia.SubFamiliaId }}
                </td>
                <td
                    class="general-cell border-l-primaryTableWidth text-center">
                    {{ subfamilia.NombreSubFamilia }}
                </td>
                <td
                    class="general-cell border-l-primaryTableWidth text-center">
                    {{ subfamilia.Activo ? 'Activo' : 'Inactivo' }}
                </td>
                <td v-if="editable" 
                class="general-cell border-l-primaryTableWidth text-start">
                <div class="w-full h-full flex items-center justify-center">
                    <editIco class="cursor-pointer" @click="handleAccion(subfamilia, 1)" />
                    <trashIco class="cursor-pointer" @click="handleAccion(subfamilia, 2)" />
                </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>