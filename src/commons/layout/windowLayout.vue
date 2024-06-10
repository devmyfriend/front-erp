<script setup>
import { onMounted, onUpdated, ref, watch } from 'vue';
import titleH1 from '@/commons/ui/title-h1/title-h1.vue';
import ventanas from '@/modules/productos/components/ventanas.vue'
import { useProductList } from '@/modules/productos/composables/useProductList.js';
import { useRoute } from 'vue-router';
const route = useRoute();


const { title, setTitle, getTitle } = useProductList();
const titulo = ref('');

const updateTitle = () => {
    titulo.value = getTitle();
    console.log('[windowLayout.vue] Titulo actualizado: ' + titulo.value );
};

watch(() => route.name, (newRouteName) => {
    updateTitle();
}, { immediate: true });

onMounted(() => {
    updateTitle();
});

onUpdated(() => {
    updateTitle();
});

</script>

<template>
    <div class="text-[2rem] w-full h-full overflow-hidden">
        <titleH1 class="h-[4.75%] mb-[1.25%]">
            {{ titulo }}
        </titleH1>
        <div class=" bg-container w-full h-[93%] rounded-[2rem] overflow-hidden">
            <ventanas />
            
            <router-view/>
        </div>
     </div>
</template>

<style scoped>

</style>