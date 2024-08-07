<script setup>

import { buyIco, catalogueIco, organizationIco, sellIco, settingsIco, logoutIco } from '@/commons/ui/icons/index'

const props = defineProps({
    data: {
        type: Object,
        default: {}
    },
})

const getIconComponent = (icon) => {
    switch (icon) {
        case 'buyIco':
            return buyIco
        case 'catalogueIco':
            return catalogueIco
        case 'organizationIco':
            return organizationIco
        case 'sellIco':
            return sellIco
        case 'settingsIco':
            return settingsIco
        case 'logoutIco':
            return logoutIco
        default:
            return settingsIco
    }
}
</script>

<template>
    <router-link :to="{ name: data.toProp }"
        class="no-underline text-center w-full flex flex-col items-center justify-center"
        :class="`text-blanco overflow-hidden`">
        <component :is="getIconComponent(data.icon)" class="w-2 sm:w-4 md:w-5 lg:w-6 xl:w-6 2xl:w-6" />
        <p class="font-semibold text-center break-words text-ellipsis text-[0.2rem] lg:text-[0.5rem] md:text-[0.4rem] sm:text-[0.25rem] xl:text-[0.65rem]"
            :class="`text-blanco`">{{ data.title }}</p>
    </router-link>
</template>

<style scoped></style>