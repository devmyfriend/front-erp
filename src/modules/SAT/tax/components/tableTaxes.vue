<script setup>
import { ref, watch } from 'vue';
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();

const ListadoImpuestos = ref([]);

const props = defineProps({
    ListadoImpuestos: {
        type: Array,
        default: () => []
    }
});

watch(() => props.ListadoImpuestos, (newValue) => {
    ListadoImpuestos.value = newValue;
});
</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight text-white">
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tl-xl" :class="`bg-${theme}-primary`" >Clave</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-t-[1px]" :class="`bg-${theme}-primary`" >Nombre</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tr-xl" :class="`bg-${theme}-primary`" >Status</th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-primaryFontColor" v-for="(impuesto, index) in ListadoImpuestos" :key="index"
                :class="[
                    impuesto.Activo ? `text-${theme}-text bg-white` : '',
                    !impuesto.Activo ? `text-${theme}-subtext bg-${theme}-disabled` : ''
                ]">
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ impuesto.ClaveImpuesto }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    {{ impuesto.Nombre }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ impuesto.Activo ? 'Activo' : 'Inactivo'}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>