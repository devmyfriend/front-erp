<script setup>
import { onBeforeMount } from "vue";
import tabla from "@/modules/SAT/zipcode/components/tableZipCode.vue";
import buscadorZipCode from "@/modules/SAT/zipcode/components/zipCodeFinder.vue";
import { useLayout } from "@/commons/composables/useLayout.js";
const { setTitle, setViewTitle } = useLayout();

onBeforeMount(() => {
  setTitle("Códigos postales");
  setViewTitle("Listado de Códigos Postales");
});
</script>

<template>
      <div class="flex flex-col min-w-full min-h-9 max-w-full max-h-9 mb-6">
        <buscadorZipCode />
      </div>
      <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
        <tabla/>
      </div>
</template>

<style scoped></style>
