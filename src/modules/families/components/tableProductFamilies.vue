<script setup>
import { onMounted, defineAsyncComponent } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import { useProductFamilies } from '@/modules/families/composables/useProductFamilies.js';
const editIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/editIco.vue'));
const trashIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/trashIco.vue'));
const { productFamiliesCollection, loadProductFamilies } = useProductFamilies();
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

const handleAccion = (familia, accion) => {
    emits('eAccion', [familia, accion]);
};
const selectItem = (familia) => {
    emits('eSelect', familia);
};

onMounted(() => {
    loadProductFamilies();
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
            <tr v-for="(familia, index) in productFamiliesCollection" :key="index"
                :class="[familia.Activo ? `text-${theme}-text bg-white`
                    : `text-${theme}-text bg-${theme}-disabled`, clickeable ? 'cursor-pointer hover:font-bold transition-all duration-100' : '']"
                @click="clickeable ? selectItem(familia) : null">
                <td class="general-cell text-center">
                    {{ familia.FamiliaId }}
                </td>
                <td
                    class="general-cell border-l-primaryTableWidth text-center">
                    {{ familia.NombreFamilia }}
                </td>
                <td
                    class="general-cell border-l-primaryTableWidth text-center">
                    {{ familia.Activo ? 'Activo' : 'Inactivo' }}
                </td>
                <td v-if="editable" 
                class="general-cell border-l-primaryTableWidth text-start">
                <div class="w-full h-full flex items-center justify-center">
                    <editIco class="cursor-pointer" @click="handleAccion(familia, 1)" />
                    <trashIco class="cursor-pointer" @click="handleAccion(familia, 2)" />
                </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>