<script setup>
    import sidebar from '@/commons/ui/sidebar/sidebar.vue';
</script>

<template>
    <div class="containerMy">
        <div class="navbarMy">
            <h1 class="navbarTitle"> THE FIT GYM </h1>
            <img src="@/assets/svg/user/userIco.svg" alt="Usuario" class="navbarUserImg">
        </div>
        <div class="sidebarMy">
            <sidebar />
        </div>
        <div class="contentMy">
            <h1 class="moduleTitle"> <slot name="Titulo"> Menu </slot> </h1>
            <div class="w-full flex flex-col sticky top-0 z-10 max-h-max content-center items-center bg-container rounded-t-primaryContainerRadius">
                <slot name="Ventanas">

                </slot>
            </div>

            <div class="contenedor-Container">
                <slot name="Contenido"> <p class="h-full w-full flex flex-col bg-purple-400 justify-center items-center"> lorem </p> </slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import url('@/commons/styles/styleLayout.css');
    
</style>