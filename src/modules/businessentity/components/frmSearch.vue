<script setup>
import { ref } from 'vue';
import SearchIco from '@/commons/ui/icons/actionIcons/searchIco.vue';

const txtOfficialName = ref('')

function buscar(texto) {
    if (texto.length != 0) {

    }
}
</script>

<template>
    <div class="flex items-center h-inputHeight">

        <input
            class=" text-black rounded-inputRadius border-inputBorder border-inputWidth p-paddingInput lg:w-96 md:w-60 sm:w-32 outline-none h-full text-base"
            type="text" name="txtBusinessEntity" placeholder="Nombre Oficial" role="search" id=""
            v-model="txtOfficialName" />
        <SearchIco @click="buscar(txtOfficialName)" class="cursor-pointer h-buscadorIconHeight ml-4" />
    </div>
</template>

<style scoped>
input::placeholder {
    color: theme('colors.disabled.DEFAULT');
}
</style>