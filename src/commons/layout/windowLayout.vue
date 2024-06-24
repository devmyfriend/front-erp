<script setup>
import { onMounted, onUpdated, ref, watch } from 'vue';
import titleH1 from '@/commons/ui/title-h1/title-h1.vue';
import ventanas from '@/modules/products/components/windows.vue'
import { useWindows } from '@/modules/products/composables/useWindows.js';
import { useRoute } from 'vue-router';
const route = useRoute();


const { getTitle, getBtActivo } = useWindows();
const titulo = ref('');

const updateTitle = () => {
    titulo.value = getTitle();
};

const btActivo = ref(0);

watch(() => route.name, (newRouteName) => {
    updateTitle();
}, { immediate: true });

onMounted(() => {
    updateTitle();
    btActivo.value = getBtActivo();
});

onUpdated(() => {
    updateTitle();
    btActivo.value = getBtActivo();
});

</script>

<template>
    <div class="text-[2rem] w-full h-full overflow-hidden">
        <titleH1 class="h-[4.75%] mb-[1.25%]">
            {{ titulo }}
        </titleH1>
        <div class=" bg-container w-full h-[93%] rounded-[2rem] overflow-scroll">
            <ventanas :btActivo="btActivo" class="sticky top-0 bg-white" />

            <router-view />
        </div>
    </div>
</template>

<style scoped></style>