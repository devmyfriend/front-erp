<script setup>
import { onMounted, onUpdated, ref, provide } from 'vue';
import titleH1 from '@/commons/ui/title-h1/title-h1.vue';
import { windowLayoutStore } from '@/store/windowLayoutStore';

const titleContent = ref('');
const windowsContent = ref(null);

provide('setTitleContent', (content) => {
  titleContent.value = content;
});
provide('setWindowContent', (content) => {
  windowsContent.value = content;
});

</script>

<template>
    <div class="text-[2rem] w-full h-full overflow-hidden">
        <titleH1 class="h-[4.75%] mb-[1.25%]">
            <slot name="title-content">
                <div v-html="titleContent"></div>
            </slot>
        </titleH1>
        <div class=" bg-container w-full h-[93%] rounded-[2rem] overflow-scroll">
            <component :is="windowsContent" class="sticky top-0 bg-white" />
            <router-view />
        </div>
    </div>
</template>

<style scoped></style>