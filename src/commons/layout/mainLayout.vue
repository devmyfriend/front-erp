<script setup>
    import sidebar from '@/commons/ui/sidebar/sidebar.vue';
</script>

<template>
    <div class="containerMy">
        <div class="navbarMy">
            <h1 class="navbarTitle"> THE FIT GYM </h1>
            <img src="@/assets/svg/user/userIco.svg" alt="Usuario" class="navbarUserImg">
        </div>
        <div class="sidebarMy min-w-[4.5vw] w-[4.5vw] overflow-hidden p-2 flex flex-col bg-sidebar text-secondaryFontColor">
            <sidebar />
        </div>
        <div class="contentMy">
            <router-view/>
        </div>
    </div>
</template>

<style scoped>
    @import url('@/commons/styles/estilosLayout.css');
    @import url('@/commons/styles/estilosGym.css');
</style>