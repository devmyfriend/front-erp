<script setup>
import { onBeforeMount, onMounted } from "vue";
import { useZipCodeList } from "@/modules/SAT/zipcode/composables/useListZipCode";
import tabla from "@/modules/SAT/zipcode/components/tableZipCode.vue";
import buscadorZipCode from "@/modules/SAT/zipcode/components/zipCodeFinder.vue";
import { useLayout } from "@/commons/composables/useLayout.js";
import titleH2 from "@/commons/ui/title-h2/title-h2.vue";
const { loadData, ZipCodeList } = useZipCodeList();
const { setTitle } = useLayout();

onBeforeMount(() => {
  setTitle("Códigos postales");
});

onMounted(async () => {
  await loadData();
});
</script>

<template>
  <div class="w-full h-full p-4 flex justify-center items-center">
    <div class="w-full h-full flex flex-col">
      <titleH2> Listado de Códigos Postales </titleH2>
      <div class="flex flex-col min-w-full min-h-9 max-w-full max-h-9 mb-6">
        <buscadorZipCode />
      </div>
      <div class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-3xl">
        <tabla :ZipCodeList="ZipCodeList" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
