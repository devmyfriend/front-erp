<script setup>
    import FrmLogin from '@/modules/loging/components/FrmLogin.vue'
</script>

<template>
    <div class="logContainer flex items-center justify-center ">
        <div class="flex flex-col items-center justify-center h-[100%] mx-auto">
            <div class=" flex items-center">
                <h1 class=" text-blod font-bold text-4xl text-[#458D78]">POSHEXAGON</h1>
            </div>
            <FrmLogin></FrmLogin>
        </div>
    </div>
</template>

<style scoped>
    .logContainer{
    background-image: url('/svg/generalIcons/bg-login.svg'); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    min-height: 100vh;
  }
</style>



