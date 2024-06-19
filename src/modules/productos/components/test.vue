<script setup>
import { ref } from 'vue';
import sidebar from '@/commons/ui/sidebar/sidebar.vue';
import navbar from '@/commons/ui/navbar/navbar.vue';
</script>

<template>
  <div class="contenedor-testeo h-screen w-screen">
    <aside class="sidebar bg-sidebar text-secondaryFontColor grow basis-[3.5vw] flex">
      <sidebar/>
    </aside>
    <main class="main-content flex flex-col bg-red-700 grow basis-[96.5vw]">
      <nav class="bg-navbar px-4 py-2 basis-[6%] flex justify-between text-center text-secondaryFontColor items-center box-border border-b-[1px] border-primary">

        <navbar/>

      </nav>

      <div class="bg-general text-secondaryFontColor p-4 flex flex-col h-full">
        <!-- <router-view/> -->
         <div class="bg-purple-600 h-full w-full overflow--y-scroll">

         </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.contenedor-testeo {
  display: flex;
}
</style>