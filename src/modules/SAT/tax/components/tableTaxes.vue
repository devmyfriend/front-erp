<script setup>
import { ref, watch } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import editIco from '@/commons/ui/icons/tableIcons/editIco.vue';
import trashIco from '@/commons/ui/icons/tableIcons/trashIco.vue';
const { theme } = useTheme();
const emits = defineEmits(['eAccion']);

const ListadoImpuestos = ref([]);

const props = defineProps({
    ListadoImpuestos: {
        type: Array,
        default: () => []
    },
    editable: {
        type: Boolean,
        default: false
    },
    accion: {
        type: Array,
        default: () => []
    }
});

const handleAccion = (impuesto, accion) => {
    emits('eAccion', [impuesto, accion]);
};

watch(() => props.ListadoImpuestos, (newValue) => {
    ListadoImpuestos.value = newValue;
});
</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-4 sm:h-6 md:h-8 lg:h-10 xl:h-11 2xl:h-primaryHeaderTableHeight text-white">
                <th class="border-b-primaryUnderline bg-primaryHeaderTable " :class="`bg-${theme}-headers`">Clave</th>
                <th class="border-b-primaryUnderline bg-primaryHeaderTable" :class="`bg-${theme}-headers`">Nombre</th>
                <th class="border-b-primaryUnderline bg-primaryHeaderTable" :class="`bg-${theme}-headers`">Status </th>
                <th v-if="editable" class="border-b-primaryUnderline bg-primaryHeaderTable"
                    :class="`bg-${theme}-headers`"> Acciones </th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-primaryFontColor" v-for="(impuesto, index) in ListadoImpuestos" :key="index" :class="[
                impuesto.Activo ? `text-${theme}-text bg-white` : '',
                !impuesto.Activo ? `text-${theme}-subtext bg-${theme}-disabled` : ''
            ]">
                <td
                    class="max-h-6 sm:max-h-6 md:max-h-7 lg:max-h-8 xl:max-h-9 2xl:max-h-10 border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ impuesto.ClaveImpuesto }}
                </td>
                <td
                    class="max-h-6 sm:max-h-6 md:max-h-7 lg:max-h-8 xl:max-h-9 2xl:max-h-10 border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    {{ impuesto.Nombre }}
                </td>
                <td
                    class="max-h-6 sm:max-h-6 md:max-h-7 lg:max-h-8 xl:max-h-9 2xl:max-h-10 border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ impuesto.Activo ? 'Activo' : 'Inactivo' }}
                </td>
                <td v-if="editable"
                    class="max-h-6 sm:max-h-6 md:max-h-7 lg:max-h-8 xl:max-h-9 2xl:max-h-10 border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate flex justify-center items-center">
                    <editIco class="cursor-pointer" @click="handleAccion(impuesto, 1)" />
                    <trashIco class="cursor-pointer" @click="handleAccion(impuesto, 2)" />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>