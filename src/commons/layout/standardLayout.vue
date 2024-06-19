<script setup>
import { ref } from 'vue';
import titleH1 from '@/commons/ui/title-h1/title-h1.vue';
import ventanas from '@/modules/productos/components/ventanas.vue'
</script>

<template>
    <div class="text-[2rem] w-full h-full overflow-hidden">
        <titleH1 class="h-[4.75%] mb-[1.25%]">
            <template v-slot>
                <slot name="Titulo">
                    ERP
                </slot> 
            </template>
        </titleH1>
        <div class=" bg-container w-full h-[93%] rounded-[2rem] overflow-scroll">
            <router-view/>
        </div>
     </div>
</template>

<style scoped>

</style>