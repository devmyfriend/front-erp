<script setup>
import { ref, watch } from 'vue';

const ListadoFormasPago = ref([]);

const props = defineProps({
    ListadoFormasPago: {
        type: Array,
        default: () => []
    }
});

watch(() => props.ListadoFormasPago, (newValue) => {
    ListadoFormasPago.value = newValue;
});
</script>

<template>
    <table class="w-full table-fixed leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight">
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tl-xl">Clave</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-t-[1px]">Nombre</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-t-[1px]">Bancarizado</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tr-xl">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-primaryFontColor" v-for="(forma, index) in ListadoFormasPago" :key="index"
                :class="{
                    'bg-primaryBodyTable': (index % 2 === 1 && forma.Activo === 1),
                    'bg-secondaryBodyTable': (index % 2 === 0 && forma.Activo === 1),
                    'bg-disableBodyTable': (forma.Activo === 0), 'text-white': (forma.Activo === 0), 'font-medium': (forma.Activo === 0)
                }">
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ forma.ClaveFormaPago }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    {{ forma.Descripcion }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ forma.Bancarizado ? 'Si' : 'No' }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ forma.Activo ? 'Activo' : 'Inactivo'}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>