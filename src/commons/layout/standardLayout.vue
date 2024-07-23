<script setup>
import { onMounted, onUpdated, ref, watch } from 'vue';
import titleH1 from '@/commons/ui/title-h1/title-h1.vue';
import { useLayout } from '@/commons/composables/useLayout.js';
import { useRoute } from 'vue-router';
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
const route = useRoute();

const { getTitle } = useLayout();
const titulo = ref('');

const updateTitle = () => {
    titulo.value = getTitle();
};

watch(() => route.name, () => {
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
            <template v-slot>
                <slot name="Titulo">
                    {{ titulo }}
                </slot> 
            </template>
        </titleH1>
        <div class="w-full h-[93%] rounded-[2rem] overflow-scroll" :class="`bg-${theme}-background`">
            <router-view/>
        </div>
     </div>
</template>

<style scoped>

</style>