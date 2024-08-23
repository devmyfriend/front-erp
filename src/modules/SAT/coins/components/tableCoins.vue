<script setup>
import { onMounted, defineAsyncComponent } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import { useCoins } from '@/modules/SAT/coins/composables/useCoins';
const editIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/editIco.vue'));
const trashIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/trashIco.vue'));
const { coinsCollection, cargarDatos } = useCoins();
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

const handleAccion = (moneda, accion) => {
    emits('eAccion', [moneda, accion]);
};
const selectItem = (moneda) => {
    emits('eSelect', moneda);
};

onMounted(() => {
    cargarDatos();
});

</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th :class="`bg-${theme}-headers`">Clave</th>
                <th :class="`bg-${theme}-headers`">Nombre</th>
                <th :class="`bg-${theme}-headers`">Status</th>
                <th v-if="editable" :class="`bg-${theme}-headers`"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(moneda, index) in coinsCollection" :key="index"
                :class="[moneda.Activo ? `text-${theme}-text bg-white`
                    : `text-${theme}-text bg-${theme}-disabled`, clickeable ? 'cursor-pointer hover:font-bold transition-all duration-100' : '']"
                @click="clickeable ? selectItem(moneda) : null">
                <td class="general-cell text-center">
                    {{ moneda.ClaveMoneda }}
                </td>
                <td
                    class="general-cell border-l-primaryTableWidth text-center">
                    {{ moneda.Descripcion }}
                </td>
                <td
                    class="general-cell border-l-primaryTableWidth text-center">
                    {{ moneda.Activo ? 'Activo' : 'Inactivo' }}
                </td>
<!--                 class="
                    border-l-primaryTableWidth
                    text-center general-cell
                    flex justify-center items-center">
 -->

                <td v-if="editable" 
                class="general-cell border-l-primaryTableWidth text-start">
                <div class="w-full h-full flex items-center justify-center">
                    <editIco class="cursor-pointer" @click="handleAccion(moneda, 1)" />
                    <trashIco class="cursor-pointer" @click="handleAccion(moneda, 2)" />
                </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>