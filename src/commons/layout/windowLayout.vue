<script setup>
import { ref, provide } from 'vue';
import titleH1 from '@/commons/ui/title-h1/title-h1.vue';
import { useTheme } from '@/commons/composables/theme'
const { theme } = useTheme();

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
        <div class="w-full h-[93%] rounded-[2rem] overflow-hidden" :class="`bg-${theme}-container`">
            <component :is="windowsContent" class="sticky top-0" :class="`bg-${theme}-background`" />
            <router-view />
        </div>
    </div>
</template>

<style scoped></style>