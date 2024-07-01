<script setup>
import { ref, watch } from 'vue';

const ListadoMetodosPago = ref([]);

const props = defineProps({
    ListadoMetodosPago: {
        type: Array,
        default: () => []
    }
});

watch(() => props.ListadoMetodosPago, (newValue) => {
    ListadoMetodosPago.value = newValue;
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
            <tr class="text-primaryFontColor" v-for="(metodo, index) in ListadoMetodosPago" :key="index"
                :class="{
                    'bg-primaryBodyTable': (index % 2 === 1 && metodo.Activo === 1),
                    'bg-secondaryBodyTable': (index % 2 === 0 && metodo.Activo === 1),
                    'bg-disableBodyTable': (metodo.Activo === 0), 'text-white': (metodo.Activo === 0), 'font-medium': (metodo.Activo === 0)
                }">
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ metodo.ClaveMetodoPago }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    {{ metodo.Descripcion }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ metodo.Activo ? 'Activo' : 'Inactivo'}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>