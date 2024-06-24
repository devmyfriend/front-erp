<script setup>
import { ref } from 'vue'
import sidebarItem from '@/commons/ui/sidebar/sidebarItem.vue'

const sidebarItems = ref([
    { srcProp: '/svg/sidebarIcons/orgIco.svg', toProp: 'home', title: 'Organización' },
    { srcProp: '/svg/sidebarIcons/sellIco.svg', toProp: 'home', title: 'Venta' },
    { srcProp: '/svg/sidebarIcons/buyIco.svg', toProp: 'home', title: 'Compra' },
    { srcProp: '/svg/sidebarIcons/catIco.svg', toProp: 'home', title: 'Catalógo' },
    { srcProp: '/svg/sidebarIcons/cfgIco.svg', toProp: 'home', title: 'Configuración' },
    { srcProp: '/svg/sidebarIcons/cfgIco.svg', toProp: 'Menu', title: 'Menú Temporal' },
    { srcProp: '/svg/sidebarIcons/logoutIco.svg', toProp: 'login', title: 'Logout' }
])
</script>

<template>
    <div class="flex flex-col justify-between items-center flex-auto pt-4">
        <img src="@/assets/img/empresas/fitgym.svg" alt="Empresa" class=" bg-white rounded-full w-[65%]">
        <div class="sideBar-Menu flex flex-col justify-center gap-[6%] items-center mt-4 py-4 flex-auto overflow-y-scroll">
            <sidebarItem 
            v-for="item in sidebarItems" 
            :srcProp="item.srcProp" 
            :toProp="item.toProp"
            :title="item.title"
            :class="{'mt-auto': item.toProp === 'login'}"
            />
        </div>
    </div>
</template>

<style scoped>
</style>