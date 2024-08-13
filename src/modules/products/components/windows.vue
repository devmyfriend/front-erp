<script setup>
import { ref } from 'vue';
import closeIco from '@/commons/ui/icons/actionIcons/closeIco.vue';
import { useTheme } from '@/commons/composables/theme';
import { useRouter } from 'vue-router';
const router = useRouter();
const { theme } = useTheme();

const props = defineProps({
    tabsCollection: Array
});

const btnActivo = ref(parseInt(sessionStorage.getItem('btnActivo')) || 0);

const changeView = (view, index) => {
    router.push({ name: view.route });
    btnActivo.value = index;
    sessionStorage.setItem('btnActivo', index);
}
</script>

<template>
    <div class="flex-grow h-[44px] flex flex-row justify-between" :class="`bg-${theme}-background`">
        <div class="flex flex-row overflow-hidden rounded-xl shadow-md shadow-[#212121] h-8" :class="`bg-${theme}-primary`">
            <button v-for="(tab, index) in tabsCollection" :key="index"
            class="cursor-pointer flex-shrink-0 text-white px-4 border text-xs md:text-base hover:px-6 transition-all duration-200"
            :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover border-${theme}-primary-hover ${ btnActivo === index ? `bg-${theme}-primary-hover px-6` : ''}`"
            @click="changeView(tab, index)">
                {{ tab.name }}
            </button>
        </div>
        <closeIco class="h-full mx-2 cursor-pointer closeIco hover:w-7 transition-all duration-200" @click="changeView(tabsCollection[0], 0)"/>
    </div>
</template>

<style scoped>
.closeIco{
    filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.8));
}
</style>