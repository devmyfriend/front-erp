<script setup>
import { onMounted } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import editIco from '@/commons/ui/icons/tableIcons/editIco.vue';
import trashIco from '@/commons/ui/icons/tableIcons/trashIco.vue';
import { useCoins } from '@/modules/SAT/coins/composables/useCoins';
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
                <th class="bg-primaryHeaderTable" :class="`bg-${theme}-headers`">Clave</th>
                <th class="bg-primaryHeaderTable" :class="`bg-${theme}-headers`">Nombre</th>
                <th class="bg-primaryHeaderTable" :class="`bg-${theme}-headers `">Status</th>
                <th v-if="editable" class="bg-primaryHeaderTable " :class="`bg-${theme}-headers`"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(moneda, index) in coinsCollection" :key="index" :class="[
                moneda.Activo ? `text-${theme}-text bg-white` : '',
                !moneda.Activo ? `text-${theme}-text bg-disabled-${theme}` : '',
                clickeable ? 'cursor-pointer hover:font-bold transition-all duration-100' : ''
            ]" @click="clickeable ? selectItem(moneda) : null">
                <td class="h-primaryBodyTableHeight border-b-secondaryTableWidth px-2 text-center truncate">
                    {{ moneda.ClaveMoneda }}
                </td>
                <td
                    class="h-primaryBodyTableHeight border-b-secondaryTableWidth border-l-primaryTableWidth px-2 text-center truncate">
                    {{ moneda.Descripcion }}
                </td>
                <td
                    class="h-primaryBodyTableHeight border-b-secondaryTableWidth border-l-primaryTableWidth px-2 text-center truncate">
                    {{ moneda.Activo ? 'Activo' : 'Inactivo' }}
                </td>
                <td v-if="editable" class="h-primaryBodyTableHeight 
                    border-b-secondaryTableWidth
                    border-l-primaryTableWidth
                    text-center truncate px-2
                    flex justify-center items-center">
                    <editIco class="cursor-pointer" @click="handleAccion(moneda, 1)" />
                    <trashIco class="cursor-pointer" @click="handleAccion(moneda, 2)" />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>