<script setup>
import { ref } from 'vue'
import sidebarItem from '@/commons/ui/sidebar/sidebarItem.vue'

const sidebarItems = ref([
    { icon: 'organizationIco', toProp: 'home', title: 'Organización' },
    { icon: 'sellIco', toProp: 'home', title: 'Venta' },
    { icon: 'buyIco', toProp: 'home', title: 'Compra' },
    { icon: 'catalogueIco', toProp: 'home', title: 'Catalógo' },
    { icon: 'settingsIco', toProp: 'home', title: 'Configuración' },
    { toProp: 'Menu', title: 'Menú Temporal' },
    { icon: 'logoutIco', toProp: 'login', title: 'Logout' }
])
</script>

<template>
    <div class="flex flex-col justify-between items-center flex-auto pt-4">
        <img src="/svg/empresas/fitgym.svg" alt="Empresa" class=" bg-white rounded-full w-[65%]">
        <div class="sideBar-Menu flex flex-col justify-center gap-[6%] items-center mt-4 py-4 flex-auto overflow-y-scroll">
            <sidebarItem 
            v-for="(item, index) in sidebarItems"
            :key="index"    
            :data="item"
            :class="{'mt-auto': item.toProp === 'login'}"
            />
        </div>
    </div>
</template>

<style scoped>
</style>