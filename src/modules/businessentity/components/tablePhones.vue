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
    ListaTelefonos:{
        type: Array,
        default: () => []
    },
    editable: {
        type: Boolean,
        default: false
    },
    clickeable: {
        type: Boolean,
        default: false
    }
});

const handleAccion = (telefono, accion) => {
    emits('eAccion', [telefono, accion]);
};
const selectItem = (telefono) => {
    emits('eSelect', telefono);
};

onMounted(() => {
    cargarDatos();
});

const test1 = () => {
    console.log('test1');
    console.log('ListaTelefonos: \n' + JSON.stringify(props.ListaTelefonos));
    
}
</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]" @click="test1">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th :class="`bg-${theme}-headers`">Teléfono</th>
                <th v-if="editable" :class="`bg-${theme}-headers`"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(telefono, index) in ListaTelefonos" :key="index"
                :class="[`text-${theme}-text bg-white`, clickeable ? 'cursor-pointer hover:font-bold transition-all duration-100' : '']"
                @click="clickeable ? selectItem(telefono) : null">
                <td class="general-cell text-center">
                    {{ telefono.NumeroTelefonico }}
                </td>
                <td v-if="editable" 
                class="general-cell border-l-primaryTableWidth text-start">
                <div class="w-full h-full flex items-center justify-center">
                    <editIco class="cursor-pointer" @click="handleAccion(telefono, 1)" />
                    <trashIco class="cursor-pointer" @click="handleAccion(telefono, 2)" />
                </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>