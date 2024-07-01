<script setup>
import { ref, watch } from 'vue';

const ListadoMonedas = ref([]);

const props = defineProps({
    ListadoMonedas: {
        type: Array,
        default: () => []
    }
});

watch(() => props.ListadoMonedas, (newValue) => {
    ListadoMonedas.value = newValue;
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
            <tr class="text-primaryFontColor" v-for="(moneda, index) in ListadoMonedas" :key="index"
                :class="{
                    'bg-primaryBodyTable': (index % 2 === 1 && moneda.Activo === true),
                    'bg-secondaryBodyTable': (index % 2 === 0 && moneda.Activo === true),
                    'bg-disableBodyTable': (moneda.Activo === false), 'text-white': (moneda.Activo === false), 'font-medium': (moneda.Activo === false)
                }">
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ moneda.ClaveMoneda }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    {{ moneda.Descripcion }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ moneda.Activo ? 'Activo' : 'Inactivo'}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>