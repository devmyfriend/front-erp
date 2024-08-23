<script setup>
import { onMounted, defineAsyncComponent } from 'vue';
import { useTheme } from '@/commons/composables/theme';
const editIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/editIco.vue'));
const trashIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/trashIco.vue'));
const { theme } = useTheme();

const emits = defineEmits(['eAccion', 'eSelect']);
const props = defineProps({
    ListaSucursales:{
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

const handleAccion = (email, accion) => {
    emits('eAccion', [email, accion]);
};
const selectItem = (email) => {
    emits('eSelect', email);
};

const test1 = () => {
    console.log('test1');
    console.log('ListaSucursales: \n' + JSON.stringify(props.ListaSucursales));
    
}
</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]" @click="test1">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th :class="`bg-${theme}-headers`">Sucursales</th>
                <th v-if="editable" :class="`bg-${theme}-headers`"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(email, index) in ListaSucursales" :key="index"
                :class="[`text-${theme}-text bg-white`, clickeable ? 'cursor-pointer hover:font-bold transition-all duration-100' : '']"
                @click="clickeable ? selectItem(email) : null">
                <td class="general-cell text-center">
                    {{ email.Email }}
                </td>
                <td v-if="editable" 
                class="general-cell border-l-primaryTableWidth text-start">
                <div class="w-full h-full flex items-center justify-center">
                    <editIco class="cursor-pointer" @click="handleAccion(email, 1)" />
                    <trashIco class="cursor-pointer" @click="handleAccion(email, 2)" />
                </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>