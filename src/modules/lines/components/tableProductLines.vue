<script setup>
import { onMounted, defineAsyncComponent } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import { useProductLines } from '@/modules/lines/composables/useProductLines.js';
const editIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/editIco.vue'));
const trashIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/trashIco.vue'));
const { productLinesCollection, loadProductLines } = useProductLines();
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

const handleAccion = (linea, accion) => {
    emits('eAccion', [linea, accion]);
};
const selectItem = (linea) => {
    emits('eSelect', linea);
};

onMounted(() => {
    loadProductLines();
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
            <tr v-for="(linea, index) in productLinesCollection" :key="index"
                :class="[!linea.Borrado ? `text-${theme}-text bg-white`
                    : `text-${theme}-text bg-${theme}-disabled`, clickeable ? 'cursor-pointer hover:font-bold transition-all duration-100' : '']"
                @click="clickeable ? selectItem(linea) : null">
                <td class="general-cell text-center">
                    {{ linea.LineaId }}
                </td>
                <td
                    class="general-cell border-l-primaryTableWidth text-center">
                    {{ linea.NombreLinea }}
                </td>
                <td
                    class="general-cell border-l-primaryTableWidth text-center">
                    {{ !linea.Borrado ? 'Activo' : 'Inactivo' }}
                </td>
                <td v-if="editable" 
                class="general-cell border-l-primaryTableWidth text-start">
                <div class="w-full h-full flex items-center justify-center">
                    <editIco class="cursor-pointer" @click="handleAccion(linea, 1)" />
                    <trashIco class="cursor-pointer" @click="handleAccion(linea, 2)" />
                </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>