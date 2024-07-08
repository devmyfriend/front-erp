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
    <router-link :to="{ name: data.toProp}" class="no-underline text-secondaryFontColor text-center w-full flex flex-col items-center justify-center">
        <component :is="getIconComponent(data.icon)" />
        <p class="px-2 text-[0.65vw] font-semibold text-center break-all m-0 text-white">{{ data.title }}</p>
    </router-link>
</template>

<style scoped>
</style>