<script setup>
import { ref } from 'vue'
import sidebarItem from '@/commons/ui/sidebar/sidebarItem.vue'

const sidebarItems = ref([
    { srcProp: '/svg/sidebar/orgIco.svg', toProp: 'home', title: 'Organización' },
    { srcProp: '/svg/sidebar/ventaIco.svg', toProp: 'home', title: 'Venta' },
    { srcProp: '/svg/sidebar/compraIco.svg', toProp: 'home', title: 'Compra' },
    { srcProp: '/svg/sidebar/catIco.svg', toProp: 'home', title: 'Catalógo' },
    { srcProp: '/svg/sidebar/cfgIco.svg', toProp: 'home', title: 'Configuración' },
    { srcProp: '/svg/sidebar/cfgIco.svg', toProp: 'Menu', title: 'Menú Temporal' },
    { srcProp: '/svg/sidebar/logoutIco.svg', toProp: 'login', title: 'Logout' }
])
</script>

<template>
    <div class="sideBar-Content">
        <img src="@/assets/img/empresas/fitgym.svg" alt="Empresa" class="sidebarCompanyImg">
    
        <div class="sideBar-Menu">
            <sidebarItem 
            v-for="item in sidebarItems" 
            :srcProp="item.srcProp" 
            :toProp="item.toProp"
            :title="item.title"
            :class="{logout: item.toProp === 'login'}"
            />
        </div>
    </div>
</template>

<style scoped>
.sideBar-Content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 auto;
}
.sidebarCompanyImg{
    width: 3vw;
    height: auto;
    background-color: var(--white);
    border-radius: 50%;
}
.sideBar-Menu{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6%;
    align-items: center;
    margin-top: 1rem;
    padding: 1rem 0rem;
    width: 100%;
    flex: 1 1 auto;
    max-height: 100vh;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.sideBar-Menu::-webkit-scrollbar {
    width: 0;
}
.logout{
    margin-top: auto;
}
</style>