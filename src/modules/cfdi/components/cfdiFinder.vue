<script setup>
import { ref } from "vue";
import { useCfdi } from "@/store/cfdiStore";

const store = useCfdi();
const txtBusqueda = ref("");

const searchCfdi = () => {
  const cfdiClave = txtBusqueda.value.trim().toUpperCase();
  store.filterCfdi(cfdiClave);
};
</script>

<template>
  <div class="flex items-center h-inputHeight">
    <input
      class="text-primaryFontColor rounded-inputRadius border-inputBorder border-inputWidth p-paddingInput lg:w-96 md:w-60 sm:w-32 outline-none h-full text-base"
      type="text"
      v-model="txtBusqueda"
      @keyup.enter="searchCfdi"
      placeholder="Buscar CFDi"
    />
    <img
      src="/svg/generalIcons/searchIco.svg"
      alt="Icono de buscador de CFDi"
      class="cursor-pointer h-buscadorIconHeight ml-4"
      @click="searchCfdi"
    />
  </div>
</template>

<style scoped>
input::placeholder {
  color: theme("colors.disableBodyTable");
}
</style>
