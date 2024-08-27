<script setup>
import btnFile from '@/commons/ui/btn-file/btn-file.vue';
import { useTheme } from '@/commons/composables/theme';
const { theme } = useTheme();
</script>

<template>
    <div class="flex flex-col justify-center items-center rounded-xl border-2 p-4 w-full gap-4 2xl:w-2/6"
        :class="`bg-${theme}-container border-${theme}-primary`">
        <div class="overflow-hidden size-full">
            <img src="https://placehold.co/200x200" alt="Image" class="size-full object-contain">
        </div>
        <btnFile />
    </div>
</template>

<style scoped></style>