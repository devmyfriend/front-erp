<script setup>
import { onMounted, defineAsyncComponent } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import { useBusinessEntity } from '@/modules/businessEntity/composables/useBusinessEntity';
const editIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/editIco.vue'));
const trashIco = defineAsyncComponent(() => import('@/commons/ui/icons/tableIcons/trashIco.vue'));
const { businessEntityCollection, loadBusinessEntity } = useBusinessEntity();
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

const handleAccion = (empresa, accion) => {
    emits('eAccion', [empresa, accion]);
};
const selectItem = (empresa) => {
    emits('eSelect', empresa);
};

onMounted(() => {
    loadBusinessEntity();
});

</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th :class="`bg-${theme}-headers`">Clave</th>
                <th :class="`bg-${theme}-headers`">Nombre</th>
                <th :class="`bg-${theme}-headers `">Razón social</th>
                <th :class="`bg-${theme}-headers `">RFC</th>
                <th v-if="editable" :class="`bg-${theme}-headers`"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(empresa, index) in businessEntityCollection" :key="index" class="bg-white"
                :class="[`text-${theme}-text`, clickeable ? 'cursor-pointer hover:font-bold transition-all duration-100' : '']"
                @click="clickeable ? selectItem(empresa) : null">
                <td class="general-cell text-center">
                    {{ empresa.EntidadNegocioId }}
                </td>
                <td class="general-cell border-l-primaryTableWidth text-center">
                    {{ empresa.NombreComercial }}
                </td>
                <td class="general-cell border-l-primaryTableWidth text-center">
                    {{ empresa.NombreOficial }}
                </td>
                <td class="general-cell border-l-primaryTableWidth text-center">
                    {{ empresa.RFC }}
                </td>
                <!--                 <td
                    class="border-l-primaryTableWidth text-center">
                    {{ empresa.Activo ? 'Activo' : 'Inactivo' }}
                </td> -->
                <td v-if="editable" class="general-cell border-l-primaryTableWidth text-start">
                    <div class="w-full h-full flex items-center justify-center">
                        <editIco class="cursor-pointer" @click="handleAccion(empresa, 1)" />
                        <trashIco class="cursor-pointer" @click="handleAccion(empresa, 2)" />
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>