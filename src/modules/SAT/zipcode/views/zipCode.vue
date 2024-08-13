<script setup>
import { onBeforeMount, onMounted } from "vue";
import { useZipCodeList } from "@/modules/SAT/zipcode/composables/useListZipCode";
import tabla from "@/modules/SAT/zipcode/components/tableZipCode.vue";
import buscadorZipCode from "@/modules/SAT/zipcode/components/zipCodeFinder.vue";
import { useLayout } from "@/commons/composables/useLayout.js";
const { loadData, ZipCodeList } = useZipCodeList();
const { setTitle, setViewTitle } = useLayout();

onBeforeMount(() => {
  setTitle("Códigos postales");
  setViewTitle("Listado de Códigos Postales");
});

onMounted(async () => {
  await loadData();
});
</script>

<template>
      <div class="flex flex-col min-w-full min-h-9 max-w-full max-h-9 mb-6">
        <buscadorZipCode />
      </div>
      <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
        <tabla :ZipCodeList="ZipCodeList" />
      </div>
</template>

<style scoped></style>
