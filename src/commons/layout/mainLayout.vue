<script setup>
    import sidebar from '@/commons/ui/sidebar/sidebar.vue';
</script>

<template>
    <div class="containerMy grid h-screen min-h-screen max-h-screen w-screen bg-general text-secondaryFontColor">
        <div class="navbarMy bg-navbar text-secondaryFontColor 
        px-4 py-2 text-center flex justify-between items-center 
        h-[6vh] max-h-[6vh] w-[96vw] max-w-[96vw] box-border 
        border-b-inputWidth border-primary col-span-2">

            <h1 class="navbarTitle text-[4vh] leading-[4vh] font-bold p-0 text-start m-0"> THE FIT GYM </h1>
            <img src="@/assets/svg/user/userIco.svg" alt="Usuario" class="navbarUserImg h-full max-h-full">
        </div>
        <div class="sidebarMy min-w-[4vw] w-[4vw] max-h-screen overflow-hidden flex flex-col bg-sidebar text-secondaryFontColor">
            <sidebar />
        </div>
        <div class="contentMy bg-general text-secondaryFontColor p-4 flex-auto flex flex-col max-h-[94vh] w-[96vw] max-w-[96vw]">
            <router-view/>
        </div>
    </div>
</template>

<style scoped>
    @import url('@/commons/styles/estilosLayout.css');
    @import url('@/commons/styles/estilosGym.css');
</style>