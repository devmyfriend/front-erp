<script setup>
import { ref, watch } from 'vue';

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
            <tr class="sticky top-0 h-primaryHeaderTableHeight">
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tl-xl">Clave</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-t-[1px]">Nombre</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tr-xl">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-primaryFontColor" v-for="(impuesto, index) in ListadoImpuestos" :key="index"
                :class="{
                    'bg-primaryBodyTable': (index % 2 === 1 && impuesto.Activo === true),
                    'bg-secondaryBodyTable': (index % 2 === 0 && impuesto.Activo === true),
                    'bg-disableBodyTable': (impuesto.Activo === false), 'text-white': (impuesto.Activo === false), 'font-medium': (impuesto.Activo === false)
                }">
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