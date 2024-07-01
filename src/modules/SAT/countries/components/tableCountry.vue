<script setup>
import { ref, watch } from 'vue';

const ListadoPaises = ref([]);

const props = defineProps({
    ListadoPaises: {
        type: Array,
        default: () => []
    }
});

watch(() => props.ListadoPaises, (newValue) => {
    ListadoPaises.value = newValue;
});
</script>

<template>
    <table class="w-full leading-4 text-[1rem]">
        <thead>
            <tr class="sticky top-0 h-primaryHeaderTableHeight">
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-tl-xl">Clave</th>
                <th class="border-b-secondaryTableWidth border-b-primaryUnderline bg-primaryHeaderTable rounded-t-[1px]">Nombre</th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-primaryFontColor" v-for="(pais, index) in ListadoPaises" :key="index"
                :class="{
                    'bg-primaryBodyTable': (index % 2 === 1),
                    'bg-secondaryBodyTable': (index % 2 === 0)
                }">
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-center truncate">
                    {{ pais.ClavePais }}
                </td>
                <td class="h-primaryBodyTableHeight border-l-primaryTableWidth border-b-secondaryTableWidth border-b-primaryUnderline px-2 text-start truncate">
                    {{ pais.Descripcion }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>