<script setup>
import { onMounted, ref } from 'vue';
import ventanas from '@/modules/products/components/windows.vue';
import { useLayout } from '@/commons/composables/useLayout';
const { setTitle } = useLayout();   

import { useRouter } from 'vue-router';
const router = useRouter();
onMounted(() => {
    setTitle('Productos');
});
</script>

<template>
    <div class="flex sticky top-0 z-20">
        <ventanas />
    </div>

    <div class="flex-grow flex flex-col">
        <router-view/>
    </div>

</template>

<style scoped>

</style>