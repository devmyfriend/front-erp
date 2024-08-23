<script setup>
import { onMounted, defineAsyncComponent } from 'vue';
import { useTheme } from '@/commons/composables/theme';
const editIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/editIco.vue'));
const trashIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/trashIco.vue'));
const { theme } = useTheme();

const emits = defineEmits(['eAccion', 'eSelect']);
const props = defineProps({
    ListaSucursales: {
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
</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th :class="`bg-${theme}-headers`">Clave</th>
                <th :class="`bg-${theme}-headers`">Código Postal</th>
                <th :class="`bg-${theme}-headers`">Colonia</th>
                <th :class="`bg-${theme}-headers`">Municipio</th>
                <th :class="`bg-${theme}-headers`">Nombre</th>
                <th :class="`bg-${theme}-headers`">País</th>
                <th v-if="editable" :class="`bg-${theme}-headers`"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(branch, index) in ListaSucursales" :key="index"
                :class="[`text-${theme}-text bg-white`, clickeable ? 'cursor-pointer hover:font-bold transition-all duration-100' : '']"
                @click="clickeable ? selectItem(branch) : null">
                <td class="general-cell text-center">
                    {{ branch.SucursalId }}
                </td>
                <td class="general-cell text-center border-l-primaryTableWidth">
                    {{ branch.CodigoPostal }}
                </td>
                <td class="general-cell text-center border-l-primaryTableWidth">
                    {{ branch.Colonia }}
                </td>
                <td class="general-cell text-center border-l-primaryTableWidth">
                    {{ branch.Municipio }}
                </td>
                <td class="general-cell text-center border-l-primaryTableWidth">
                    {{ branch.NombreSucursal }}
                </td>
                <td class="general-cell text-center border-l-primaryTableWidth">
                    {{ branch.Pais }}
                </td>
                <td v-if="editable" class="general-cell border-l-primaryTableWidth text-start">
                    <div class="w-full h-full flex items-center justify-center">
                        <editIco class="cursor-pointer" @click="handleAccion(branch, 1)" />
                        <trashIco class="cursor-pointer" @click="handleAccion(branch, 2)" />
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>